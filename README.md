# React ripple click [![npm](https://img.shields.io/npm/v/react-ripple-click.svg)](https://www.npmjs.com/package/react-ripple-click) ![npm type definitions](https://img.shields.io/npm/types/react-ripple-click.svg)

Ripple effect for your buttons.

![UI example](https://raw.githubusercontent.com/FilipChalupa/react-ripple-click/HEAD/screencast.gif)

## Installation

```bash
npm install react-ripple-click
```

## How to use

```jsx
import { Ripple } from 'react-ripple-click'
import 'react-ripple-click/dist/index.css'

const App = () => {
	return (
		<button
			style={{
				position: 'relative',
				overflow: 'hidden',
				isolation: 'isolate',
			}}
		>
			<Ripple />
			Click me
		</button>
	)
}
```
