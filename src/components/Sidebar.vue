<template>
    <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
    >
        <v-list-item
            prepend-icon="mdi-account-circle-outline"
            :title="usernameDisplay"
        >
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-home" link title="Home"></v-list-item>
        <v-list-item prepend-icon="mdi-television-play" link title="My Channel"></v-list-item>
        <template v-slot:append>
            <v-list-item prepend-icon="mdi-logout" link title="Logout" @click="performLogout"></v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
    name: 'Sidebar',

    computed: {
        ...mapState(['username']),

        usernameDisplay() {
            return this.username ? `Welcome, ${this.username}!` : 'Welcome!';
        }
    },

    methods: {
        ...mapActions(['logout']),

        performLogout() {
            this.logout();
            this.$router.push({name: 'login'})
        }
    }
});
</script>
