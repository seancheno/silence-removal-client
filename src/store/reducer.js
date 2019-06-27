/* eslint-disable default-case */
const initialState = {
	responseData: null,
	selectedFileName: null,
	isUploading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_RESPONSE_DATA":
			return {
				...state,
				responseData: action.payload
			};
		case "SET_SELECTED_FILE_NAME":
			return {
				...state,
				selectedFileName: action.payload
			};
		case "SET_IS_LOADING":
			return {
				...state,
				isUploading: action.payload
			};
	}
	return state;
};

export default reducer;
