export const headings = [
	{
		columnId: "formId",
		columnHead: "Form ID",
		element: "link",
		data: {
			type: "string",
		},
	},
	{
		columnId: "lastModified",
		columnHead: "Last Modified",
		element: "time",
		data: {
			type: "string",
		},
	},
	{
		columnId: "status",
		columnHead: "Status",
		element: "badge",
		data: {
			type: "string",
		},
	},
	{
		columnId: "physicianDetails",
		columnHead: "Physician",
		element: "name",
		data: {
			type: "object",
			value: "name",
		},
	},
	{
		columnId: "reviewedBy",
		columnHead: "Reviewed By",
		element: "name",
		data: {
			type: "object",
			value: "name",
		},
	},
];
