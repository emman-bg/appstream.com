<template>
    <div>
        <v-banner
            v-if="errorMessage"
            class="mx-auto my-4 text-red"
            border="error md"
            color="red"
            icon="mdi-lock"
            lines="one"
            max-width="448"
            rounded="lg"
            elevation="8"
        >
            <v-banner-text>
                {{ errorMessage }}
            </v-banner-text>

            <template v-slot:actions>
                <v-btn @click="errorMessage = ''">Dismiss</v-btn>
            </template>
        </v-banner>
        <v-img
            class="mx-auto my-6"
            max-width="128"
            src="../assets/stream.svg"
        ></v-img>
        <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
        >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
            v-model="email"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password

            <a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
            >
            Forgot login password?</a>
        </div>

        <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card
            class="mb-12"
            color="surface-variant"
            variant="tonal"
        >
            <v-card-text class="text-medium-emphasis text-caption">
                Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
            </v-card-text>
        </v-card>

        <v-btn
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            block
            @click="login"
        >
            Log In
        </v-btn>

        <v-card-text class="text-center">
            <a
                class="text-blue text-decoration-none"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
            >
                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data: () => ({
            visible: false,
            email: null,
            password: null,
            errorMessage: ''
        }),

        watch: {
            errorMessage() {
                if (this.errorMessage) {
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 5000);
                }
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
                this.$router.push({name: 'home'})
                } catch(error) {
                    this.errorMessage = 'Invalid email or password'
                    console.error('Login error:', error)
                    this.errorMessage = 'Invalid email or password.';
                }
            },
        }
    }

</script>
<style scoped>
</style>