import React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PageTitle from "../../utils/page-title/page-title.component";
import Container from "@material-ui/core/Container";
import StockTableRow from "./stock-table-row.component";
import TablePagination from "@material-ui/core/TablePagination";
import Alert from "@material-ui/lab/Alert";
import {getUserStock} from "../../../service/authentication.service";


function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [
			{date: '2020-01-05', customerId: '11091700', amount: 3},
			{date: '2020-01-02', customerId: 'Anonymous', amount: 1},
		],
	};
}


const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
	createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
	createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
	createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function StockTable() {

	const [stockData, setStockData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(()=>{
		getUserStock()
			.then(response=>{
				setIsLoading(false);
				setStockData(response)

			})
	})


	return (
		<Container>
			<PageTitle
				titleHeading="Stock des fruits par ville"
			/>
			<TableContainer  component={Paper}>
				<Alert severity="info">
					Ce table montre le stock des fruits par ville
				</Alert>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell/>
							<TableCell>
								<Typography variant={"h6"}>
									<Box fontWeight="fontWeightBold">
										🏙Ville
									</Box>
								</Typography>
							</TableCell>
							<TableCell align="left">
								<Typography variant={"h6"}>
									<Box fontWeight="fontWeightBold">
										🔢Stock Total
									</Box>
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StockTableRow key={row.name} row={row}/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
