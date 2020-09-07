import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoogleSignin, SignOut } from "../utils/firebase";
import useAuth from "../store/auth";

export default function Navbar() {
	const [isAuthenticated, handleAuth] = useAuth();
	return (
		<header className='navbar navbar-expand-lg navbar-dark user-select-none' style={{ backgroundColor: "rgb(53,53,53)" }}>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					PLIMS
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navigations'
					aria-controls='navigations'
					aria-expanded='true'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse justify-content-end' id='navigations'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/new' activeStyle={{ pointerEvents: "none" }}>
								New Requsition
							</NavLink>
						</li>
						{isAuthenticated ? (
							<li className='nav-item'>
								<NavLink className='nav-link' to='/forms' activeStyle={{ pointerEvents: "none" }}>
									Requsition Forms
								</NavLink>
							</li>
						) : null}
						<li className='nav-item'>
							<button
								className='btn btn-primary btn-block'
								onClick={() => {
									//TODO : Error Handling
									if (!isAuthenticated)
										GoogleSignin()
											.then((data) => handleAuth(data, "login"))
											.catch((e) => console.log(e));
									else
										SignOut()
											.then((data) => handleAuth(data, "signout"))
											.catch((e) => console.log(e));
								}}>
								{!isAuthenticated ? "Google Login" : "Logout"}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
