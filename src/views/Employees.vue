<template>
  <div>
    <button class="shine-button" @click="$router.push('/')">Home page</button>
    <hr>
    <hr>
    <NewEmployee/>
      <div class="employee" v-for="employee in allEmployees" :key="employee.id">
            <button class="deleteBtn" @click="remove(employee.id)">&times;</button>
            <button class="updtBtn" @click="edit(employee.id)">&#9997;</button>
            <h2 class="name">Сотрудник </h2>
            <h2>{{employee.name}}</h2>
            <p>Телефон: {{employee.phone}}</p>
            <p>Почта: {{employee.email}}</p>
            <p>Сайт: {{employee.website}}</p>
            <p>Username: {{employee.username}}</p>
      </div>
  </div>
</template>


<script>
import NewEmployee from "../components/NewEmployee.vue"
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "app",
  methods: {
    ...mapActions(["readCount","readEmployees" ]),
    remove(id) {
      this.$store.dispatch('removeEmployees', id)
    },
    edit(id) {
      this.$router.push({ path: '/edit', query: { id } } )
    },
  },
  components: {NewEmployee},

  async mounted(){
  const res = await fetch( 'https://jsonplaceholder.typicode.com/users')
  const employees = await res.json()
  this.employees = employees
  this.readEmployees(employees); 
},  
computed: {
    ...mapGetters(["allEmployees"]),
},
}
</script>

<style>
.employee{
  border: 1px solid #000;
  border-radius: 20px;
  margin: 0rem auto;
  margin-top: 1rem;
  width: 600px;
  background: -webkit-linear-gradient(left, #750094, #510086); 
    background: -o-linear-gradient(right, #750094, #510086); 
    background: -moz-linear-gradient(right, #750094, #510086); 
    background: linear-gradient(to right, #750094, #510086); 
  color: rgb(211, 211, 211);
}
button{
    margin-bottom: 5px;
    border-radius: 5px;
}
.home{
    padding: 5px 10px;
}
.deleteBtn{
  padding: 2px, 2px;
  font-size: large;
    border:0px;
    border-radius: 20px;
    background-color: rgba(165, 42, 42, 0);
    font-weight: bolder;
    color: #ffffff;
    float: right;
    margin-right: 10px;
    margin-top: 13px;

}
.updtBtn{
      border:0px;
    border-radius: 10px;
    background-color: #50008600;
    font-weight: bolder;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
}
.name{
margin-left: 80px;
}
</style>