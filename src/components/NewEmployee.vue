<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Phone" v-model="phone">
        <input type="email" placeholder="Email" v-model="email">
        <input type="text" placeholder="Website" v-model="website">
        <input type="text" placeholder="Username" v-model="username">
        <button class="shine-button" type="submit">Create employee</button>
        <hr>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            website: '',
            username: ''
        }
    },
    methods: {
        ...mapMutations(["createEmployees"]),
        submit () {
            this.createEmployees({
                name: this.name,
                phone: this.phone,
                email: this.email,
                website: this.website,
                username: this.username,
                id: Date.now()
            });
            this.name=this.phone=this.email=this.website=this.username='';
        }
    }
}
</script>

<style scoped>
input{
    display: block;
    width: 35%;
    bottom: 1px solid #000;
    border-radius: 10px;
    padding: 5px;
    margin: 0 auto;
    margin-bottom:5px;
}
hr{
    margin-bottom: 60px;
}

</style>