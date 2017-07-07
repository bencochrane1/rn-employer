import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class MainApp extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBZgTZqoZJWVdCfRlGi-PqX4_sdOISXMAE',
			authDomain: 'bc-auth.firebaseapp.com',
			databaseURL: 'https://bc-auth.firebaseio.com',
			projectId: 'bc-auth',
			storageBucket: 'bc-auth.appspot.com',
			messagingSenderId: '153713082779'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm/>
			</Provider>
		)
	}
}

export default MainApp;