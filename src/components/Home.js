import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Button } from 'antd'

function Home() {
	return (
		<div>
			<div class="main-wrapper">
				<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
					<section class="main-container">
						<h1>Home</h1>
						<h1>MyCompany Online Bestell-App!</h1>
						<p>Per Smartphone schneller, einfacher und günstiger bestellen.</p>
						<Link to="/order">Jetzt bestellen!</Link>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Home