import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	}
}

export const loginUser = ({ email, password }) => {

	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => {
			dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user })
		})
		.catch(err => console.error(err));

	}

}