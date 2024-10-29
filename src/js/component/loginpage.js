import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const loginpage = () => {
	return (

		<div className="welcome-page">
			<div className="welcome-message">Welcome to the world's sketchiest bank! Please enter your username and password below:</div>
			<div className="username">Username: <input></input></div> 
			<div className="password">Password: <input></input></div> 
			<div className="login-button"><button>Login</button></div>
		</div>



	);
};

export default Home;
