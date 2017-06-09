import { combineReducers } from 'redux';
import pictures from './pictures';
import selectedPicture from './selectedPicture';

export default combineReducers({
	pictures,
	selectedPicture
})