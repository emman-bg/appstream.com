<template>
    <Sidebar />
    <v-app>
        <div class="header">
            <div class="searchbar">
                <i class="mdi mdi-magnify icon"></i>
                <span>
                    <input class="input-field" type="text" placeholder="Search"></input>
                </span>
            </div>
            <v-img
                src="../../public/stream.svg"
                alt="AppStream logo"
                max-width="42"
                max-height="42"
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

        .searchbar {
            min-width: 420px;
            max-height: 42px;

            input {
                height: 100%;
                width: 100%;
                border: 1px solid lightgrey;
                border-radius: 4px;
                text-indent: 28px;
            }

            i {
                position: absolute;
                height: inherit;
            }

            .icon {
                padding: 10px;
                height: 42px;
            }

            .input-field {
                width: 100%;
                padding: 10px;
                text-align: start;
            }
        }
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