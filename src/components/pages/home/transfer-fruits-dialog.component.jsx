import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setStockAction} from "../../../redux/actions/stock.action";
import {fireError, fireSuccess} from "../../../redux/actions/alerts.action";

export function TransferFruitsDialog(props) {
	let stock = props.stock;
	const {open, onClickCloseDialog} = props;
	const [transferRequest, setTransferRequest] = React.useState({
		departure: "",
		arrival: "",
		merchandise: {},
		number: ""
	});

	const handleChange = (name) => (event) => {
		setTransferRequest({...transferRequest, [name]: event.target.value});
	};


	const getAppropriateMerchandise = (stockId) => {
		if (stockId === "") {
			return []
		}
		return stock.find(element => element._id === stockId).goods;
	}

	const isSameCity = (departure, arrival) => {
		if (departure === arrival) {
			return true;
		}
		return false;
	}

	const isOutOfStock = (merchandise, request_number, stock, departure) => {
		const currentStock = stock.find((element) => element._id === departure).goods.find(element => element.name === merchandise).total_in_stock;
		if (currentStock >= request_number) {
			return false;
		} else {
			return true;
		}
	}

	const transferIsConfirmed = (request, stock) => {
		if (isSameCity(request.departure, request.arrival)) {
			props.fireError("Vous avez choisi la même ville en départ et en arrivée");
			return false;
		} else if (isOutOfStock(request.merchandise.name, request.number, stock, request.departure)) {
			props.fireError("Le nomber que vous avez choisi est hors stock");
			return false;
		} else {
			return true;
		}
	}

	const handleClose = () => {
		onClickCloseDialog()
	};

	const handleTransfer = () => {
		if (transferIsConfirmed(transferRequest, stock)) {
			onClickCloseDialog();
			console.log(transferRequest);
		}
	}


	return (
		<div>
			<Dialog fullWidth={"lg"} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Transfert des fruits</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Transférer des fruits d’un site de départ à un site d'arrivée
					</DialogContentText>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<FormControl required fullWidth variant="outlined">
								<InputLabel id="demo-simple-select-outlined-label">Départ</InputLabel>
								<Select
									labelId="ville-depart"
									id="ville-depart"
									label="Départ"
									value={transferRequest.departure}
									onChange={handleChange("departure")}
								>
									{
										stock.map((element) => {
											return <MenuItem value={element._id}>{element.city_name}</MenuItem>
										})
									}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl required fullWidth variant="outlined">
								<InputLabel id="demo-simple-select-outlined-label">Arrivée</InputLabel>
								<Select
									labelId="ville-arrivee"
									id="ville-arrivee"
									label="Arrivée"
									value={transferRequest.arrival}
									onChange={handleChange("arrival")}
								>
									{
										stock.map((element) => {
											return <MenuItem value={element._id}>{element.city_name}</MenuItem>
										})
									}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl required fullWidth variant="outlined">
								<InputLabel id="demo-simple-select-outlined-label">Marchandise</InputLabel>
								<Select
									labelId="marchandise"
									id="marchandise"
									label="Marchandise"
									value={transferRequest.merchandise}
									onChange={handleChange("merchandise")}

								>
									{
										getAppropriateMerchandise(transferRequest.departure, stock) && getAppropriateMerchandise(transferRequest.departure, stock).map((element) => {
											return <MenuItem value={element}>{element.name}</MenuItem>
										})
									}

								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="number"
								label="Nomber"
								name="Number"
								type={"number"}
								InputProps={{inputProps: {min: 1}}}
								value={transferRequest.number}
								onChange={handleChange("number")}

							/>
						</Grid>

					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleTransfer} color="primary">
						Valider
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

TransferFruitsDialog.propTypes = {
	/** Open dialog. */
	open: PropTypes.bool,
	/** Close dialog. */
	onClickCloseDialog: PropTypes.func,
};

TransferFruitsDialog.defaultProps = {
	open: false,
	onClickCloseDialog : null
};

const mapStateToProps = (state) => state.stock;
export default connect(mapStateToProps, {
	setStockAction,
	fireSuccess,
	fireError,
})(TransferFruitsDialog);

