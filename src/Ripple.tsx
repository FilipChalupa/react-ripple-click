'use client'

import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type FunctionComponent,
} from 'react'
import styles from './Ripple.module.css'

const interactiveElementSelector = 'a, button' as const

type RipplesStyleProps = {
	rippleOpacity?: number
	transition?: string
	rippleSpeed?: string
	rippleColor?: string
}

export const Ripple: FunctionComponent<RipplesStyleProps> = ({
	rippleOpacity = 0.2,
	transition = 'ease in',
	rippleSpeed = '0.6s',
	rippleColor = 'currentcolor',
}) => {
	const [ripples, setRipples] = useState<
		Array<{
			id: number
			size: number
			x: number
			y: number
		}>
	>([])
	const ref = useRef<HTMLSpanElement>(null)
	const handlePointerDown = useCallback((event: PointerEvent) => {
		const rippleElement = ref.current
		if (!rippleElement) {
			return
		}
		const parent = rippleElement.parentElement?.closest(
			interactiveElementSelector
		)
		if (!parent) {
			return
		}
		if (
			!(event.target instanceof HTMLElement) &&
			!(event.target instanceof SVGElement)
		) {
			return
		}
		const interactedWithElement = event.target.closest(
			interactiveElementSelector
		)
		if (interactedWithElement !== parent) {
			return
		}
		if (
			interactedWithElement instanceof HTMLButtonElement &&
			interactedWithElement.disabled
		) {
			return
		}
		const rect = parent.getBoundingClientRect()
		const size =
			2 * Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2))
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top
		setRipples((ripples) => [
			...ripples,
			{
				id: event.timeStamp,
				size,
				x,
				y,
			},
		])
	}, [])

	useEffect(() => {
		document.body.addEventListener('pointerdown', handlePointerDown)
		return () => {
			document.body.removeEventListener('pointerdown', handlePointerDown)
		}
	}, [handlePointerDown])

	const discardRipple = useCallback((rippleId: number) => {
		setRipples((ripples) => ripples.filter((ripple) => ripple.id !== rippleId))
	}, [])

	return (
		<span ref={ref} className={styles.wrapper}>
			{ripples.map((ripple) => (
				<span
					className={styles.ripple}
					key={ripple.id}
					style={
						{
							'--Ripple-opacity': rippleOpacity,
							animationDuration: rippleSpeed,
							animationTimingFunction: transition,
							backgroundColor: rippleColor,
							'--Ripple-size': `${ripple.size}px`,
							'--Ripple-x': `${ripple.x}px`,
							'--Ripple-y': `${ripple.y}px`,
						} as CSSProperties
					}
					onAnimationEnd={() => {
						discardRipple(ripple.id)
					}}
				/>
			))}
		</span>
	)
}
