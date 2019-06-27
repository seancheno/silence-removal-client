import reducer from "./reducer";
// import * as actionTypes from '../actions/actionTypes'

describe("auth reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			showOverlay: false,
			chosenAnimal: null,
			sliderValue: 100,
			colorValues: {
				A: "#eee",
				C: "#eee",
				G: "#eee",
				T: "#eee"
			},
			dimmensions: {
				width: 1280,
				height: 720
			}
		});
	});
});
