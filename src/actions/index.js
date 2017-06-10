import axios from 'axios';
import { apiURL } from '../constants/apiURL';
import { 
	FETCH_PICTURES, 
	FETCH_PICTURES_SUCCESS, 
	FETCH_PICTURES_FAIL 
} from '../constants/actionTypes';


const fetchPicturesSuccess = (data) => {
	return {
		type: FETCH_PICTURES_SUCCESS,
		payload: data
	};
};

const fetchPicturesFail = (error) => {
	return {
		type: FETCH_PICTURES_FAIL,
		payload: error
	};
};

export const fetchPictures = (page = 1) => {
	return (dispatch) => {
		dispatch({ type: FETCH_PICTURES });
		axios.get(`${apiURL}&page=${page}`)
			.then((response) => {
				dispatch(fetchPicturesSuccess({ pictures: response.data.photos, page }));
			})
			.catch((error) => {
				console.log('error');
				dispatch(fetchPicturesFail(error));
			});
	};
};
