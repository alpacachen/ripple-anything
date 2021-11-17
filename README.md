ripple-anything.js
========
[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]

#### Add click ripple effect to any HTMLElement ####

just like material ui ripple, easy use, all browser supported, TypeScript supported

#### Usage ####

html
```angular2html
<script src="./dist/index.js"></script>
<div onclick="rippleAnything(event)">i am a button</div>
```
react
```tsx
import rippleAnything from "./index";

const Com = () => <div
    onclick={(e) => {
        e.persist() // maybe need do this
        rippleAnything(e as unknown as MouseEvent)
    }}>
    i am a button
</div>
```
angular
```angular2html
<div (click)="rippleAnything($event)">i am a button</div>
```
vue

```vue

<template>
  <div @click="rippleAnything">i am a button</div>
</template>
<script>
import rippleAnything from "ripple-anything";

export default {
  methods: {
    rippleAnything
  }
}
</script>
```
[npm]: https://img.shields.io/npm/v/ripple-anything
[npm-url]: https://www.npmjs.com/package/ripple-anything
[build-size]: https://badgen.net/bundlephobia/minzip/ripple-anything
[build-size-url]: https://bundlephobia.com/package/ripple-anything
