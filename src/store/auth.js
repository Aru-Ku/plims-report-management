import { useState, useEffect } from "react";

const useAuth = () => {
	const [isAuthenticated, setAuthenticated] = useState(null);

	useEffect(() => {
		const userDetails = localStorage.getItem("userDetails");
		if (userDetails) {
			setAuthenticated(userDetails);
		}
	}, [setAuthenticated]);

	const handleAuth = (authData, authtype) => {
		if (authtype === "login") {
			const {
				user: { email, displayName, photoURL, refreshToken, uid },
				credential: { accessToken, idToken },
			} = authData;
			localStorage.setItem("userDetails", JSON.stringify({ email, displayName, photoURL, refreshToken, uid, accessToken, idToken }));
			setAuthenticated({ email, displayName, photoURL, refreshToken, uid, accessToken, idToken });
		} else {
			localStorage.removeItem("userDetails");
			setAuthenticated(null);
		}
	};

	return [isAuthenticated, handleAuth];
};

export default useAuth;
