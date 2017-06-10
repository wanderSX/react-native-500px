import { 
	FETCH_PICTURES, 
	FETCH_PICTURES_SUCCESS, 
	FETCH_PICTURES_FAIL 
} from '../constants/actionTypes';

const INITIAL_STATE = {
	page: 1,
	error: '',
	isFetching: false,
	data: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_PICTURES:
			return { ...state, isFetching: true };
		case FETCH_PICTURES_SUCCESS:
			const { page, pictures } = action.payload;
			return { ...state, data: [...state.data, ...pictures], page, isFetching: false };
		case FETCH_PICTURES_FAIL:
			return { ...state, error: action.payload.error.message, isFetching: false };
		default:
			return state;
	}
};
