---
date: "2019-01-19"
description: "Setting up a React project with Webpack 4, Babel 7, & TypeScript."
draft: false
keywords: "Webpack, Babel, React, TypeScript, Styled-Components, hot reloading"
tags: ["javascript"]
title: "Building a React project from scratch with TypeScript"
---

It has been a long while since I last wrote here. Starting my first job as a developer and settling in to my new life here in Portland has taken up the bulk of my time. In this post I will share what I have learned in my first four months on the job via the massive rewrite to our proprietary software. I'm leading the front-end side of things and was tasked with deciding what technologies we would be using and learning how to integrate them all together. In this post I will walk you through how to spin up your own React project (no create-react-app necessary) and add TypeScript and hot reloading support all while using the most current and cool technologies.

## The bare bones React setup

```sh
yarn add react react-dom styled-components
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
mkdir src
touch webpack.config.js
cd src
touch index.html index.js App.js
mkdir components
cd components
touch index.js Title.js
```

We will run through some initial boilerplate for React first:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```javascript
// index.js
import React from 'react'
import { render } from 'react-dom'

import App from './App'

render(<App />, document.getElementById('root'))
```

```javascript
// App.js
import React from 'react'

import { Title } from './components'

const App = () => <Title>Hello React</Title>

export default App
```

```javascript
// components/Title.js
import styled from 'styled-components'

export default styled.h1`
  color: magenta;
  font-size: 2rem;
  text-decoration: underline;
`

// components/index.js
import Title from './Title'

export { Title }
```

Now we will move on to the basic webpack configuration for getting up and running with React.

```javascript
// webpack.config.js
const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // Tells webpack to execute in development mode.
  mode: 'development',
  // Tells webpack where to start building from.
  entry: resolve(__dirname, './src/index.js'),
  // Tells webpack where to output the build.
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
  },
  // Tells webpack-dev-server the configuration we
  // want it to run in.
  devServer: {
    open: true,
    overlay: true,
    stats: 'errors-only',
  },
  // Tells webpack what files we want it to look at
  // and what we want done to those files.
  // In our case we want babel to be executed against
  // all of our js/jsx files to transpile them to ES5.
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    // Copies our index.html file directly to build output.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
```

Now we need to setup Babel to transpile our code from ES6 magic down to ES5 for the browsers.

```json
// package.json
"babel": {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    "@babel/preset-react"
  ]
}
```

All of the above configuration will give you a fully functional React application. The last step is to add a script to your package.json that reads as `"dev": "webpack-dev-server"` and you are all finished.

## Hot Reloading

So now that we have our React application up and running it would be great to add hot module reloading. Hot module reloading gives us almost realtime updating of our modules in the DOM. So should I change the color property in `Title.js` instead of refreshing the whole page the module will be updated inplace nearly as fast as you can save it.

```sh
yarn add -D react-hot-loader
```

First we will want to update our Babel config to use the react-hot-loader plugin:

```json
// package.json
"babel": {
  ...
  "plugins": ["react-hot-loader/babel"]
}
```

Next up we will want to enable hot reloading with webpack-dev-server:

```javascript
// webpack.config.js
...
devServer: {
  hot: true,
  ...
},
plugins: [
  ...
  // Hot reloading.
  new webpack.HotModuleReplacementPlugin(),
],
```

And the final step is to use the hot module reloading on our application:

```javascript
import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Title } from './components'

const App = () => <Title>Hello React</Title>

export default hot(App)
```

Now to test this out you can do a simple color change or play around with the CSS on `Title.js` and see the updates nearly immediatley without a page refresh in the browser.

## TypeScript

Albeit I'm still pretty new to TypeScript and it was my job that pushed me into learning it because we made the decision to use this technology in our application; I will say it is pretty rad tech. JavaScript is a dynamically typed language meaning when we declare a variable we don't have to specifically declare what type it is. So over the course of it's life a variable could change types. Something like this is not possible in higher level languages like C++ where a variable must hold it's type. TypeScript give us the ability of having a strongly typed code base.

```javascript
// without TypeScript
var hello = 'world'
// can be reassigned to a number
hello = 3

// with TypeScript
var hello: string = 'world'
// will yield an error because hello can only ever be a string value.
hello = 3
```

```sh
yarn add -D @babel/preset-typescript typescript @types/react @types/react-dom @types/styled-components
```

We will want to do is go back and change the extensions on our files from `js` to `ts` or `jsx` to `tsx`.

Let's update our Babel config to use the TypeScript preset:

```json
// package.json
"babel": {
  ...
  "presets": ["@babel/preset-typescript"]
}
```

We will also want to update our entry point and update Babel on our `ts` and `tsx` files in our webpack configuration:

```javascript
entry: resolve(__dirname, './src/index.tsx'),
module: {
  rules: [
    {
      exclude: /node_modules/,
      test: /\.(js|jsx|ts|tsx)$/,
      use: ['babel-loader'],
    },
  ],
},
resolve: {
  extensions: ['*', '.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
},
```

The next thing we will need to do is add a `tsconfig.json` file to our project with the configuration we would like the TypeScript compiler to run against our code.

```json
{
  "compilerOptions": {
    // Target latest version of ECMAScript.
    "target": "esnext",
    // Search under node_modules for non-relative imports.
    "moduleResolution": "node",
    // Process & infer types from .js files.
    "allowJs": true,
    // Don't emit; allow Babel to transform files.
    "noEmit": true,
    // Enable strictest settings like strictNullChecks & noImplicitAny.
    "strict": true,
    // Disallow features that require cross-file information for emit.
    "isolatedModules": true,
    // Import non-ES modules as default imports.
    "esModuleInterop": true,
    // Enable react.
    "jsx": "react",
    // BaseUrl defines the root of the application file structure.
    "baseUrl": "."
  },
  "include": ["src"]
}
```

Now we can go back through our files and add typings:

```javascript
// App.tsx
import * as React from 'react'

interface Props {
  compiler: string;
}

const App: React.SFC<Props> = ({ compiler }) => (
  <Title>Hello React with {compiler}</Title>
)
```

```javascript
// index.tsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const root = document.getElementById('root') as HTMLElement

ReactDOM.render(<App compiler="TypeScript" />, root)
```

## Aliasing

The last super cool thing I want to show you how to do is called _aliasing_. This can be so helpful when you are working with a huge code base like I am now at work. Aliasing give us the ability to say something like `import Foo from '@/bar'` instead of the actual path which may be `src/bar/foo/baz/Foo`. The best thing is this is super easy to setup with webpack.

```javascript
resolve: {
  alias: {
    'app/components': resolve(__dirname, 'src/components/')
  }
  extensions: ['*', '.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
},
```

Now thanks to the above we can easily reference our components as `import { Title } from 'app/components'`. You can use this for assets, utils, the sky is the limit! There is one catch with TypeScript though we will need to reference these modules in our `tsconfig.json` for TypeScript to have any idea what these imports are.

```json
"paths": {
  "app/components": ["src/components"]
}
```

I hope this post will be helpful to all of you out there who want to know how to setup your build process from scratch. You can find the code for this post on my [Github](https://github.com/rockchalkwushock/react-typescript-from-scratch). Feel free to reach out via Twitter if you have any questions or issues.

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
