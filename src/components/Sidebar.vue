<template>
    <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
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
import { mapState } from 'vuex';

export default defineComponent({
    name: 'Sidebar',

    data() {},

    computed: {
        ...mapState(['userProfile'])
    },
});
</script>
