import React from 'react';

class Success extends React.Component {

	state = {
		orderId: false,
		customer: []
	}

	componentDidMount() {
		const orderId = this.props.orderId;
		const customer = this.props.customer;

		this.props.stateUpdater([], [], false);

		if (orderId) {
			this.setState({
				orderId: orderId,
				customer: customer
			});
		} else {
			this.props.history.push("/");
		}
	}

	render() {
		return (
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-24 ant-col-xxl-24">
						<section class="main-container">
							<h1>Bestellung erfolgreich!</h1>
							<h2 class="order-id">Ihre Bestellnummer: #{this.state.orderId}</h2>
							<h2>Vielen Dank für Ihre Bestellung {this.state.customer.firstName} {this.state.customer.secondName}! Die Lieferdauer beträgt ca. 45 Minuten.</h2>
							<h2 class="order-notification">Sie erhalten 10 Minuten vor Zustellung eine Benachrichtigung per SMS.</h2>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

export default Success;