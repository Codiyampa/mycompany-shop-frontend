import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import ProductService from '../services/api/ProductService';

import 'antd/dist/antd.css';

class App extends React.Component {

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
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/order" render={props => <Order {...props} products={this.state.products} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />}  />
				<Route exact path="/order/checkout" render={props => <Checkout {...props} cart={this.state.cart} customer={this.state.customer} stateUpdater={this.stateUpdater} />} />
				<Route path="/order/checkout/success" render={props => <Success {...props} customer={this.state.customer} orderId={this.state.orderId} stateUpdater={this.stateUpdater} />} />
				<Route path="/about/:page" component={About}/>
				<Route path="/contact" component={Contact}/>
				<Route component={Error} />
			</Switch>
		)
	}
}

export default App;