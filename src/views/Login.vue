<template>
    <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form
                v-model="form"
                @submit.prevent="login"
            >
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    label="Email"
                    clearable
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :readonly="loading"
                    :rules="[required]"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    clearable
                ></v-text-field>

                <br>

                <v-btn
                    :disabled="!form"
                    :loading="loading"
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                    block
                >
                Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                form: false,
                email: null,
                password: null,
                loading: false,
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
            },

            onSubmit () {
                if (!this.form) return

                this.loading = true

                setTimeout(() => (this.loading = false), 2000)
                },
                required (v) {
                return !!v || 'Field is required'
            },
        }
    }
</script>

<style>
    .error {
    color: red;
    }
</style>
