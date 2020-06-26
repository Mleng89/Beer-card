import React, { Component } from 'react';
import App from './App.css';
import Card from './Card';
export class Beer extends Component {
	constructor() {
		super();
		this.state = {
			beers: []
		};
	}

	componentDidMount() {
		fetch('https://api.punkapi.com/v2/beers').then((response) => response.json()).then((data) => {
			this.setState({ beers: data });
		});
	}

	render() {
		const cardComp = this.state.beers.map((drink) => {
			return <Card name={drink.name} img={drink.image_url} description={drink.description} />;
		});

		return <div>{cardComp}</div>;
	}
}

export default Beer;
