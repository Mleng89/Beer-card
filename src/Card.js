import React from 'react';
import App from './App.css';

function Card(props) {
	return (
		<div className="card">
			<h2>{props.name}</h2>
			<img className="pic" src={props.img} />
			<p>{props.description}</p>
		</div>
	);
}

export default Card;
