import {
	CSSProperties,
	FunctionComponent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import styles from './Ripple.module.css'

export type RippleProps = Record<string, never>

const interactiveElementSelector = 'a, button' as const

export const Ripple: FunctionComponent<RippleProps> = ({}) => {
	const [ripple, setRipple] = useState<null | {
		id: number
		size: number
		x: number
		y: number
	}>(null)
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
		setRipple({
			id: event.timeStamp,
			size,
			x,
			y,
		})
	}, [])

	useEffect(() => {
		document.body.addEventListener('pointerdown', handlePointerDown)
		return () => {
			document.body.removeEventListener('pointerdown', handlePointerDown)
		}
	}, [handlePointerDown])

	return (
		<span ref={ref} className={styles.wrapper}>
			{ripple && (
				<span
					className={styles.ripple}
					key={ripple.id}
					style={
						{
							'--Ripple-size': `${ripple.size}px`,
							'--Ripple-x': `${ripple.x}px`,
							'--Ripple-y': `${ripple.y}px`,
						} as CSSProperties
					}
				/>
			)}
		</span>
	)
}
