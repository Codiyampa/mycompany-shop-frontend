import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Order from './Order';
import Checkout from './Checkout';
import Success from './Success';
import About from './About';
import Contact from './Contact';
import Error from './Error';

class Main extends React.Component {

	state = {
		cart: [],
		customer: [],
		orderSuccess: false
	}

	stateUpdater = (cart, customer, orderSuccess) => {
		this.setState({
			cart: cart,
			customer: customer,
			orderSuccess: orderSuccess
		});
	}

	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/order" render={props => <Order {...props} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />}  />
					<Route exact path="/order/checkout" render={props => <Checkout {...props} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />} />
					<Route path="/order/checkout/success" render={props => <Success {...props} customer={this.state.customer} orderSuccess={this.state.orderSuccess} stateUpdater={this.stateUpdater} />} />
					<Route path="/about/:page" component={About}/>
					<Route path="/contact" component={Contact}/>
					<Route component={Error} />
				</Switch>
			</main>
		)
	}
}

export default Main;