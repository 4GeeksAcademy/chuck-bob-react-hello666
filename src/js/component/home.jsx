import React, { useState } from "react";
import LandingPage from "./landingpage"; // Import LandingPage
import LoginPage from "./loginpage"; // Import LoginPage
import AccountPage from "./accountpage"; // Import AccountView

const Home = () => {
	const [view, setView] = useState("landingPage");
	const [username, setUsername] = useState("");

	return (
		<div>
			{view === "landingPage" ? (
				<LandingPage setView={setView} />
			) : view === "loginPage" ? (
				<LoginPage setView={setView} setUsername={setUsername} />
			) : view === "accountView" ? (
				<AccountPage setView={setView} username={username} setUsername={setUsername}/>
			) : null}
		</div>
	);
};

export default Home;
