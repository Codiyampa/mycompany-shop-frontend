import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import PageTemplate from '../templates/PageTemplate';

const Home = () => {
	return (
		<PageTemplate header={<Header />} footer={<Footer />}>
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
						<section class="main-container">
							<h1>Home</h1>
							<h1>Bestell-App!</h1>
							<p>Per Smartphone schneller, einfacher und günstiger bestellen.</p><br />
							<NavLink className="ant-btn ant-btn-primary ant-btn-lg" to="/order">Jetzt bestellen!</NavLink>
						</section>
					</div>
				</div>
			</div>
		</PageTemplate>
	)
}

export default Home;