import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer id="footer" class="dark">
			<div class="footer-container">
				<div>
					<Link to="/">MyCompany</Link>
				</div>
				<div>
					<Link to="/contact" class="grey-link">Impressum</Link>
					<Link to="/contact" class="grey-link">Datenschutz</Link>
					 © 2020 | Bestelle mit <span class="heart">❤</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer;