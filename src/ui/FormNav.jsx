import React from "react";
import { Link } from "react-router-dom";

export default function FormNav({ links = [] }) {
	return (
		<div aria-label='breadcrumb'>
			<ol className='breadcrumb'>
				{links.map((link, index) => (
					<li className={`breadcrumb-item${links.length === index + 1 ? " active" : ""}`} key={index}>
						{links.length === index + 1 ? link.toUpperCase() : <Link to={"/" + link}>{link.toUpperCase()}</Link>}
					</li>
				))}
			</ol>
		</div>
	);
}
