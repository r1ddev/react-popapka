# react-popapka

> Simple react popup component

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
      content: (<div>this is content of my modal</button>),
      positiveButton: () => { closePopapka(this.popup1) },
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

## License

MIT © [r1ddev](https://github.com/r1ddev)
