import  axios from 'axios';
const HR_EMPLOYEE_API_BASE_URL = 'http://localhost:8080/employee';

class ApiService {

    fetchAllEmployee() {
        return axios.get(HR_EMPLOYEE_API_BASE_URL + '/all');
    }

    fetchEmployeeById(employeeId) {
        console.log(employeeId);
        return axios.get(HR_EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    deleteEmployee(employeeId) {
        return axios.delete(HR_EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    addEmployee(employee) {
        return axios.post(""+HR_EMPLOYEE_API_BASE_URL + '/create', employee);
    }

    editEmployee(employee) {
        console.log(employee);
        return axios.put(HR_EMPLOYEE_API_BASE_URL + '/' + employee.id, employee);
    }

}

export default new ApiService();