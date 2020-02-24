import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col, Button } from 'antd';
import API from '../utils/API';
import NumberFormat from 'react-number-format';

class Order extends React.Component {

	state = {
		products: [],
		cart: [],
		filter: -1,
		filteredProducts: []
	}

	componentDidMount() {
		const cart = this.props.cart;
		this.setState({
			cart: cart
		});
		this.getProductsData();
	}

	getProductsData = () => {
		API.get(`/catalog/products/`, {})
			.then(response => {
				const products = response.data;
				this.setState({
					products: products,
					filteredProducts: products
				});
				console.log(products);
			})
			.catch((error) => {console.log(error)});
	}

	addToCart = (id) => {
		var tempCart = this.state.cart;
		var tempProduct = tempCart.find( p => p.id === id );
		
		if (tempProduct == null) {
			tempCart.push(this.state.products.find(p => p.id === id));
			tempCart.find( p => p.id === id ).productOrderAmount = 1;
		} else {
			tempProduct.productOrderAmount++;
		}
		
		this.setState({
			cart: tempCart
		});

		this.props.stateUpdater(tempCart, [], false);
	}

	removeFromCart = (id) => {
		var tempCart = this.state.cart;
		var tempProduct = tempCart.find( p => p.id === id );

		if (tempProduct) {
			if (tempProduct.productOrderAmount > 1) {
				tempProduct.productOrderAmount--;
			} else {
				tempCart.splice(tempCart.findIndex(p => p.id === id), 1);
			}
		}

		this.setState({
			cart: tempCart
		});

		this.props.stateUpdater(tempCart, [], false);
	}

	setFilter = (id) => {
		var filteredProducts;
		if (parseInt(id.key) === -1) {
			filteredProducts = this.state.products;
		} else {
			filteredProducts = this.state.products.filter(p => (p.categoryIds.includes(parseInt(id.key))));
		}
		this.setState({
			filter: parseInt(id.key),
			filteredProducts: filteredProducts
		});
	}

	getTotalPrice = () => {
		if (typeof this.state.cart !== 'undefined' && this.state.cart.length > 0) {
			return this.state.cart.map(item => item.price*item.productOrderAmount).reduce((prev, next) => prev + next);
		}
		return 0.0;
	}

	render() {
		return (
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col main-menu ant-col-xs-0 ant-col-sm-0 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
						<Menu
							mode="inline"
							onClick={this.setFilter}
							defaultSelectedKeys={['-1']}
						>
							<Menu.Item key="-1">Alle anzeigen</Menu.Item>
							<Menu.Item key="1">Top 10</Menu.Item>
							<Menu.Item key="2">Salat</Menu.Item>
							<Menu.Item key="3">Pizza</Menu.Item>
							<Menu.Item key="4">Pasta</Menu.Item>
							<Menu.Item key="5">Gebackenes</Menu.Item>
							<Menu.Item key="6">Grill</Menu.Item>
							<Menu.Item key="7">Kebap</Menu.Item>
							<Menu.Item key="8">Beilagen</Menu.Item>
							<Menu.Item key="9">Nachspeisen</Menu.Item>
							<Menu.Item key="10">Vegetarisch</Menu.Item>
							<Menu.Item key="11">Vegan</Menu.Item>
							<Menu.Item key="12">Alkoholfreie Getränke</Menu.Item>
							<Menu.Item key="13">Alkoholische Getränke</Menu.Item>
						</Menu>
					</div>
					
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-12 ant-col-xl-14 ant-col-xxl-16">
						<section class="main-container">
							<h1>Jetzt bestellen!</h1>
							<div class="product-list">
								{this.state.filteredProducts.map(product => 
									<Row>
										<Col xs={11} sm={16} md={12} lg={16} xl={16}><h3>{product.name}</h3></Col>
										<Col xs={4} sm={3} md={6} lg={3} xl={3}><NumberFormat value={product.price} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></Col>
										<Col xs={9} sm={5} md={6} lg={5} xl={5}><Button type="primary" onClick={() => this.addToCart(product.id)} size="large">In Warenkorb</Button></Col>
									</Row>
								)}
							</div>
						</section>
					</div>
					
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
						<div class="cart">
							<h2>Bestellliste</h2>
							<div class="order-list">
								{this.state.cart.map(product =>
									<div class="order-item">
										<Row>
											<Col span={18}><h3>{product.productOrderAmount} x {product.name}</h3></Col>
										</Row>
										<Row>
											<Col span={18}><NumberFormat value={product.price} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /><Button type="primary" onClick={() => this.removeFromCart(product.id)} size="small">Entfernen</Button></Col>
										</Row>
									</div>
								)}
							</div>
							<div>
								<div class="total-price">
									<Row>
										<Col span={12}><h3>Gesamtpreis</h3></Col>
										<Col span={12}><h3><NumberFormat value={this.getTotalPrice()} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></h3></Col>
									</Row>
								</div>
								<Link to="/order/checkout"><Button type="primary" size="large">Jetzt bestellen!</Button></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Order;