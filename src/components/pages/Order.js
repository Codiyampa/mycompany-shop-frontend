import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, Row, Col, Button } from 'antd';
import NumberFormat from 'react-number-format';
import FilterMenu from '../atoms/FilterMenu';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import PageTemplate from '../templates/PageTemplate';

class Order extends React.Component {

	state = {
		products: [],
		cart: [],
		filter: '-1',
		filteredProducts: [],
		popoverVisible: false
	}

	componentDidMount() {
		const cart = this.props.cart;
		this.setState({
			cart: cart
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.products !== nextProps.products) {
			return {
				products: nextProps.products,
				filteredProducts: nextProps.products
			};
		}
		// Return null to indicate no change to state.
		return null;
	}

	addToCart = (id) => {
		let tempCart = this.state.cart;
		let tempProduct = tempCart.find( p => p.id === id );

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
		let tempCart = this.state.cart;
		let tempProduct = tempCart.find( p => p.id === id );

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
		let filteredProducts;
		if (parseInt(id.key) === -1) {
			filteredProducts = this.state.products;
		} else {
			filteredProducts = this.state.products.filter(p => (p.categoryIds.includes(parseInt(id.key))));
		}
		this.setState({
			filter: id.key,
			filteredProducts: filteredProducts
		});
	}

	getTotalPrice = () => {
		if (typeof this.state.cart !== 'undefined' && this.state.cart.length > 0) {
			return this.state.cart.map(item => item.price*item.productOrderAmount).reduce((prev, next) => prev + next);
		}
		return 0.0;
	}

	handlePopoverVisibleChange = popoverVisible => {
		this.setState({
			popoverVisible: popoverVisible,
		});
	}

	render() {
		return (
			<PageTemplate header={<Header />} footer={<Footer />}>
				<div class="main-wrapper">
					<div class="ant-row">
						<div class="ant-col main-menu ant-col-xs-0 ant-col-sm-0 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
							<FilterMenu setFilter={this.setFilter} selectedFilters={this.state.filter} />
						</div>

						<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-13 ant-col-lg-14 ant-col-xl-15 ant-col-xxl-16">
							<section class="main-container">
								<h1>Jetzt bestellen!</h1>
								<Popover
									title="Filter"
									overlayClassName="filter-popover"
									placement="bottomLeft"
									visible={this.state.popoverVisible}
									trigger="click"
									onVisibleChange={this.handlePopoverVisibleChange}
									content={
										<FilterMenu setFilter={this.setFilter} selectedFilters={this.state.filter} />
									}
								>
									<Button className="filter-popover-button" type="primary">
										Filter
									</Button>
								</Popover>
								<div class="product-list">
									{this.state.filteredProducts.map(product =>
										<Row>
											<Col xs={12} sm={16} md={13} lg={16} xl={16}><h3>{product.name}&nbsp;-&nbsp;<NumberFormat value={product.price} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></h3></Col>
											<Col xs={12} sm={8} md={11} lg={8} xl={8}><Button type="primary" onClick={() => this.addToCart(product.id)} size="large">In Warenkorb</Button></Col>
										</Row>
									)}
								</div>
							</section>
						</div>

						<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-4 ant-col-xl-4 ant-col-xxl-4">
							<div class="cart">
								<h2>Bestellliste</h2>
								<div class="order-list">
									{this.state.cart.map(product =>
										<div class="order-item">
											<h3>{product.productOrderAmount} x {product.name}</h3>
											<NumberFormat value={product.price} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /><Button type="primary" onClick={() => this.removeFromCart(product.id)} size="small">Entfernen</Button>
										</div>
									)}
								</div>
								<div class="total-price">
									<h3>Endsumme</h3>
									<h3 class="amount"><NumberFormat value={this.getTotalPrice()} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></h3>
								</div>
								<Link to="/order/checkout"><Button className="complete-order-btn" type="primary" size="large">Jetzt bestellen!</Button></Link>
							</div>
						</div>
					</div>
				</div>
			</PageTemplate>
		)
	}
}

export default Order;