import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

	renderPickerItems() {
		const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
		return days.map((day) => <Picker.Item key={day} label={day} value={day} />)
	}

	render() {

		return (
			<View>
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
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						{this.renderPickerItems()}
					</Picker>
				</CardSection>	
			</View>		
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
	const { name, phone, shift } = state.employeeForm
	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);


