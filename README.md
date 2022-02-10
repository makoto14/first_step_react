# Install

```bash
npm install
# or
yarn
```

# Start servers

```bash
npm run start
# or
yarn start
```

# Build

```bash
npm run build
# or
yarn build
```

# First step react

1. component
   1. コンポーネントを作成する
   2. prop を渡す
2. state
   1. number を操作する
   2. string を操作する
   3. Array を操作する
3. effect
   1. console
   2. fetch
4. reduxToolkit
   1. dispatch
   2. useSelector
5. router
   1. navigate
6. other
   1. mui
   2. emotion

# TypeScript の基本

```js
// JavaScript
var hoge = 10;
let hoge2 = "aaa";
const hoge3 = true;

function func(a, b) {
  return a + b + 1;
}

const func2 = function (a, b) {
  return a + b + 1;
};

const func3 = (a, b) => {
  return a + b + 1;
};
```

```ts
// TypeScript
// var hoge = 10;
let hoge2: string = "aaa";
let hoge3: boolean = false;
const hoge4: true = true;

function func(a: number, b: number): number {
  return a + b + 1;
}

const func2 = function (a: number, b: number): number {
  return a + b + 1;
};

const func3 = (a: number, b: number): number => {
  return a + b + 1;
};
```

# React(TypeScript) の基本

```ts
// App.tsx
import React from "react";

type Prop = {
  name: string;
};

const App: React.VFC<Prop> = (props) => {
  return <div>Hello {props.name}!</div>;
};

export default App;
```

```ts
// index.tsx
import React from 'react';
import App from './App';

const Index: React.VFC<Prop> = (props) => {
  const name = "Makoto";
  return (
    <App name={name}>
  );
}
```

```
<div>Hello Makoto!</div>
```
