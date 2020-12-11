// import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from "@material-ui/core/IconButton";
// import {AccountCircle} from "@material-ui/icons";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
//
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// }));
//
// export default function Header() {
// 	const classes = useStyles();
//
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const open = Boolean(anchorEl);
//
//
// 	const handleMenu = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};
//
// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};
//
// 	return (
// 		<div className={classes.root}>
// 			<AppBar position="static">
// 				<Toolbar>
// 					<Typography variant="h6" className={classes.title}>
// 						News
// 					</Typography>
// 					<div>
// 					<IconButton
// 						aria-label="account of current user"
// 						aria-controls="menu-appbar"
// 						aria-haspopup="true"
// 						onClick={handleMenu}
// 						color="inherit"
// 						edge={"end"}
// 					>
// 						<AccountCircle />
// 					</IconButton>
// 					<Menu
// 						id="menu-appbar"
// 						anchorEl={anchorEl}
// 						anchorOrigin={{
// 							vertical: 'top',
// 							horizontal: 'right',
// 						}}
// 						keepMounted
// 						transformOrigin={{
// 							vertical: 'top',
// 							horizontal: 'right',
// 						}}
// 						open={open}
// 						onClose={handleClose}
// 					>
// 						<MenuItem onClick={handleClose}>Profile</MenuItem>
// 						<MenuItem onClick={handleClose}>My account</MenuItem>
// 					</Menu>
// 					</div>
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Box} from "@material-ui/core";
import {connect} from "react-redux";
import {localAuthenticationAction, logoutAction} from "../../../redux/actions/authentication.action";
import {fireError, fireSuccess} from "../../../redux/actions/alerts.action";
import {SignIn} from "../authentication/signin.component";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export  function Header(props) {
	let history = useHistory();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);



	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		props.logoutAction(history);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Gestion de stock
					</Typography>
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>
									<Typography >
										<Box fontWeight="fontWeightBold">
											Se déconnecter
										</Box>
									</Typography>

								</MenuItem>
							</Menu>
						</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
const mapStateToProps = (state) => state.authentication;
export default connect(mapStateToProps, {
	logoutAction,
	fireSuccess,
	fireError,
})(Header);
