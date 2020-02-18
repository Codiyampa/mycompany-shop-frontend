import React from 'react'
import { Menu, Icon } from 'antd'

class Order extends React.Component {
	
	render() {
		return (
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col main-menu ant-col-xs-0 ant-col-sm-0 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
						>
							<Menu.Item key="1">Alle anzeigen</Menu.Item>
							<Menu.Item key="2">Top 10</Menu.Item>
							<Menu.Item key="3">Salat</Menu.Item>
							<Menu.Item key="4">Pizza</Menu.Item>
							<Menu.Item key="5">Pasta</Menu.Item>
							<Menu.Item key="6">Gebackenes</Menu.Item>
							<Menu.Item key="7">Grill</Menu.Item>
							<Menu.Item key="8">Kebap</Menu.Item>
							<Menu.Item key="9">Beilagen</Menu.Item>
							<Menu.Item key="10">Nachspeisen</Menu.Item>
							<Menu.Item key="11">Vegetarisch</Menu.Item>
							<Menu.Item key="12">Vegan</Menu.Item>
							<Menu.Item key="13">Alkoholfreie Getränke</Menu.Item>
							<Menu.Item key="14">Alkoholische Getränke</Menu.Item>
						</Menu>
					</div>
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
						<section class="main-container">
							<h1>Jetzt bestellen!</h1>
						</section>
					</div>
				</div>
			</div> 
		);
	}
}

export default Order