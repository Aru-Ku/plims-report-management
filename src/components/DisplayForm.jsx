import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import FormNav from "../ui/FormNav";
import { TableBadge } from "./subComponents/Requisitions/Table/TableBody";
import { MultiSelect, TextInput, SubmitButton } from "../ui/Inputs";
import { formCollection } from "../utils/firebase";
import { firstLetterCapital, formatTime } from "../utils/ModifyContent";

export default function DisplayForm(props) {
	const [inputs, setInputs] = useState(new Map());
	const { formData } = props.location.state;
	const history = useHistory();

	const handleInputs = (label, value) => {
		setInputs((prevState) => (label === "Action" ? new Map().set(label, value) : new Map(prevState).set(label, value)));
	};
	const updateForm = async (e) => {
		if (inputs.get("Action") === "Reject Requisition Form" || inputs.size === 3) {
			e.preventDefault();
			const data = { ...Object.fromEntries(inputs) };
			await formCollection
				.doc(formData.formId)
				.set({
					...formData,
					status: data.Action === "Reject Requisition Form" ? "rejected" : "testing",
					physicianDetails: {
						...formData.physicianDetails,
						name: data.Physician || formData.physicianDetails.name,
					},
					laboratoryDetails: {
						...formData.laboratoryDetails,
						name: data.Laboratory || formData.laboratoryDetails.name,
					},
					lastModified: new Date().getTime(),
				})
				.then(() => {
					history.goBack();
				})
				.catch((e) => console.log(e));
		}
	};

	return (
		<div className='container'>
			<FormNav links={["forms", formData.formId]} />
			<div className='card w-100'>
				<ul className='list-group list-group-horizontal'>
					<li className='list-group-item col-sm'>
						<Details content={{ ...formData.clientDetails }} heading='Patient Details' />
					</li>
					<li className='list-group-item col-sm'>
						<Details content={{ ...formData.specimenDetails }} heading='Specimen Details' />
					</li>
				</ul>
				<div className='card-body'>
					<SatusAndTime status={formData.status} time={formData.lastModified} />
					<form className='mt-4'>
						<MultiSelect
							id='takeAction'
							label='Take Action'
							options={["Reject Requisition Form", "Test Sample"]}
							value={inputs.has("Action") ? inputs.get("Action") : ""}
							update={(e) => handleInputs("Action", e.target.value)}
						/>
						{inputs.get("Action") === "Test Sample" ? (
							<Fragment>
								<MultiSelect
									id='laboratory'
									label='Laboratory'
									options={["Bacteriology", "Virology", "Blood Test", "Parasitology"]}
									value={inputs.has("Laboratory") ? inputs.get("Laboratory") : ""}
									update={(e) => handleInputs("Laboratory", e.target.value)}
								/>
								<TextInput
									id='physician'
									label='Physician'
									type='text'
									value={inputs.has("Physician") ? inputs.get("Physician") : ""}
									update={(e) => handleInputs("Physician", e.target.value)}
								/>
							</Fragment>
						) : null}
						<SubmitButton btnText='Update' handleSubmit={updateForm} />
					</form>
				</div>
			</div>
		</div>
	);
}

const Details = ({ content, heading } = {}) => {
	return (
		<Fragment>
			<h6 data-toggle='collapse' data-target='#patientDetails' style={{ cursor: "pointer" }}>
				<u>{heading}</u>
			</h6>
			<div id='patientDetails' className='collapse'>
				{Object.entries(content)
					.reverse()
					.map(([key, value]) => (
						<p key={key} className='m-0'>
							{firstLetterCapital(key).replace(/_/g, "")} : <strong>{value}</strong>
						</p>
					))}
			</div>
		</Fragment>
	);
};

const SatusAndTime = ({ status, time }) => (
	<Fragment>
		<p className='m-0'>
			Status: <TableBadge status={status} />
		</p>
		<p>
			Last Modified: <TableBadge status={formatTime(time)} />
		</p>
	</Fragment>
);
