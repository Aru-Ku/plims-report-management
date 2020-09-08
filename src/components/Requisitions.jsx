import React, { useEffect, useState, useCallback } from "react";
import { Table } from "./subComponents/Requisitions";
import { formCollection } from "../utils/firebase";
import Loader from "../ui/Loader";
import { headings } from "../utils/formsTable";
import FormNav from "../ui/FormNav";

export default function Requisitions() {
	const [formsData, setFormsData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchFormIds = useCallback(async () => {
		await formCollection.get().then((snap) => {
			let ids = [];
			snap.forEach((doc) => ids.push({ formId: doc.id, ...doc.data() }));
			setFormsData(ids);
		});
		setLoading(false);
	}, [setFormsData, setLoading]);

	useEffect(() => {
		fetchFormIds();
	}, [fetchFormIds]);

	return (
		<div className='container'>
			<FormNav links={["forms"]} />
			<div className='table-responsive-sm'>
				<Table headings={headings} contents={formsData} loading={{ state: !loading, component: Loader }} />
			</div>
		</div>
	);
}
