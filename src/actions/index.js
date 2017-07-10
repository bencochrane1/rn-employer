import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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

export const logoutUser = () => {

	return (dispatch) => {
		firebase.auth().signOut();
		dispatch({ type: LOGOUT_USER });
	}
}

export const loginUser = ({ email, password }) => {

	return (dispatch) => {

		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch((err) => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((err) => {
				loginUserFail(dispatch)
			});
		});
	}

}

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
}






