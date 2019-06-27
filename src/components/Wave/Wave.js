import React, { Component } from "react";
import classes from "./Wave.module.css";

class Wave extends Component {
	state = {
		wave_data: this.props.waveData
	};

	componentDidMount() {
		console.log(this.props.maskid);
		const SPACE_BETWEEN_BARS = 0.05;
		let wave_data = this.state.wave_data;

		document.getElementById(this.props.maskid).innerHTML = wave_data
			.map((sample, i) => {
				if (sample < 0) {
					sample *= -1;
				}

				if (sample > 0.3) {
					sample -= sample / 3;
				}
				let sampleSVGWidth = 100 / wave_data.length;
				let sampleSVGHeight = sample * 35.0;

				return `<rect style="transform: scaleY(.9)"
        x=${sampleSVGWidth * i + SPACE_BETWEEN_BARS / 2.0}
        y=${25 - sampleSVGHeight}
        width=${sampleSVGWidth - SPACE_BETWEEN_BARS}
		height=${sampleSVGHeight} />

						<rect style="opacity: .55"
        x=${sampleSVGWidth * i + SPACE_BETWEEN_BARS / 2.0}
        y=${(68 - sampleSVGHeight) / 3.0}
        width=${sampleSVGWidth - SPACE_BETWEEN_BARS}
		height=${sampleSVGHeight / 1.5} />`;
			})
			.join("");
	}

	waveFormMask() {
		let maskid = this.props.maskid;

		return {
			__html:
				'<svg viewbox="0 0 100 33" class="' +
				classes["WaveformContainer"] +
				'" preserveaspectratio="none">\n' +
				'  <rect class="' +
				classes["WaveformBg"] +
				'" style="clip-path: url(#' +
				[maskid] +
				'") x="0" y="0" height="100" width="100"/>\n' +
				"</svg>" +
				' <svg height="0" width="0">\n' +
				"                    <defs>\n" +
				'                        <clippath id="' +
				[maskid] +
				'"></clippath>\n' +
				"                    </defs>\n" +
				"                </svg>\n"
		};
	}

	render() {
		return (
			<div className={classes.Wave}>
				<div id="parent">
					<span dangerouslySetInnerHTML={this.waveFormMask()} />
				</div>
			</div>
		);
	}
}

export default Wave;
