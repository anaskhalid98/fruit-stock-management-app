import React from "react";
import { Snackbar } from "@material-ui/core";
import { fireClose } from "../../../redux/actions/alerts.action";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab/";

function FireAlert(props) {
	const vertical = "bottom",
		horizontal = "left";
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		props.fireClose();
	};
	return (
		<Snackbar
			open={props.alert.open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ vertical, horizontal }}
		>
			<Alert onClose={handleClose} severity={props.alert.severity}>
				<AlertTitle>{props.alert.severity}</AlertTitle>
				{props.alert.message}
			</Alert>
		</Snackbar>
	);
}

const mapStateToProps = (state) => ({ alert: state.alert });
export default connect(mapStateToProps, { fireClose })(FireAlert);
