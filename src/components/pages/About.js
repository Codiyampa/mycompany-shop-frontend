import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import PageTemplate from '../templates/PageTemplate';

const About = (props) => {
	const selectedPage = props.match.params.page;
	return (
		<PageTemplate header={<Header />} footer={<Footer />}>
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
						<section class="main-container">
							<h1>{selectedPage}</h1>
						</section>
					</div>
				</div>
			</div>
		</PageTemplate>
	)
}

export default About;