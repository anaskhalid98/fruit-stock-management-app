import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect, useHistory} from "react-router-dom";
import {localAuthenticationAction} from "../../../redux/actions/authentication.action";
import {fireError, fireSuccess} from "../../../redux/actions/alerts.action";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";



const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	createAccount: {
		backgroundColor: "green"
	}
}));

export function SignIn(props) {
	let history = useHistory();
	const classes = useStyles();
	const [signinData, setSigninData] = React.useState({
		username: "",
		password: "",
	});

	const handleChange = (name) => (event) => {
		setSigninData({...signinData, [name]: event.target.value});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		props.localAuthenticationAction({signinData, history})
			.then(() =>{
				props.fireSuccess("Bienvenue à votre espace gestion de stock")
			})
			.catch((error) => {
			props.fireError(error);
		});
	};

	if (props.authenticated ) {
		return (
			<Redirect
				to={{
					pathname: "/Home",
					state: { from: props.location },
				}}
			/>
		);
	} else {
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline/>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Nom d'utilisateur"
							name="username"
							autoComplete="uname"
							value={signinData.username}
							onChange={handleChange("username")}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Mot de pass"
							type="password"
							id="password"
							autoComplete="current-password"
							value={signinData.password}
							onChange={handleChange("password")}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={onSubmit}
						>
							Connexion
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="/*" variant="body2">
									Créer un compte
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

const mapStateToProps = (state) => state.authentication;
export default connect(mapStateToProps, {
	localAuthenticationAction,
	fireSuccess,
	fireError,
})(SignIn);
