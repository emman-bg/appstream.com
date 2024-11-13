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
                    <v-card-subtitle>Let's start with your email</v-card-subtitle>
                </div>
                <div class="content-right">
                    <span class="text-area">
                        <p>{{  errorMessage }}</p>
                        <input
                            v-model="email"
                            :class="errorMessage ? 'error' : 'text-field'"
                            type="text"
                            placeholder="Email"
                        ></input>
                    </span>
                    <span>
                        <v-btn
                            text="Back to login"
                            class="my-5 bg-white"
                            elevation="0"
                            rounded="pill"
                            @click="loginRedirect"
                        ></v-btn>
                        <v-btn
                            text="Next"
                            class="ml-2 mr-5 my-5 bg-deep-purple"
                            elevation="0"
                            rounded="pill"
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
                    <input
                        v-model="password"
                        class="text-field"
                        type="text"
                        placeholder="Password"
                    ></input>
                    <span>
                        <v-btn
                            text="Back"
                            class="my-5 bg-white"
                            elevation="0"
                            rounded="pill"
                            @click="step--"
                        ></v-btn>
                        <v-btn
                            text="Create"
                            class="ml-2 mr-5 my-5 bg-deep-purple"
                            elevation="0"
                            rounded="pill"
                        ></v-btn>
                    </span>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignupView',

    data() {
        return {
            step: 1,
            email: null,
            password: null,
            errorMessage: ''
        };
    },

    watch: {
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

    methods: {
        loginRedirect() {
            this.$router.push({name: 'login'});
        },

        nextStep() {
            if (this.email?.length) {
                this.step++;
            } else {
                this.errorMessage = 'This field is required.';
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