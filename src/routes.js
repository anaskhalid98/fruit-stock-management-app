import React, {useEffect} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SignIn from "./components/pages/authentication/signin.component";
import SignUp from "./components/pages/authentication/signup.component";
import Home from "./components/pages/home/home.component";
import {ACCESS_TOKEN} from "./constants";
import {connect} from "react-redux";
import jwt_decode from "jwt-decode";
import {authenticateUserAction} from "./redux/actions/authentication.action";

const PrivateRout = ({component: Component, props, ...rest}) => {
	const fruitmark_auth = localStorage.getItem(ACCESS_TOKEN);
	const currentTime = Date.now() / 1000;
	let decode = null;
	if (fruitmark_auth) {
		decode = jwt_decode(fruitmark_auth);
	}
	return (
		<Route
			{...rest}
			props={props}
			render={(inputProps) =>
				fruitmark_auth && decode.exp >= currentTime ? (
					<Component {...inputProps}></Component>
				) : (
					<Redirect to="/login"></Redirect>
				)
			}
		/>
	);
};

function Routes(props) {
	useEffect(() => {
		props.authenticateUser(localStorage.getItem(ACCESS_TOKEN));
	}, []);

	return (
		<Switch>
			<PrivateRout
				path="/Home"
				exact
				component={Home}
				props={props}
			></PrivateRout>
			<Route exact path="/SignIn" component={SignIn}></Route>
			<Route path="/*" exact component={SignUp}></Route>
		</Switch>
	);
}

const mapStateToProps = (state) => state.authentication;
export default connect(mapStateToProps, {authenticateUser: authenticateUserAction})(Routes);
