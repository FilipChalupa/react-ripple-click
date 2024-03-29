# React ripple click [![npm](https://img.shields.io/npm/v/react-ripple-click.svg)](https://www.npmjs.com/package/react-ripple-click) ![npm type definitions](https://img.shields.io/npm/types/react-ripple-click.svg)

Ripple effect for your buttons. Try interactive [CodeSandbox demo](https://codesandbox.io/s/react-ripple-click-4dmn9l?file=/src/App.js) or [Storybook demo](https://filipchalupa.cz/react-ripple-click/).

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

### Custom overrides

Put to any parent element the following CSS custom properties to override the default ripple effect:

```css
:root {
	--Ripple-custom-opacity: 0.2;
	--Ripple-custom-duration: 0.6s;
	--Ripple-custom-timing-function: ease-in;
	--Ripple-custom-color: currentColor;
}
```
