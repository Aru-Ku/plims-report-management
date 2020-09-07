import React from "react";

const TableHead = ({ headings } = {}) => {
	return (
		<thead>
			<tr>
				{headings.map(({ columnHead, columnId }, index) => (
					<th scope='col' key={columnId + index}>
						{columnHead}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
