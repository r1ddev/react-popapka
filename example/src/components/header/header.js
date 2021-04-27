import React from 'react';
import logo from './../../logo.svg';

class Header extends React.Component {
	render () {
		return (
			<>
				<img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
			</>
		);
	}
}

export default Header