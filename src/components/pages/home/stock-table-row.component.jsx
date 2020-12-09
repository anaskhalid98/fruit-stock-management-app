import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
});

export default function StockTableRow(props) {
	const {row} = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					<Typography>
						{row.name}
					</Typography>
				</TableCell>
				<TableCell align="left">
					<Typography>
						{row.calories}
					</Typography>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography variant={"h5"}>
								<Box fontWeight="fontWeightBold">
									🍍 Stock par Fruit:
								</Box>
							</Typography>
							<Table style={{backgroundColor: "#f1f1f1"}} size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>
											<Box fontWeight="fontWeightBold">
												Fruit
											</Box>
										</TableCell>
										<TableCell>
											<Box fontWeight="fontWeightBold">
												Stock
											</Box>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component="th" scope="row">
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

StockTableRow.propTypes = {
	row: PropTypes.shape({
		calories: PropTypes.number.isRequired,
		carbs: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			}),
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};
