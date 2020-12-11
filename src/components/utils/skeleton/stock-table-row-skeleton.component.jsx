import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


export default function StockTableRowSkeleton() {

	const TableRowSkeleton = () => {
		return (
			<TableRow>
				<TableCell>
					<Skeleton animation="wave" height={20} width={"20%"}/>
				</TableCell>
				<TableCell component="th" scope="row">
					<Skeleton animation="wave" height={20} width={"50%"}/>
				</TableCell>
				<TableCell align="left">
					<Skeleton animation="wave" height={20} width={"50%"}/>
				</TableCell>
			</TableRow>
		)
	}
	return (
		<React.Fragment>
			<TableRowSkeleton/>
			<TableRowSkeleton/>
			<TableRowSkeleton/>
			<TableRowSkeleton/>
		</React.Fragment>
	);
}
