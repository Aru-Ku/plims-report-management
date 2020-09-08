import React from "react";
import { Link } from "react-router-dom";

export default function FormSubmitted(props) {
	const formID = props.location.search.split("=").pop();
	return (
		<div className='container card'>
			<img
				src='https://studentloanpd.com/wp-content/uploads/2015/07/wctt-icon2.png'
				className='card-img-top rounded mx-auto d-block w-25 img-fluid'
				alt='done'
			/>
			<div className='card-body text-center text-break'>
				<p className='card-text lead'>
					Yor requisition form with form id <span className='font-weight-bold text-monospace'>{formID}</span> has be successfully submitted
				</p>
				<Link to='/new' className='card-link'>
					Submit another form
				</Link>
				<Link to='/' className='card-link'>
					Go to Home
				</Link>
			</div>
		</div>
	);
}
