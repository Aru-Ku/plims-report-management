import React, { useEffect, useState, useCallback } from "react";
import { formCollection } from "../utils/firebase";
import { format } from "date-fns";

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
					status: doc.data().status || "PENDING",
					reviewedBy: doc.data().reviewedBy || "N/A",
					physician: doc.data().physician || "N/A",
				});
				//TODO SHOULD BE DONE IN THE BACKEND
			});
			setFormsData(ids);
		});
	}, [setFormsData]);

	useEffect(() => {
		fetchFormIds();
		setLoading(false);
	}, [fetchFormIds, setLoading]);

	console.log(formsData);

	return <div>{!loading && "ak"}</div>;
}
