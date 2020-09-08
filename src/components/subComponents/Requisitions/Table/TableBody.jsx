import React from "react";
import { Link } from "react-router-dom";
import { formatTime, firstLetterCapital } from "../../../../utils/ModifyContent";

//* columnIds should match keys of form data
const TableBody = ({ headings, contents } = {}) => {
	return (
		<tbody>
			{contents.map((content, index) => (
				<tr key={index}>
					{headings.map(({ element, columnId, data }, index) => (
						<td key={index}>
							{element === "link" ? (
								<TableLink content={{ ...content }} id={columnId} />
							) : element === "badge" ? (
								<TableBadge status={content[columnId]} />
							) : element === "time" ? (
								<TableTime time={content[columnId]} />
							) : (
								<TableName name={content[columnId]} select={data.value} />
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
export const TableLink = ({ content, id }) => (
	<Link to={{ pathname: `/forms/${content[id]}`, state: { formData: content } }}>{content[id]}</Link>
);
export const TableBadge = ({ status }) => (
	<span className={`badge badge-${status === "pending" ? "info" : status === "rejected" ? "danger" : "light"}`}>
		{firstLetterCapital(status)}
	</span>
);
export const TableName = ({ name, select }) => <div className='text-nowrap bd-highlight w-100'>{name[select]}</div>;
export const TableTime = ({ time }) => <div className='text-nowrap bd-highlight w-100'>{formatTime(time)}</div>;
