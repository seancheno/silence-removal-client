import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import Page from "./components/Layout/Page/Page";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faCheck,
	faUndoAlt,
	faLongArrowAltDown,
	faEnvelope,
	faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faCheck,
	faUndoAlt,
	faLongArrowAltDown,
	faEnvelope,
	faQuestionCircle
);

class App extends Component {
	render() {
		return (
			<Layout>
				<Page />
			</Layout>
		);
	}
}

export default App;
