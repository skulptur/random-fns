Tagline of up to 20 words here

## Motivation

Single paragraph about why this library exists

## Get started

Install

```bash
npm install --save library-name-fns
# or
yarn add library-name-fns
```

Use

```typescript
import { noop } from 'library-name-fns'

console.log(noop()) // undefined
```

[Examples](https://github.com/skulptur/library-name-fns/tree/master/example)

## API

- Functions that can be pure, are pure.
- The argument order is optimized for partial application.

Exports:

### noop

`() => void`

```typescript
const nothing = noop() // undefined
```
