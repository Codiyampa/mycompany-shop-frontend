import React from 'react';

class Success extends React.Component {

	state = {
		orderSuccess: false,
		customer: []
	}

	componentDidMount() {
		const orderSuccess = this.props.orderSuccess;
		const customer = this.props.customer;

		this.props.stateUpdater([], [], false);

		if (orderSuccess) {
			this.setState({
				orderSuccess: orderSuccess,
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
							<h2>{this.state.customer.firstName} {this.state.customer.secondName}, vielen Dank für Ihre Bestellung. Die Lieferdauer beträgt ca. 45 Minuten.</h2>
							<h2>Sie erhalten 10 Minuten vor Zustellung eine Benachrichtigung per SMS.</h2>
						</section>
					</div>
				</div>
			</div>
		)
	}
}

export default Success;