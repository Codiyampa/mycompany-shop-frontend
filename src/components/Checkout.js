import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
import NumberFormat from 'react-number-format';
import API from '../utils/API';

const { Option } = Select;

class Checkout extends React.Component {

	state = {
		cart: [],
		customer: [],
		orderId: false
	}

	componentDidMount() {
		const cart = this.props.cart;
		if (cart) {
			this.setState({ cart: cart });
		}
	}

	getTotalPrice = () => {
		if (typeof this.state.cart !== 'undefined' && this.state.cart.length > 0) {
			return this.state.cart.map(item => item.price*item.productOrderAmount).reduce((prev, next) => prev + next);
		}
		return 0.0;
	}

	buildRequestPayload = (values) => {
		var order = {};
		order.id = null;
		order.creationDate = null;
		order.paymentMethod = values.paymentMethod;

		order.customer = {};
		order.customer.id = null;
		order.customer.city = values.city;
		order.customer.firstName = values.firstname;
		order.customer.houseNumber = parseInt(values.houseNumber);
		order.customer.plz = parseInt(values.plz);
		order.customer.secondName = values.secondname;
		order.customer.street = values.street;

		order.productOrderAmounts = [];
		for (var i = 0; i < this.state.cart.length; i++) {
			var pOrderAmountElement = {};
			pOrderAmountElement.id = null;
			pOrderAmountElement.amount = this.state.cart[i].productOrderAmount;
			pOrderAmountElement.product = {};
			pOrderAmountElement.product.id = this.state.cart[i].id;
			pOrderAmountElement.product.categoryIds = [];
			pOrderAmountElement.product.name = this.state.cart[i].name;
			pOrderAmountElement.product.price = this.state.cart[i].price;
			order.productOrderAmounts.push(pOrderAmountElement);
		}

		return order;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				var order = this.buildRequestPayload(values);

				API.post(`/catalog/orders`, order)
					.then(response => {
						const orderId = response.data;
						console.log(response);
						this.setState({
							orderId: orderId,
							customer: order.customer
						});
						this.props.stateUpdater([], order.customer, orderId);
						this.props.history.push("/order/checkout/success");
					})
					.catch(error => {
						console.log(error);
					})
			}
		})

	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 0,
				},
			},
		};

		return (
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24 ant-col-xxl-24">
						<section class="main-container">
							<h1>Bestellung abschließen!</h1>
							<div class="checkout">
								<div className="ant-row">
									<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-16 ant-col-lg-14 ant-col-xl-12 ant-col-xxl-10">
										{this.props.cart.map(product =>
											<Row>
												<Col span={12}><h3>{product.productOrderAmount} x {product.name}</h3></Col>
												<Col span={12} className="price-col"><NumberFormat value={product.price} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></Col>
											</Row>
										)}
										<Row>
											<Col span={12}><h2>Gesamtpreis</h2></Col>
											<Col span={12} className="price-col"><h2><NumberFormat value={this.getTotalPrice()} fixedDecimalScale="true" decimalScale="2" decimalSeparator="," displayType="text" thousandSeparator={false} suffix=" &euro;" /></h2></Col>
										</Row>
									</div>
									<div class="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-8 ant-col-lg-10 ant-col-xl-12 ant-col-xxl-14">&nbsp;</div>
								</div>
								<div className="ant-row">
									<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-16 ant-col-lg-14 ant-col-xl-12 ant-col-xxl-10">
										<div class="customer-data">
											<h2>Ihre Bestelldaten</h2>
											<Form layout="vertical" onSubmit={this.handleSubmit}>

												<Form.Item label="Name" style={{ marginBottom: 0 }}>
													<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('firstname', {
																rules: [{ required: true, message: 'Bitte Vorname eingeben.', whitespace: true }],
															})(<Input placeholder="Vorname" />)}
														</Form.Item>
													</Form.Item>
													<span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}> </span>
													<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('secondname', {
																rules: [{ required: true, message: 'Bitte Nachname eingeben.', whitespace: true }],
															})(<Input placeholder="Nachname" />)}
														</Form.Item>
													</Form.Item>
												</Form.Item>
												<Form.Item label="E-Mail und Telefon" style={{ marginBottom: 0 }}>
													<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('email', {
																rules: [
																	{
																		type: 'email',
																		message: 'Keine gültige E-Mail.',
																	},
																	{
																		required: true,
																		message: 'Bitte E-Mail eingeben.',
																	},
																],
															})(<Input placeholder="E-Mail" />)}
														</Form.Item>
													</Form.Item>
													<span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}> </span>
													<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('phoneNumber', {
																rules: [{ required: true, message: 'Bitte Telefonnummer eingeben.', whitespace: true }],
															})(<Input placeholder="Telefon" />)}
														</Form.Item>
													</Form.Item>
												</Form.Item>
												<Form.Item label="Straße" style={{ marginBottom: 0 }}>
													<Form.Item style={{ display: 'inline-block', width: 'calc(70% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('street', {
																rules: [{ required: true, message: 'Bitte Straße eingeben.', whitespace: true }],
															})(<Input placeholder="Straße" />)}
														</Form.Item>
													</Form.Item>
													<span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}> </span>
													<Form.Item style={{ display: 'inline-block', width: 'calc(30% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('houseNumber', {
																rules: [{ required: true, message: 'Bitte Hausnummer eingeben.', whitespace: true }],
															})(<Input placeholder="Hausnummer" />)}
														</Form.Item>
													</Form.Item>
												</Form.Item>
												<Form.Item label="PLZ und Ort" style={{ marginBottom: 0 }}>
													<Form.Item style={{ display: 'inline-block', width: 'calc(30% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('plz', {
																rules: [{ required: true, message: 'Bitte PLZ eingeben.', whitespace: true }],
															})(<Input placeholder="PLZ" />)}
														</Form.Item>
													</Form.Item>
													<span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}> </span>
													<Form.Item style={{ display: 'inline-block', width: 'calc(70% - 12px)' }}>
														<Form.Item>
															{getFieldDecorator('city', {
																rules: [{ required: true, message: 'Bitte Ort eingeben.', whitespace: true }],
															})(<Input placeholder="Ort" />)}
														</Form.Item>
													</Form.Item>
												</Form.Item>
												<Form.Item label="Zahlungsart">
													{getFieldDecorator('paymentMethod', {initialValue: 'creditcard'})(
														<Select>
															<Option value="creditcard">Kreditkarte</Option>
															<Option value="paypal">Paypal</Option>
															<Option value="sofort">Sofortüberweisung</Option>
															<Option value="cash">Barzahlung</Option>
														</Select>)}
												</Form.Item>

												<Form.Item {...tailFormItemLayout}>
													{getFieldDecorator('dataAgreement', {
														valuePropName: 'checked', rules: [{ required: true, message: 'Bitte die Datenschutzerklärung zur Kenntnis nehmen.' }],
													})(
														<Checkbox>
															Ich nehme die <Link target="_blank" to="/contact">Datenschutzerklärung</Link> zur Kenntnis.
														</Checkbox>,
													)}
												</Form.Item>
												<Form.Item {...tailFormItemLayout}>
													<Button type="primary" size="large" htmlType="submit">
														Bestellen
													</Button>
												</Form.Item>

											</Form>
										</div>
										<div className="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-8 ant-col-lg-10 ant-col-xl-12 ant-col-xxl-14">&nbsp;</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Checkout);

export default withRouter(WrappedRegistrationForm);