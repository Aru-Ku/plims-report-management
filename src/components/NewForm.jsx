import React, { useState, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ClientDetails, SpecimenDetails, Declaration } from "./subComponents/NewForm";
import { ClientContent, SpecimenContent } from "../utils/formContents";
import { formCollection } from "../utils/firebase";

export default function NewForm() {
	const [formDetails, setFormDetails] = useState(new Map());
	const checkboxRef = useRef(null);
	const history = useHistory();

	const handleInputChange = useCallback((element, value) => {
		setFormDetails((prevState) => new Map(prevState).set(element, value));
	}, []);

	const handleSubmit = useCallback(
		async (e) => {
			if (formDetails.size === Object.keys({ ...ClientContent, ...SpecimenContent }).length && checkboxRef.current.checked) {
				e.preventDefault();
				let docSize = ((await formCollection.get().then((snapshot) => snapshot.size)) + 1).toString(); //TODO SHOULD BE DONE IN THE BACKEND
				let docName = `FORM-${docSize.length < 6 ? "0".repeat(5 - docSize.length) + docSize : docSize}`; //TODO SHOULD BE DONE IN THE BACKEND
				await formCollection
					.doc(docName)
					.set(Object.fromEntries(formDetails))
					.then(() => {
						history.replace(`/submitted?form_id=${docName}`);
					})
					.catch((e) => console.log(e));
			}
		},
		[formDetails, history]
	);

	return (
		<form className='container'>
			<div className='list-group' data-spy='scroll' data-target='form-navigation'>
				<div className='list-group-item'>
					<h5 id='ClientDetails'>Client Details</h5>
					<ClientDetails formDetails={formDetails} handleInputChange={handleInputChange} />
				</div>
				<div className='list-group-item'>
					<h5 id='SpecimenDetails'>Specimen Details</h5>
					<SpecimenDetails formDetails={formDetails} handleInputChange={handleInputChange} />
				</div>
				<div className='list-group-item'>
					<Declaration handleSubmit={handleSubmit} checkboxRef={checkboxRef} />
				</div>
			</div>
		</form>
	);
}

//* const formNavigation = () => ( //NOT REQUIRED
// 	<nav id='form-navigation' className='navbar navbar-light bg-light'>
// 		<span>New Requisition form</span>
// 		<ul className='nav nav-pills'>
// 			<a className='nav-item nav-link' href='#ClientDetails'>
// 				Client info
// 			</a>
// 			<a className='nav-item nav-link' href='#SpecimenDetails'>
// 				Specimen Details
// 			</a>
// 		</ul>
// 	</nav>
// );
