import React, { useState } from "react";
import LandingPage from "./landingpage"; // Import LandingPage
import LoginPage from "./loginpage"; // Import LoginPage

const Home = () => {

	const [view, setView] = useState("landingPage");

	return (
		<div>
			{view === "landingPage" ? (
				<LandingPage setView={setView} /> // Pass setView as a prop
			) : 
		
			(
				<LoginPage />
			)}
		</div>
	);
};

export default Home;
