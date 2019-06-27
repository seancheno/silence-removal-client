import React from "react";
import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemDropDown from "./NavigationItemDropDown/NavigationItemDropDown";

const navigationItems = props => (
	<ul className={classes.NavigationItems}>
		<NavigationItemDropDown>Contact</NavigationItemDropDown>
		<NavigationItem clicked={props.clicked}>
			<a href="https://github.com/seancheno/silence-removal-client" className={classes.NavigationItems}>
				<span style={{letterSpacing: '1px', color: "gray", }}>Github</span>
			</a>
		</NavigationItem>
	</ul>
);

export default navigationItems;