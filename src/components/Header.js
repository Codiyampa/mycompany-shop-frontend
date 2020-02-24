import React from 'react';
import { withRouter } from "react-router";
import { Link, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Header extends React.Component {
  
	state = {
		current: '/'
	}

	handleClick = (e) => {
		this.setState({
			current: e.key
		});
	}
	
	render() {
		return (
			<header id="header">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4">
						<div class="header-company">
							<Link to="/" >
								<div class="header-company-name">
									MyCompany
								</div>
							</Link>
						</div>
					</div>
					<div class="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
						<Menu onClick={this.handleClick} selectedKeys={[this.props.location.pathname]} mode="horizontal" id="nav">
							<Menu.Item key="/">
								<NavLink to="/" className="nav-text">
									<Icon type="home" />
									Home
								</NavLink>
							</Menu.Item>
							<Menu.Item key="/order">
								<NavLink to="/order" className="nav-text">
									<Icon type="shopping-cart" />
									Bestellen
								</NavLink>
							</Menu.Item>
							<SubMenu title={
								<span className="submenu-title-wrapper">
									<Icon type="heart" />
									Über uns
								</span>
							  }
							>
							  <Menu.ItemGroup title="Location">
								<Menu.Item key="/about/restaurant">
									<NavLink to="/about/restaurant" className="nav-text">
										Restaurant
									</NavLink>
								</Menu.Item>
								<Menu.Item key="/about/vinothek">
									<NavLink to="/about/vinothek" className="nav-text">
										Vinothek
									</NavLink>
								</Menu.Item>
								<Menu.Item key="/about/biergarten">
									<NavLink to="/about/biergarten" className="nav-text">
										Biergarten
									</NavLink>
								</Menu.Item>
								<Menu.Item key="/about/oeffnungszeiten">
									<NavLink to="/about/oeffnungszeiten" className="nav-text">
										Öffnungszeiten
									</NavLink>
								</Menu.Item>
							  </Menu.ItemGroup>
							  <Menu.ItemGroup title="Bio Küche">
								<Menu.Item key="/about/unsere-bio-lieferanten">
									<NavLink to="/about/unsere-bio-lieferanten" className="nav-text">
										Unsere Bio Lieferanten
									</NavLink>
								</Menu.Item>
								<Menu.Item key="/about/unsere-zubereitung">
									<NavLink to="/about/unsere-zubereitung" className="nav-text">
										Unsere Zubereitung
									</NavLink>
								</Menu.Item>
							  </Menu.ItemGroup>
							</SubMenu>
							<Menu.Item key="/contact">
								<NavLink to="/contact" className="nav-text">
									Kontakt
								</NavLink>
							</Menu.Item>
						</Menu>
					</div>
				</div>
			</header>
		)
	}
}

export default withRouter(Header);