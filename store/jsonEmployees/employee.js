export default {
    actions: {
        createEmployees: ({ commit }, newEmployee) => commit('createEmployees', newEmployee),
        updateEmployees: ({ commit }, newEmployee) => commit('updateEmployees', newEmployee),
        readEmployees: ({ commit }, employees) => commit('readEmployees', employees),
        readCount: ({ commit }, i) => commit('readCount', i),
        removeEmployees({commit}, id) {
            commit('removeEmployees', id)  
        },
    },
    mutations: {
        createEmployees(state, employee) {
            state.employees.unshift(employee)
            state.newEmployee = employee
        },
        updateEmployees(state, newEmployee) {
            state.employees.push(newEmployee)
        },
        removeEmployees(state, id) {
            state.employees = state.employees.filter(employee => employee.id != id)
        },
        readCount (state, i) {
            state.i = i
        },
        readEmployees (state, employees) {
            console.log(state.i);
            if (state.i != true){
            state.employees = employees
            }
        }
    },
    state: {
        employees: [],
        i: Boolean
    },
    getters: {
        allEmployees(state) {
            return state.employees.reverse() && state.employees.filter(p => {
                return p.name && p.phone && p.email && p.website && p.username
            })
       },
       getEmployee: state => id => state.employees.find(employee => employee.id == id)
    },
}