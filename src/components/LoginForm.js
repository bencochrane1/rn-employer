import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	onLogoutButtonPress() {
		const { user } = this.props;
		this.props.logoutUser({ user });
	}	

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large"/>			
		}

		if (!!this.props.user) {
			return (
				<Button onPress={this.onLogoutButtonPress.bind(this)}>
					Sign Out
				</Button>			
			)
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>			
		)		

	}

	render() {

		return (
			<Card>
				<CardSection>
					<Input
						onChangeText={this.onEmailChange.bind(this)}
						label="Email"
						placeholder="email@gmail.com"
						autoCapitalize="none"
						keyboardType="email-address"
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						onChangeText={this.onPasswordChange.bind(this)}
						label="Password"
						secureTextEntry
						placeholder="password"
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.props.error}</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading, user } = auth;

	return { email, password, error, loading, user };
}


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, logoutUser })(LoginForm);





