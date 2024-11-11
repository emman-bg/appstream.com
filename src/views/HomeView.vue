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
            <div class="content-list">
                <div class="content" v-for="i in 6">
                    <v-col class="content-element" cols="9" @click="openContent">
                        <v-card elevation="8">
                            <v-img src="../../public/images/travel.png" alt="thumbnail" />
                        </v-card>
                        <div class="info">
                            <p class="vid-title text-h6 text-truncate">I went to Africa!</p>
                            <p class="content-creator">Mr. Beast</p>
                        </div>
                    </v-col>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="pagination">
                <v-pagination :length="12"></v-pagination>
            </div>
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
            search: ''
        }
    },


    components: {
        Sidebar
    },

    methods: {
        openContent() {
            window.open('https://google.com', '_blank')
        }
    }
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

        .content-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .content {
            display: flex;
            justify-content: center;

            .content-element {
                cursor: pointer;
            }
        }

        .info {
            display: grid;

            .vid-title {
                margin: 12px 12px 0px 0px;
            }

            .content-creator {
                margin: 0px 12px 12px 0px;
                color: grey;
            }
        }
    }

    .footer {
        .pagination {
            margin-inline: calc(100% - 60vw);
        }
    }
</style>