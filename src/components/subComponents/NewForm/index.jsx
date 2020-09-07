import React, { Fragment } from "react";
import { TextInput, TextArea, MultiSelect, CheckBox, SubmitButton } from "../../../ui/Inputs";
import { ClientContent, SpecimenContent } from "../../../utils/formContents";

export const ClientDetails = ({ formDetails, handleInputChange }) => (
	<Fragment>
		{Object.entries(ClientContent).map(([key, item]) => {
			if (item.element === "MultiSelect")
				return (
					<MultiSelect
						key={key}
						{...item}
						value={formDetails.has(item.label) ? formDetails.get(item.label) : ""}
						update={(e) => handleInputChange(item.label, e.target.value)}
					/>
				);
			if (item.element === "TextArea")
				return (
					<TextArea
						key={key}
						{...item}
						value={formDetails.has(item.label) ? formDetails.get(item.label) : ""}
						update={(e) => handleInputChange(item.label, e.target.value)}
					/>
				);
			if (item.element === "TextInput")
				return (
					<TextInput
						key={key}
						{...item}
						value={formDetails.has(item.label) ? formDetails.get(item.label) : ""}
						update={(e) => handleInputChange(item.label, e.target.value)}
					/>
				);
		})}
	</Fragment>
);

export const SpecimenDetails = ({ formDetails, handleInputChange }) => (
	<Fragment>
		{Object.entries(SpecimenContent).map(([key, item]) => {
			if (item.element === "TextInput")
				return (
					<TextInput
						key={key}
						{...item}
						value={formDetails.has(item.label) ? formDetails.get(item.label) : ""}
						update={(e) => handleInputChange(item.label, e.target.value)}
					/>
				);
		})}
	</Fragment>
);

export const Declaration = ({ handleSubmit, checkboxRef }) => (
	<Fragment>
		<CheckBox label='I agree to terms and conditions.' inputID='agree' required={true} checkboxRef={checkboxRef} />
		<SubmitButton handleSubmit={handleSubmit} />
	</Fragment>
);
