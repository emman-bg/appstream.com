<template>
    <div class="field-section">
        <v-card
            height="35%"
            width="50%"
            rounded="lg"
            elevation="0"
        >
            <div
                v-if="step == 1"
                class="contents"
            >
                <div class="content-left">
                    <v-img
                        class="mx-4 my-4"
                        max-width="72"
                        src="../assets/stream.svg"
                    ></v-img>
                    <v-card-title>Enter credentials</v-card-title>
                    <v-card-subtitle>Let's start with your username</v-card-subtitle>
                </div>
                <div class="content-right">
                    <span class="text-area">
                        <p>{{  errorMessage }}</p>
                        <input
                            v-model="username"
                            :class="errorMessage ? 'error' : 'text-field'"
                            type="text"
                            placeholder="Username"
                            tabindex="1"
                            @keydown.enter="nextStep"
                        ></input>
                    </span>
                    <span>
                        <v-btn
                            text="Back to login"
                            class="my-5 bg-white text-deep-purple"
                            elevation="0"
                            rounded="pill"
                            @click="loginRedirect"
                        ></v-btn>
                        <v-btn
                            text="Next"
                            class="ml-2 mr-5 my-5"
                            color="deep-purple"
                            variant="tonal"
                            elevation="0"
                            rounded="pill"
                            tabindex="2"
                            @click="nextStep"
                        ></v-btn>
                    </span>
                </div>
            </div>
            <div
                v-else-if="step == 2"
                class="contents"
            >
                <div class="content-left">
                    <v-img
                        class="mx-4 my-4"
                        max-width="72"
                        src="../assets/stream.svg"
                    ></v-img>
                    <v-card-title>Enter credentials</v-card-title>
                    <v-card-subtitle>Enter an active email to use</v-card-subtitle>
                </div>
                <div class="content-right">
                    <span class="text-area">
                        <p>{{  errorMessage }}</p>
                        <input
                            v-model="email"
                            :class="errorMessage ? 'error' : 'text-field'"
                            type="text"
                            placeholder="Email"
                            tabindex="1"
                            @keydown.enter="nextStep"
                        ></input>
                    </span>
                    <span>
                        <v-btn
                            text="Back"
                            class="my-5 bg-white text-deep-purple"
                            elevation="0"
                            rounded="pill"
                            @click="step--"
                        ></v-btn>
                        <v-btn
                            text="Next"
                            class="ml-2 mr-5 my-5"
                            color="deep-purple"
                            variant="tonal"
                            elevation="0"
                            rounded="pill"
                            tabindex="2"
                            @click="nextStep"
                        ></v-btn>
                    </span>
                </div>
            </div>
            <div
                v-else
                class="contents"
            >
                <div class="content-left">
                    <v-img
                        class="mx-4 my-4"
                        max-width="72"
                        src="../assets/stream.svg"
                    ></v-img>
                    <v-card-title>Enter credentials</v-card-title>
                    <v-card-subtitle>Now your password</v-card-subtitle>
                </div>
                <div class="content-right">
                    <span class="text-area">
                        <input
                            v-model="password"
                            class="text-field"
                            type="password"
                            placeholder="Password"
                            tabindex="1"
                            @keydown.enter="nextStep"
                        ></input>
                    </span>
                    <span>
                        <v-btn
                            text="Back"
                            class="my-5 bg-white"
                            elevation="0"
                            rounded="pill"
                            @click="step--"
                        ></v-btn>
                        <v-btn
                            text="Create account"
                            class="ml-2 mr-5 my-5"
                            color="deep-purple"
                            variant="tonal"
                            elevation="0"
                            rounded="pill"
                            tabindex="2"
                            @click="nextStep"
                        ></v-btn>
                    </span>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import FieldValidatorMixin from '@/mixins/FieldValidatorMixin';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'SignupView',

    mixins: [
        FieldValidatorMixin
    ],

    data() {
        return {
            step: 1,
            username: null,
            email: null,
            password: null,
            errorMessage: ''
        };
    },

    watch: {
        username() {
            this.errorMessage = '';
        },

        email() {
            this.errorMessage = '';
        },

        password() {
            this.errorMessage = '';
        }
    },

    created() {
        this.step = 1;
    },

    beforeUnmount() {
        this.errorMessage = '';
    },

    methods: {
        ...mapActions(['createAccount']),

        loginRedirect() {
            this.$router.push({name: 'login'});
        },

        async nextStep() {
            this.errorMessage = '';

            if (this.step === 1) {
                if (!this.username?.length) {
                    this.errorMessage = 'Username is required';
                } else if (this.username.length < 5) {
                    this.errorMessage = 'Username is too short';
                } else {
                    this.step++;
                }
            } else if (this.step === 2) {
                if (!this.email?.length) {
                    this.errorMessage = 'Email is required';
                } else if (!this.isValidEmail(this.email)) {
                    this.errorMessage = 'Please enter a valid email address';
                } else {
                    this.step++;
                }
            } else {
                if (!this.password?.length) {
                    this.errorMessage = 'Password is required';
                } else if (this.password.length < 8) {
                    this.errorMessage = 'Password is too short';
                } else {
                    try {
                        await this.createAccount({
                            email: this.email,
                            username: this.username,
                            password: this.password
                        });
                        this.$router.push({name: 'home'});
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    }


});
</script>

<style scoped>
    .field-section {
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;

        .contents {
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .content-right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;

            .text-area {
                width: 90%;

                p {
                    margin-left: 18px;
                    font-size: 14px;
                    color: red;
                }
            }

            .text-field {
                width: 90%;
                margin: 8px 18px 34px;
                height: 48px;
                border: 1px solid darkgray;
                border-radius: 4px;
            }

            .error {
                width: 90%;
                margin: 8px 18px 34px;
                height: 48px;
                border: 1px solid red;
                border-radius: 4px;
            }

            .button {
                margin: 18px;
            }

            input {
                text-indent: 10px;
            }
        }
    }

</style>