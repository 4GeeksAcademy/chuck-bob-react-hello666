import React, { useState } from "react";
import LandingPage from "./landingpage"; // Import LandingPage
import LoginPage from "./loginpage"; // Import LoginPage
import AccountPage from "./accountpage"; // Import AccountView

const Home = () => {
	const [view, setView] = useState("landingPage");

	return (
		<div>
			{view === "landingPage" ? (
				<LandingPage setView={setView} />
			) : view === "loginPage" ? (
				<LoginPage setView={setView} />
			) : view === "accountView" ? (
				<AccountPage setView={setView} />
			) : null}
		</div>
	);
};

export default Home;
