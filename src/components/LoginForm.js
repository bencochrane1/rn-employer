import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

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

	render() {

		return (
			<Card>
				<CardSection>
					<Input
						onChangeText={this.onEmailChange.bind(this)}
						label="Email"
						placeholder="email@gmail.com"
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

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = ({ auth }) => {
	const { email, password } = auth;

	return { email, password };
}


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);