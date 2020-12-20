import React, {Component} from 'react'
import EmployeeService from "../../service/EmployeeService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone
        }

        EmployeeService.addEmployee(employee)
            .then(() => {
                this.setState({message: 'Employee created successfully'});
                this.props.history.push('/employee');
            })
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Add Employee</Typography>
                <form style={formContainer}>

                    <TextField placeholder="First Name" fullWidth margin="normal" name="firstName"
                               value={this.state.firstName} onChange={this.onChange}/>

                    <TextField placeholder="Last name" fullWidth margin="normal" name="lastName"
                               value={this.state.lastName} onChange={this.onChange}/>

                    <TextField type="text" placeholder="email" fullWidth margin="normal" name="email"
                               value={this.state.email} onChange={this.onChange}/>

                    <TextField type="text" placeholder="phone" fullWidth margin="normal" name="phone"
                               value={this.state.phone} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveEmployee}>Save</Button>

                </form>
            </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style = {
    display: 'flex',
    justifyContent: 'center'

}

export default AddEmployeeComponent;