import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class HeaderMenu extends React.Component {

    state = {
        current: '/'
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
    }

    getActiveMenuKey = () => {
        if (this.props.location.pathname.includes('/order')) {
            return '/order';
        }
        return this.props.location.pathname;
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.getActiveMenuKey()]}
                mode={this.props.mode}
                className="nav">
                <Menu.Item key="/">
                    <NavLink to="/" className="nav-text">
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/order">
                    <NavLink to="/order" className="nav-text">
                        Bestellen
                    </NavLink>
                </Menu.Item>
                <SubMenu title={
                    <span className="submenu-title-wrapper">
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
        )
    }
}

export default withRouter(HeaderMenu);