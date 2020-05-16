import React from 'react';

import logo from '@images/logo.png'
import discount from '@images/discount.png'
/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
*/
import { useSiteMetadata } from '@hooks/site-metadata';

export const ContactFooter = () => {
	const { phone, email } = useSiteMetadata();
	return (
		<>
			<h2>Get In Touch</h2>
			<h3>
				You can call us or send us an email and we will contact you as
				soon as possible.
			</h3>
			

			<div className="row main__footer">
				{/* DIRECCION */}
				<div className="12u main__footer-column">
					<ul className="labeled-icons">
						<li>
							<h3 style={{marginBottom: '10px'}} className="icon fa-home">
								<span className="label">Address</span>
							</h3>
							8807 N 14 TH ST, 
							Tampa, FL 33604
						</li>
						<li>
							<h3 style={{marginBottom: '10px'}} className="icon fa-mobile">
								<span className="label">Phone</span>
							</h3>
							<a href={'tel:8138502848'}>{phone}</a>
						</li>
						<li>
							<h3 style={{marginBottom: '10px'}} className="icon fa-envelope-o">
								<span className="label">Email</span>
							</h3>
							<a href={`mailto:${email}`}>{email}</a>
						</li>
					</ul>

					<div style={{maxWidth: '250px'}} className="image avatar">
						<img src={logo} alt="Logo TB Poweron" />
					</div>
				</div>
				{/* EMAIL - PHONE */}
				{/* <div className="12u main__footer-column">
					<ul className="labeled-icons">
						<li>
							<h3 className="icon fa-mobile">
								<span className="label">Phone</span>
							</h3>
							<a href={'tel:8138502848'}>{phone}</a>
						</li>
						<li>
							<h3 className="icon fa-envelope-o">
								<span className="label">Email</span>
							</h3>
							<a href={`mailto:${email}`}>{email}</a>
						</li>
					</ul>
				</div> */}
				{/* CARDS PAYMENTS */}
				<div className="12u main__footer-column">
					<p className="main__footer-payment-title">* For your convenience we accept all major credit cards and digital payments.</p>
					<div className="main__footer-payment-container">
						<div style={{fontSize: '50px', marginRight: '10px', color: '#316EA0'}} className="icon fa-cc-paypal"></div>
						<div style={{fontSize: '50px', marginRight: '10px', color: '#ED6A2D'}} className="icon fa-cc-mastercard"></div>
						<div style={{fontSize: '50px', marginRight: '10px', color: '#7299B3'}} className="icon fa-cc-discover"></div>
						<div style={{fontSize: '50px', marginRight: '10px', color: '#1B1E6D'}} className="icon fa-cc-visa"></div>
						<div style={{fontSize: '50px', marginRight: '10px', color: '#9F9265'}} className="icon fa-cc-amex"></div>
					</div>

					<div className="main_footer-image" style={{width: '150px', overflow: 'hidden', marginTop: "20px"}}>
						<img style={{maxWidth: '100%'}} src={discount} alt="Discount" />
					</div>
				</div>
			</div>
			
		</>
	);
};
