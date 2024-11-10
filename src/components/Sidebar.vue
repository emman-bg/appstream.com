<template>
    <v-navigation-drawer
        class="bg-teal-darken-1"
        theme="dark"
        expand-on-hover
        rail
    >
        <v-list-item
            prepend-icon="mdi-account-circle-outline"
            :title="`Welcome, ${userProfile.username}!`"
        >
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-home" link title="Home"></v-list-item>
        <v-list-item prepend-icon="mdi-television-play" link title="My Channel"></v-list-item>
        <template v-slot:append>
            <v-list-item prepend-icon="mdi-logout" link title="Logout"></v-list-item>
        </template>
    </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Sidebar',

    data() {
        return {
            userProfile: {
                username: 'brownie05'
            },
        }
    },

    components: {
    },
});
</script>
