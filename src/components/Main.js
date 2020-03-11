import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Order from './Order';
import Checkout from './Checkout';
import Success from './Success';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import ProductService from '../services/api/ProductService';

class Main extends React.Component {

	state = {
		products: [],
		cart: [],
		customer: [],
		orderId: false
	}

	componentDidMount() {
		this.getProductsData();
	}

	getProductsData = () => {
		ProductService.getAll()
			.then((response) => {
				this.setState({
					products: response
				});
			});
	}

	stateUpdater = (cart, customer, orderId) => {
		this.setState({
			cart: cart,
			customer: customer,
			orderId: orderId
		});
	}

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/order" render={props => <Order {...props} products={this.state.products} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />}  />
					<Route exact path="/order/checkout" render={props => <Checkout {...props} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />} />
					<Route path="/order/checkout/success" render={props => <Success {...props} customer={this.state.customer} orderId={this.state.orderId} stateUpdater={this.stateUpdater} />} />
					<Route path="/about/:page" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route component={Error} />
				</Switch>
			</main>
		)
	}
}

export default Main;