import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./FileDrop.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "../../axios";

class FileDrop extends Component {
	state = { selectedFile: null, placeholder: null };

	fileChangedHandler = event => {
		if (
			event.target.files[0].name.includes("wav") ||
			event.target.files[0].name.includes("mp3")
		) {
			if (event.target.files[0].size < 50000000) {
				this.setState({ selectedFile: event.target.files[0] });
				this.props.onFileChange(event.target.files[0].name);
				console.log(event.target.files[0].size);
			} else {
				this.setState({
					placeholder:
						"Due to a lack of servers, only files under 50mbs are allowed."
				});
			}
		} else {
			console.log("WHAS");
			this.setState({
				placeholder:
					"Invalid file type. Please select a valid .wav or .mp3 file."
			});
		}
	};

	sampleFileHandler = event => {
		let file = new File([""], "sampleAudio.wav", { type: "audio/wav" });
		console.log(file);

		this.setState({ selectedFile: file });
		this.props.onFileChange("sampleAudio.wav");
	};

	uploadHandler = () => {
		this.props.onSetUploading(true);
		const formData = new FormData();
		formData.append(
			"audioFile",
			this.state.selectedFile,
			this.state.selectedFile.name,
			console.log(this.state.selectedFile)
		);
		axios({
			method: "post",
			url: "/",
			data: formData
		}).then(response => {
			this.props.onSetUploading(false);
			this.props.onSetAudioData(response.data);
		});
	};

	render() {
		let placeholder = this.state.placeholder;
		if (this.props.selectedFileName.selectedFileName) {
			placeholder = this.props.selectedFileName.selectedFileName;
		}

		return (
			<div className={classes.FileDrop}>
				<div className={classes.Column}>
					<input
						type="file"
						name="file"
						id="file"
						onChange={this.fileChangedHandler}
					/>
					<label
						htmlFor="file"
						style={{ borderColor: "#f2c0c0", color: "#dc7a7a" }}
					>
						<FontAwesomeIcon
							icon={"envelope"}
							style={{ transform: "translate(-5px)" }}
						/>
						Select a File
					</label>
					<input
						name="sampleFile"
						id="sampleFile"
						onClick={this.sampleFileHandler}
					/>
					<label
						htmlFor="sampleFile"
						style={{ border: "none", color: "white", backgroundColor: '#f67575' }}
					>
						<FontAwesomeIcon
							icon={"question-circle"}
							style={{ transform: "translate(-5px)" }}
						/>
						Use Sample File
					</label>
				</div>
				<button
					className={classes.UploadButton}
					style={
						!this.props.selectedFileName.selectedFileName
							? { opacity: 0.14 }
							: null
					}
					onClick={
						this.props.selectedFileName.selectedFileName
							? this.uploadHandler
							: null
					}
				>
					Upload
				</button>
				<span style={{ color: "#ffffff" }}>{placeholder}</span>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedFileName: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetAudioData: responseData =>
			dispatch({ type: "SET_RESPONSE_DATA", payload: responseData }),
		onFileChange: fileName =>
			dispatch({ type: "SET_SELECTED_FILE_NAME", payload: fileName }),
		onSetUploading: bool => dispatch({ type: "SET_IS_LOADING", payload: bool })
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FileDrop);
