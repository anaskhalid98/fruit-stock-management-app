import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {signUpAction} from "../../../redux/actions/authentication.action";
import {fireError, fireSuccess} from "../../../redux/actions/alerts.action";
import {useHistory} from "react-router-dom";


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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export function SignUp(props) {
	let history = useHistory();
	const classes = useStyles();
	const [signupData, setSignupData] = React.useState({
		username: "",
		password: "",
		email: ""
	});

	const handleChange = (name) => (event) => {
		setSignupData({...signupData, [name]: event.target.value});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log("Data:", signupData);
		console.dir("state:",props.authentication);
		props.signUpAction({signupData, history})
			.then(response => {
				props.fireSuccess("Vous êtes inscrit avec succès")
			})
			.catch(error => {
				props.fireError("Echec de l'inscription");
			});
	};
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon/>
				</Avatar>
				<Typography component="h1" variant="h5">
					S’inscrire
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								name="username"
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Nom d'utilisateur"
								autoFocus
								autoComplete="fname"
								value={signupData.username}
								onChange={handleChange("username")}

							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Adresse mail"
								name="email"
								autoComplete="email"
								value={signupData.email}
								onChange={handleChange("email")}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="motDePass"
								label="Mot de pass"
								type="password"
								id="motDePass"
								autoComplete="current-password"
								value={signupData.password}
								onChange={handleChange("password")}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={onSubmit}
					>
						S’inscrire
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/SignIn" variant="body2">
								J'ai déjà un compte? Se connecter
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = (state) => state.authentication;
export default connect(mapStateToProps, {
	signUpAction,
	fireSuccess,
	fireError,
})(SignUp);
