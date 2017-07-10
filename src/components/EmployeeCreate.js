import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

	renderPickerItems() {
		const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
		return days.map((day) => <Picker.Item key={day} label={day} value={day} />)
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (

			<Card>
				<CardSection>
					<Input
						value={this.props.name}
						label="Name"
						placeholder="Jane"
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						value={this.props.phone}
						label="Phone"
						placeholder="555-555-5555"
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>				
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						 
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'day', value })}
					>
						{this.renderPickerItems()}
					</Picker>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>				
				</CardSection>												
			</Card>
		)
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);




