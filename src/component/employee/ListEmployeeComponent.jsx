import React, { Component } from 'react';
import EmployeeService from '../../service/EmployeeService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            message: null
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
    }

    componentDidMount() {
        this.reloadEmployeeList();
    }

    reloadEmployeeList() {
        EmployeeService.fetchAllEmployee()
            .then((res) => {
                this.setState({employees: res.data})
            })
    }

    deleteEmployee(employeeId) {
        EmployeeService.deleteEmployee(employeeId)
            .then(() => {
                this.setState({message: 'Employee deleted successfully'})
                this.setState({employees: this.state.employees.filter(employee => employee.id !== employeeId)})
            })
    }

    editEmployee(employeeId) {
        window.localStorage.setItem("employeeId", employeeId);
        this.props.history.push('/edit-employee');
    }

    addEmployee() {
        window.localStorage.removeItem("employeeId");
        this.props.history.push("/add-employee");
    }


    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Employee Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addEmployee()}>
                    Add Employee
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">FirstName</TableCell>
                            <TableCell align="left">LastName</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Edit</TableCell>
                            <TableCell align="left">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.employees.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left" onClick={() => this.editEmployee(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteEmployee(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        )
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListEmployeeComponent;