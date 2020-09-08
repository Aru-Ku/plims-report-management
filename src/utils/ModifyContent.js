import { format } from "date-fns";

export const formatNewFormData = (data) => ({
	clientDetails: {
		name: data["Name"],
		gender: data["Gender"],
		address: data["Address"],
		dob: data["Date of Birth"],
		phone: data["Phone No"],
	},
	specimenDetails: {
		_id: data["Sample ID"],
		type: data["Sample Type"],
		collectedDate: data["Sample Collected Date"],
	},
	status: "pending",
	lastModified: new Date().getTime(),
	reviewedBy: {
		_id: "N/A",
		name: "N/A",
	},
	physicianDetails: {
		_id: "N/A",
		name: "N/A",
	},
	laboratoryDetails: {
		_id: "N/A",
		name: "N/A",
	},
});

export const formatTime = (time) => format(new Date(time), "dd/MM/yyyy hh:mm a");

export const firstLetterCapital = (string) => `${string[0].toUpperCase() + string.slice(1)}`;
