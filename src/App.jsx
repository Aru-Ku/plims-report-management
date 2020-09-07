import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./utils/firebase";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import NewForm from "./components/NewForm";
import FormSubmitted from "./components/FormSubmitted";
import Requisitions from "./components/Requisitions";
import DisplayForm from "./components/DisplayForm";

//* Routes Should be Changed
export default function App() {
	return (
		<Fragment>
			<Navbar />
			<div className='user-select-none'>
				<Switch>
					<Route exact path='/new' component={NewForm} />
					<Route exact path='/submitted' component={FormSubmitted} />
					<Route exact path='/forms/:form_id' component={DisplayForm} />
					<Route exact path='/forms' component={Requisitions} />
					<Route exact path='/' component={LandingPage} />
					<Redirect to='/' />
				</Switch>
			</div>
		</Fragment>
	);
}
