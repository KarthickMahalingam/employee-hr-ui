import React, { Component } from 'react'
import EmployeeService from "../../service/EmployeeService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
        this.loadEmployee = this.loadEmployee.bind(this);
    }

    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee() {
        EmployeeService.fetchEmployeeById(window.localStorage.getItem('employeeId'))
            .then((res) => {
                let employee = res.data;
                console.log(employee);
                this.setState({
                    id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email,
                    phone: employee.phone
                });
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone};
        EmployeeService.editEmployee(employee)
            .then(res => {
                this.setState({message : 'Employee edited successfully.'});
                this.props.history.push('/employee');
            });
    }

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>

                    <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange}/>

                    <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>

                    <TextField type="text" placeholder="email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                    <TextField type="text" placeholder="phone" fullWidth margin="normal" name="phone" value={this.state.phone} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveEmployee}>Save</Button>

                </form>
            </div>
        )
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditEmployeeComponent;