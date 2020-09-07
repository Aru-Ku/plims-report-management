export const ClientContent = {
	clientName: {
		element: "TextInput",
		type: "text",
		label: "Name",
		id: "clentName",
		required: true,
	},
	dob: {
		element: "TextInput",
		type: "date",
		label: "Date of Birth",
		id: "dob",
		required: true,
	},
	gender: {
		element: "MultiSelect",
		label: "Gender",
		id: "gender",
		options: ["Female", "Male", "Other"],
		required: true,
	},
	address: {
		element: "TextArea",
		type: "text",
		label: "Address",
		id: "address",
		required: true,
	},
	phone: {
		element: "TextInput",
		type: "tel",
		label: "Phone No",
		id: "phone",
		required: true,
	},
};

export const SpecimenContent = {
	sampleId: {
		element: "TextInput",
		type: "text",
		label: "Sample ID",
		id: "sampleId",
		required: true,
	},
	sampleType: {
		element: "TextInput",
		type: "text",
		label: "Sample Type",
		id: "sampleType",
		required: true,
	},
	sampleCollectedDate: {
		element: "TextInput",
		type: "date",
		label: "Sample Collected Date",
		id: "sampleCollectedDate",
		required: true,
	},
};
