import React from "react";

import Header from './components/header';
import { PopapkaContainer, popapka, closePopapka } from './components/popapka';

import './App.css';

class App extends React.Component {

    popup1 = null
    popup2 = null

    openModal = (e) => {
        e.preventDefault();

        this.popup1 = popapka({
            title: "this is my modal!!",
            content: (<button onClick={this.openModal2}>open 2</button>),
            positiveButton: () => { closePopapka(this.popup1) },
            animation: 'bub'
        })
    }

    openModal2 = (e) => {
        e.preventDefault();

        this.popup2 = popapka({
            title: "this is my modal 2",
            content: (<div><br/><br/><button onClick={this.openModal3}>open 3</button></div>),
            positiveButton: () => { closePopapka(this.popup2) },
            animation: 'fromTop'
        })
    }

    openModal3 = () => {
        popapka("Asd")
    }

    render () {
        return (
            <div className="App">
                <PopapkaContainer />
                <header className="App-header">
                    <Header />
                    <a
                        className="App-link"
                        href="#"
                        onClick={this.openModal}
                        rel="noopener noreferrer"
                    >
                        Open popapka
                    </a>
                </header>
            </div>
        );
    }

    
}

export default App;
