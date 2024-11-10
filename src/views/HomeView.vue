<template>
    <Sidebar />
    <v-app>
        <div class="header">
            <v-text-field
                v-model="search"
                label="Search"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
                max-width="512"
            ></v-text-field>
            <v-img
                src="../../public/stream.svg"
                alt="AppStream logo"
                max-width="56"
                max-height="56"
            ></v-img>
        </div>
        <div class="body">
            <div class="title text-left text-h4">
                Latest from your subscriptions
            </div>
            <v-row
                align="center"
                style="height: 150px;"
                justify="space-between"
            >
                <v-col cols="3">
                    <v-card elevation="8">
                        <v-img src="../../public/images/travel.png" alt="thumbnail" />
                    </v-card>
                    <div class="info">
                        <p class="vid-title text-h6 text-truncate">I went to Africa!</p>
                        <p class="content-creator">Mr. Beast</p>
                    </div>
                </v-col>
                <v-col cols="3">
                    <v-card
                        title="I went to Africa!"
                        subtitle="Mr. Beast"
                        elevation="8"
                    >
                        <v-img src="../../public/images/travel.png" alt="thumbnail" />
                    </v-card>
                </v-col>
                <v-col cols="3">
                    <v-card
                        title="I went to Africa!"
                        subtitle="Mr. Beast"
                        elevation="8"
                    >
                        <v-img src="../../public/images/travel.png" alt="thumbnail" />
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Sidebar from '../components/Sidebar.vue';

export default defineComponent({
    name: 'HomeView',

    data() {
        return {
            userProfile: {
                username: 'brownie05'
            },
            search: ''
        }
    },


    components: {
        Sidebar
    },
});
</script>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        margin: 32px;
    }

    .body {
        border-top: 1px solid lightgrey;
        height: 100%;

        .title {
            display: flex;
            justify-content: space-between;
            margin: 32px;
        }

        .info {
            display: grid;

            .vid-title {
                margin: 12px;
            }

            .content-creator {
                margin: 12px;
                color: grey;
            }
        }

    }
</style>