import React from "react";


const LandingPage = ({ setView }) => { // Receive setView from props
    return (
        <div className="landing-page">
            <div className="landing-message">Welcome</div>
            <div className="enter-button">
                <button onClick={() => setView("loginPage")}>Go to Login Page</button>
            </div>
        </div>
    );
};

export default LandingPage;
