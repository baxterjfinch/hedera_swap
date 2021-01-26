import actions from './actions'

const initialState = {
	payload: [],
	error: undefined
}

export default function Compiler(state = initialState, action) {
	switch (action.type) {
		case `SET_COMPILE_CONTRACTS`:
			return {
				...state,
				payload: action.response,
				error: undefined
			};

		default:
			return state;
	}
}