import type { Meta, StoryObj } from '@storybook/react'
import { FunctionComponent, PropsWithChildren } from 'react'
import { Ripple } from './Ripple'
import './Ripple.stories.css'

const Button: FunctionComponent<
	PropsWithChildren<{ className?: string; disabled?: boolean }>
> = ({ children, className = 'button--basic', disabled, ...props }) => {
	return (
		<button className={className} disabled={disabled}>
			<Ripple {...props} />
			{children}
		</button>
	)
}

const meta = {
	title: 'Ripple',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Plain: Story = {
	args: {
		children: 'Click me',
	},
}

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
}

export const Purple: Story = {
	args: {
		children: 'Purple',
		className: 'button--purple',
	},
}

export const Blue: Story = {
	args: {
		children: 'Blue',
		className: 'button--blue',
	},
}
