 <template>
    <div @submit="submit">
        
        <h2>Редактирование</h2>
        <input type="text" v-model="employee.name">
        <input type="text" v-model="employee.phone">
        <input type="email" v-model="employee.email">
        <input type="text" v-model="employee.website">
        <input type="text" v-model="employee.username">
        <button class="shine-button" type="button" @click="submit">Edit employee</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return{
            employee: {}
        }
    },
    name: 'Edit',
    created: function () {
    this.id = this.$route.params.id;
    },
    methods:{ 
        ...mapActions(["updateEmployees", "readCount"]),
        submit() {
      const { name, phone, email, website, username } = this.employee;
      let i = true
      this.readCount(i),
      this.$store.dispatch('removeEmployees', this.employee.id)
      this.updateEmployees ({
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        website: website,
        username: username
      })
        this.$router.push('employees')
    }
},
    mounted(){
        if (this.$route.query?.id) {
            const employee = this.$store.getters.getEmployee(this.$route.query.id)
            if (employee) {
                this.employee = employee
            }
        }
    }
}
</script>

<style scoped>
h2{
    padding-top: 1rem;
    margin-top: 0;
}
input{
    display: block;
    width: 50%;
    bottom: 1px solid #000;
    border-radius: 10px;
    padding: 5px;
    margin: 0 auto;
    margin-bottom:5px;
}

</style>