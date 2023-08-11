# Introduction

This is a small utility to make an HTML canvas fullscreen, regardless of window size.

This can be useful for browser games or simulations in the browser.

# Usage

This will make the canvas always fullscreen:

```js
// example.js
const canvas = document.querySelector("canvas");

import { make_fullscreen } from "make-canvas-fullscreen";

make_fullscreen(canvas);
```

# Callback

Drawing operations are erased when the canvas resizes. This is why these need to be called after the resize event. The function `make_fullscreen` offers a callback for this.

```js
// example.js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

import { make_fullscreen } from "make-canvas-fullscreen";

make_fullscreen(canvas, () => {
	ctx.fillStyle = "red";
	ctx.fillRect(50, 50, 100, 100);
});
```
