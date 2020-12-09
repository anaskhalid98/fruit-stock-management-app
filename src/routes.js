import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from "./components/pages/authentication/signin.component";
import SignUp from "./components/pages/authentication/signup.component";
import Home from "./components/pages/home/home.component";
import ButtonBases from "./components/pages/home/home.component";
export default function Routes(props) {

	return (
		<Router>
			<Switch>
				<Route exact path="/Home" component={ButtonBases}></Route>
				<Route exact path="/SignUp" component={SignUp}></Route>
				<Route exact path="/*" component={SignIn}></Route>

			</Switch>
		</Router>
	);
}


