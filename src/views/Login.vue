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
            class="mx-auto mt-4"
            max-width="84"
            src="../assets/stream.svg"
        ></v-img>
        <p class="mx-auto text-center mb-5 app-name">APPSTREAM</p>
        <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
        >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
            v-model="email"
            tabindex="1"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            @keydown.enter="performLogin"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password

            <a
                class="text-caption text-decoration-none text-deep-purple"
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
            tabindex="2"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            @keydown.enter="performLogin"
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
            color="deep-purple"
            size="large"
            variant="tonal"
            block
            @click="performLogin"
        >
            Log In
        </v-btn>

        <v-card-text class="text-center">
            <a
                class="text-deep-purple text-decoration-none"
                href="/signup"
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
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';


export default defineComponent({
    name: 'Login',

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
        ...mapActions(['login']),

        async performLogin() {
            try {
                await this.login({ email: this.email, password: this.password });
                this.$router.push({name: 'home'});
            } catch(error) {
                this.errorMessage = 'Invalid email or password.';
            }
        },
    }
});
</script>
<style scoped>
    .app-name {
        font-weight: bold;
        letter-spacing: 0.8rem;
        font-size: 1.5rem;
    }
</style>