import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div class="footer-container">
			<div>
				<Link to="/">MyOrder</Link>
			</div>
			<div>
				<Link to="/contact" class="grey-link">Impressum</Link>
				<Link to="/contact" class="grey-link">Datenschutz</Link>
				<div class="copyright">© 2020 myOrder</div>
			</div>
		</div>
	)
}

export default Footer;