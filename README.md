# react-popapka

> Simple react popup function

[![NPM](https://img.shields.io/npm/v/react-popapka.svg)](https://www.npmjs.com/package/react-popapka) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-popapka
```

## Usage

```jsx
import React, { Component } from 'react'

import { PopapkaContainer, popapka, closePopapka } from 'react-popapka';
import 'react-popapka/src/popapka.scss'

class Example extends Component {

  popapka = null

  open = () => {
    this.popapka = popapka({
      title: "this is my modal!!",
      content: (<div>this is content of my modal</div>),
      positiveButton: () => { closePopapka(this.popapka) },
      animation: 'bub'
    })
  }

  render() {
    return (
      <div>
        <PopapkaContainer />
        <button onClick={ this.open }>Open Popapka</button>
      </div>
    )
  }
}
```

## Explain

Place the `<PopapkaContainer />` component **once** into your application tree.
It will be used as a wrapper for all modals.
Don't forget to import the default styles from `react-popapka/dist/index.css`

Your component with `<PopapkaContainer />` will be like this:
```jsx
import React, { Component } from 'react'

import { PopapkaContainer } from 'react-popapka';
import 'react-popapka/src/popapka.scss'

class Example extends Component {
  render() {
    return (
      <div>
        <PopapkaContainer />
        // Other components
      </div>
    )
  }
}
```

Other functions can be called from other components. You don't need to worry about maintaining the global state. Popapka saves its state by itself.

#### Popapka

Simple usage:
Will open a small modal window with just your text
```jsx
popapka('alert')
```

Add more functionalities:

```jsx
popapka({
  title: "this is my modal!!",
  content: (<div>this is content of my modal</div>),
  animation: 'bub'
})
```

#### closePopapka

Close popapka by **index number** of opened popapka.
If you only have one popapka, you can simply call `closePopapka(0)`.
In complex cases, `popapka` function return its own index.

## API

```jsx
popapka(parameters, settings);
```

#### parameters object:

key | type | default | Description
----| ---- | ------- | -----------
title | String |  | Title of popapka. On top of modal and bold highlighted
content | String or jsx |  | Main text
positiveButton | function |  | Add 'OK' button at bottom with your callback
animation | *one of the below animations* | opacity | Animation for appear and disappear popapka

#### settings object:

key | type | default | Description
--- | ---- | ------- | -----------
className | String | popapka | Add custom class to popapka window

#### animations list:

type | Description
---- | -----------
opacity | Fade in with a change in opacity
fromTop | A little drop from above
bub | Appeared from the center with resizing and opacity

## License

MIT © [r1ddev](https://github.com/r1ddev)
