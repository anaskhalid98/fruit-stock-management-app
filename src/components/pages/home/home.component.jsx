import React from 'react';
import Header from "./header.component";
import StockTable from "./stock-table.component";
import Fab from "@material-ui/core/Fab";
import SendIcon from '@material-ui/icons/Send';
import {makeStyles} from "@material-ui/core/styles";
import TransferFruitsDialog from "./transfer-fruits-dialog.component";

const useStyles = makeStyles((theme) => ({
	floatingButton:{
		position:"fixed",
		bottom : 40,
		right :40
	},

}));

export default function Home() {
	const classes = useStyles();
	const [openTransferFruitsDialog, setOpenTransferFruitsDialog] = React.useState(false);

	const handleClickTransferFruitsDialog = () => {
		setOpenTransferFruitsDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenTransferFruitsDialog(false);
	};

	return (
		<React.Fragment>
			<Header/>
			<main>
				<StockTable/>
			</main>
			<Fab size={"large"} onClick={handleClickTransferFruitsDialog} className={classes.floatingButton} color="primary" aria-label="Transférer des fruits ">
				<SendIcon  />
			</Fab>
			<TransferFruitsDialog onClickCloseDialog={handleCloseDialog} onClickOpenDialog={handleClickTransferFruitsDialog} open={openTransferFruitsDialog} />
		</React.Fragment>
	);
}
