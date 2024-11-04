<template>
    <div>
        <h1>Login</h1>
            <form @submit.prevent="login">
            <div>
                <label for="email">Username:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        async login () {
            try {
            const response = await axios.post('http://localhost:8000/login/', {
                email: this.email,
                password: this.password
            })
            localStorage.setItem('access_token', response.data.access)
            console.log('Login successful:', response.data)
            } catch (error) {
            this.errorMessage = 'Invalid email or password'
            console.error('Login error:', error)
            }
        }
    }
}
</script>

<style>
.error {
  color: red;
}
</style>
