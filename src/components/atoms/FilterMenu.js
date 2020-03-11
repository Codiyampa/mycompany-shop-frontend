import React from 'react';
import { Menu } from 'antd';

const FilterMenu = (props) => {
    return (
        <Menu
            onClick={props.setFilter}
            selectedKeys={[props.selectedFilters]}
            mode="inline"
        >
            <Menu.Item key="-1">Alle anzeigen</Menu.Item>
            <Menu.Item key="1">Top 10</Menu.Item>
            <Menu.Item key="2">Salat</Menu.Item>
            <Menu.Item key="3">Pizza</Menu.Item>
            <Menu.Item key="4">Pasta</Menu.Item>
            <Menu.Item key="5">Gebackenes</Menu.Item>
            <Menu.Item key="6">Grill</Menu.Item>
            <Menu.Item key="7">Kebap</Menu.Item>
            <Menu.Item key="8">Beilagen</Menu.Item>
            <Menu.Item key="9">Nachspeisen</Menu.Item>
            <Menu.Item key="10">Vegetarisch</Menu.Item>
            <Menu.Item key="11">Vegan</Menu.Item>
            <Menu.Item key="12">Alkoholfreie Getränke</Menu.Item>
            <Menu.Item key="13">Alkoholische Getränke</Menu.Item>
        </Menu>
    )
}

export default FilterMenu;