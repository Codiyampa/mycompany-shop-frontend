import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popover, Button } from 'antd';
import HeaderMenu from '../atoms/HeaderMenu';

class Header extends React.Component {

	state = {
		popoverVisible: false
	}

	handlePopoverVisibleChange = popoverVisible => {
		this.setState({ popoverVisible });
	}

	render() {
		return (
			<div class="ant-row">
				<div class="ant-col ant-col-xs-12 ant-col-sm-12 ant-col-md-6 ant-col-lg-6 ant-col-xl-4 ant-col-xxl-4">
					<div class="header-company">
						<Link to="/" >
							<div class="header-company-name">
								MyOrder
							</div>
						</Link>
					</div>
				</div>
				<div class="ant-col ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-18 ant-col-xl-20 ant-col-xxl-20">
					<HeaderMenu mode="horizontal" />
				</div>
				<div className="ant-col ant-col-xs-12 ant-col-sm-12 ant-col-md-0 ant-col-lg-0 ant-col-xl-0 ant-col-xxl-0">
					<Popover
						title="Menü"
						overlayClassName="header-popover"
						placement="bottomRight"
						visible={this.state.popoverVisible}
						trigger="click"
						onVisibleChange={this.handlePopoverVisibleChange}
						content={
							<HeaderMenu mode="inline" />
						}
					>
						<Button className="menu-popover-button">
							<Icon type="align-right" />
						</Button>
					</Popover>
				</div>
			</div>
		)
	}
}

export default Header;