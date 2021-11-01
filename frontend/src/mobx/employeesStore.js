import { makeAutoObservable } from 'mobx'
import { heightToSm, parseDateToAge } from '../utils'

class EmployeesStore {
    employees = []
    isAnyEmployeeChecked = false;

    constructor() {
        makeAutoObservable(this)
    }
    
    async deleteEmployee(id) {
        try {
            await fetch(`http://localhost:8000/api/employees/${id}`, {method: 'DELETE'});
            this.employees = this.employees.filter(employee => employee.id != id)
        } catch {
            console.log('Could not delete employee')
        }
    }

    async getEmployees() {
        try {
            const employees = await (await fetch('http://localhost:8000/api/employees/')).json()
            this.employees = [...employees.data]
            this.employees.map( employee => {
                employee.weight = Math.round(employee.weight * 0.453592)
                employee.height = heightToSm(employee.height)
                employee.date_of_birth = parseDateToAge(employee.date_of_birth)
                
                return {
                    ...employee,
                    isChecked: false
                }
            })
        } catch(error) {
            console.log('Could not get employees from server')
        }
    }

    toggleCheck(id) {
        this.employees.forEach( employee => {
            if (employee.id === id) {
                employee.isChecked = !employee.isChecked
            }
        })
        
        const checkedEmployees = this.employees.filter(employee => employee.isChecked)
        this.isAnyEmployeeChecked = Boolean(checkedEmployees.length)
    }

    toggleAll( isChecked ) {
        this.employees.forEach( employee => isChecked === false ? employee.isChecked = true : employee.isChecked = false )
        this.isAnyEmployeeChecked = !isChecked
    }
}

export default new EmployeesStore();