import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(
//   <h1>Hello, React!</h1>,
//   document.getElementById('root')
// );

// function tick() {
// 	const element = (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('root')
// 	);
// }

// setInterval(tick, 1000);

// class Welcome extends React.Component {
// 	render() {
// 		return <h1>Hello, Component</h1>;
// 	}
// }
import Welcome from './Welcome'

ReactDOM.render(
	<Welcome name="Christina"/>,
	document.getElementById('root')
)