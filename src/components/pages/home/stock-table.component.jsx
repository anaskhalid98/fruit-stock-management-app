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
import Alert from "@material-ui/lab/Alert";
import {getUserStock} from "../../../service/authentication.service";
import {connect} from "react-redux";
import {fireError, fireSuccess} from "../../../redux/actions/alerts.action";
import {setStockAction} from "../../../redux/actions/stock.action";
import StockTableRowSkeleton from "../../utils/skeleton/stock-table-row-skeleton.component";


export function StockTable(props) {
	const {setStockAction, fireError, stock} = props;
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		getUserStock()
			.then(response => {
				setIsLoading(false);
				setStockAction(response.data);


			})
			.catch(error => {
				fireError("Un erreur lors de chargement des données")
			})
	}, [])


	return (
		<Container>
			<PageTitle
				titleHeading="Stock des fruits par ville"
			/>
			<TableContainer component={Paper}>
				<Alert severity="info">
					Ce table affiche le stock des fruits par ville
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
						{
							isLoading
								?
								<StockTableRowSkeleton/>
								:
								stock && stock.map((row) => (
									<StockTableRow key={row._id} row={row}/>
								))
						}

					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

const mapStateToProps = (state) => state.stock;
export default connect(mapStateToProps, {
	setStockAction,
	fireSuccess,
	fireError,
})(StockTable);
