import React from 'react'
import PropTypes from 'prop-types'

const PageTemplate = ({header, children, footer}) => {
    return (
        <div>
            <header id="header">{header}</header>
            <div>{children}</div>
            <footer id="footer" className="dark">{footer}</footer>
        </div>
    )
}

PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.node.isRequired
};

export default PageTemplate;