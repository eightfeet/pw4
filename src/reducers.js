const defaultState = {
	sourceList: [],
	selected: [],
	currentdata: [],
	page: 1,
	time: 2,
	initDate: false
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_RUNTIME_VARIABLE':
			return { ...defaultState, ...state, ...action.payload };
		default:
			return state;
	}
};

export default reducer;