import React from "react";
import classes from "./Logo.module.css";

import Logo from "../../../assets/images/silence-removal-logo.jpg";

const logo = props => (
	<div className={classes.Logo}>
		<a href="http://silenceremoval.com">
			<img src={Logo} alt="Silence Removal Logo" />
		</a>
	</div>
);

export default logo;
