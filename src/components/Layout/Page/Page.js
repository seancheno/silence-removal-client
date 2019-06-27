import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FileDrop from "../../FileDrop/FileDrop";
import Wave from "../../Wave/Wave";

class Page extends Component {
	render() {
		let waveForms = [];
		if (this.props.responseData.responseData) {
			waveForms.push(
				<Wave
					maskid={1}
					waveData={this.props.responseData.responseData.samples}
				/>
			);
			waveForms.push(
				<Wave
					maskid={2}
					waveData={
						this.props.responseData.responseData.samples_silence_removed
					}
				/>
			);
		}
		console.log(this.props.responseData.responseData);

		if (this.props.isUploading.isUploading) {
			return (
				<div className={classes.Page}>
					<img src="https://loading.io/spinners/swing/lg.ball-swing-preloader-gif.gif" />
				</div>
			);
		}

		if (this.props.responseData.responseData) {
			return (
				<div className={classes.Page}>
					<h1>
						Removed{" "}
						{this.props.responseData.responseData.seconds_removed.toFixed(2)}{" "}
						seconds
					</h1>
					<h2>Below are the original and new waveform</h2>
					<div className={classes.WaveContainer}>{waveForms}</div>
					<div className={classes.ButtonWrapper}>
						<button
							className={classes.Button}
							onClick={() => window.open("/", "_self")}
						>
							<FontAwesomeIcon
								icon={"undo-alt"}
								style={{ transform: "translate(-5px)" }}
							/>
							Start Over
						</button>

						<button
							className={classes.Button}
							style={{ backgroundColor: "#f67575" }}
							onClick={() =>
								window.open(this.props.responseData.responseData.s3_audio_url)
							}
						>
							<FontAwesomeIcon
								icon={"long-arrow-alt-down"}
								style={{ transform: "translate(-5px)" }}
							/>
							Download
						</button>
					</div>
				</div>
			);
		}

		return (
			<div className={classes.Page}>
				<div className={classes.EmptySpace} />
				<h1>Remove Silence From an Audio File</h1>
				<h2>Uses a Convolutional Neural Net to Identify and remove silence</h2>
				<div className={classes.WaveContainer}>{waveForms}</div>
				<FileDrop />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		responseData: state,
		selectedFileName: state,
		isUploading: state
	};
};
export default connect(
	mapStateToProps,
	null
)(Page);
