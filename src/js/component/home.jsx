import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [view, setView] = useState("landingPage")




	return (



		<div className="landing-page">
			<div className="landing-message">Welcome</div>
			<div className="enter-button"><button>Enter</button></div>
		</div>

	);
};

export default Home;
