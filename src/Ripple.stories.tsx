import type { Meta, StoryObj } from '@storybook/react'
import { Ripple } from './Ripple'
import './Ripple.stories.css'

const meta = {
	title: 'Ripple',
	component: Ripple,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Ripple>

export default meta
type Story = StoryObj<typeof meta>

export const Plain: Story = {
	decorators: [
		(Story) => (
			<button className="button--basic">
				<Story />
				Click me
			</button>
		),
	],
}

export const Disabled: Story = {
	decorators: [
		(Story) => (
			<button className="button--basic" disabled>
				<Story />
				Disabled
			</button>
		),
	],
}

export const Purple: Story = {
	decorators: [
		(Story) => (
			<button className="button--purple">
				<Story />
				Purple
			</button>
		),
	],
}

export const Blue: Story = {
	decorators: [
		(Story) => (
			<button className="button--blue">
				<Story />
				Blue
			</button>
		),
	],
}

export const CustomRedOverride: Story = {
	decorators: [
		(Story) => (
			<button className="button--custom">
				<Story />
				Red
			</button>
		),
		(Story) => (
			<div className="theme--red">
				<Story />
			</div>
		),
	],
}

export const CustomGreenOverride: Story = {
	decorators: [
		(Story) => (
			<button className="button--custom">
				<Story />
				Green
			</button>
		),
		(Story) => (
			<div className="theme--green">
				<Story />
			</div>
		),
	],
}
