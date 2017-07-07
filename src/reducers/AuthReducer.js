const INITIAL_STATE = { 
	email: '', 
	password: '',
	loading: false,
	error: '',
	user: null
}

import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

export default (state=INITIAL_STATE, action) => {

	console.log('action', action)

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };			
		default: 
			return state;
	}
}