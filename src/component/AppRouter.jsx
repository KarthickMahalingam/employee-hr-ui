import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployeeComponent from './employee/AddEmployeeComponent';
import EditEmployeeComponent from './employee/EditEmployeeComponent';
import ListEmployeeComponent from './employee/ListEmployeeComponent';
import React from "react";

const AppRouter = () => {
    return (
        <div style={style}>
            <Router>
                <Switch>
                    <Route path="/" exact component={ListEmployeeComponent} />
                    <Route path="/employee" component={ListEmployeeComponent} />
                    <Route path="/add-employee" component={AddEmployeeComponent} />
                    <Route path="/edit-employee" component={EditEmployeeComponent} />
                </Switch>
            </Router>
        </div>
    )
}

const style = {
    marginTop: '20px'
}

export default AppRouter;