import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ headings, contents, loading } = {}) => {
	return loading.state ? (
		<table className='table table-sm table-hover'>
			<TableHead headings={headings} />
			<TableBody headings={headings} contents={contents} />
		</table>
	) : (
		<loading.component />
	);
};

export default Table;
