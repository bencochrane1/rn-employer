import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value })
		})
	}

	render() {

		return (

			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>				
				</CardSection>												
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);




