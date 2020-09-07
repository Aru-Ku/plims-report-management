import React, { useEffect, useState, useCallback } from "react";
import { format } from "date-fns";
import { Table } from "./subComponents/Requisitions";
import { formCollection } from "../utils/firebase";
import Loader from "../ui/Loader";
import { headings } from "../utils/formsTable";

export default function Requisitions() {
	const [formsData, setFormsData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchFormIds = useCallback(async () => {
		await formCollection.get().then((snap) => {
			let ids = [];
			snap.forEach((doc) => {
				ids.push({
					id: doc.id,
					submittedTime: format(new Date(doc.Rd.version.timestamp.seconds * 1000), "dd/MM/yyyy hh:mm a"),
					contents: doc.data(),
					status: doc.data().status || "pending",
					reviewedBy: doc.data().reviewedBy || "N/A",
					physician: doc.data().physician || "N/A",
				});
				//TODO SHOULD BE DONE IN THE BACKEND
			});
			setFormsData(ids);
		});
		setLoading(false);
	}, [setFormsData, setLoading]);

	useEffect(() => {
		fetchFormIds();
	}, [fetchFormIds]);

	return (
		<div className='container'>
			<div className='table-responsive-sm'>
				<Table headings={headings} contents={formsData} loading={{ state: !loading, component: Loader }} />
			</div>
		</div>
	);
}
