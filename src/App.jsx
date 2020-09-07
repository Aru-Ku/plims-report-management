import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./utils/firebase";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import NewForm from "./components/NewForm";
import FormSubmitted from "./components/FormSubmitted";
import Requisitions from "./components/Requisitions";

//* Routes Should be Changed
export default function App() {
	return (
		<Fragment>
			<Navbar />
			<div className='user-select-none'>
				<Switch>
					<Route exact path='/new' component={NewForm} />
					<Route exact path='/submitted' component={FormSubmitted} />
					<Route exact path='/forms' component={Requisitions} />
					<Route exact path='/' component={LandingPage} />
				</Switch>
			</div>
		</Fragment>
	);
}
