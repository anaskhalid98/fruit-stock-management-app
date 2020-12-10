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

export default function TransferFruitsDialog(props) {
	const {open, onClickCloseDialog} = props;

	const handleClose = () => {
		onClickCloseDialog();
	};

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
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
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
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
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
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
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

							/>
						</Grid>

					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuler
					</Button>
					<Button onClick={handleClose} color="primary">
						Valider
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
