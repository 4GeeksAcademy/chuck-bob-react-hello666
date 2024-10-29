import React, { useState } from "react";


const AccountPage = ( { setView} ) => {


	return (
		
		<div className="account-balance-page"> 
			<div className="username-text">Username HERE</div>
	
			<div className="account-balance-box"> 

			<div className="account-balance-increase"><button>Add Money</button></div>
			<div className="account-balance-display">BANK BALANCE</div>
			<div className="account-balance-decrease"><button>Remove Money</button></div>
		</div>

		<div className="exit-button"><button>Exit</button></div>


</div> 


	);
};

export default AccountPage;
