import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ headings, contents } = {}) => {
	//* columnIds should match keys of table data
	return (
		<tbody>
			{contents.map((content, index) => (
				<tr key={index}>
					{headings.map(({ element, columnId }, index) => (
						<td key={index}>
							{element === "link" ? (
								<TableLink content={content} id={columnId} />
							) : element === "badge" ? (
								<TableBadge status={content[columnId]} />
							) : (
								<TableName name={content[columnId]} />
							)}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;

//! Table UI Elements
const TableLink = ({ content, id }) => <Link to={{ pathname: `/forms/${content[id]}`, state: { formData: content } }}>{content[id]}</Link>;
const TableBadge = ({ status }) => {
	let clsName = "badge badge-";
	switch (status) {
		case "pending":
			clsName += "info";
			break;
		case "rejected":
			clsName += "danger";
			break;
		default:
			clsName += "danger";
	}
	return <span className={clsName}>{status}</span>;
};
const TableName = ({ name }) => <div className='text-nowrap bd-highlight w-100'>{name}</div>;
