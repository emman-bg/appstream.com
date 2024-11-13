import { createStore } from 'vuex';
import api from '../services/api.js';


export default createStore({
    state: {
        username: JSON.parse(localStorage.getItem('username')) || null,
    },
    getters: {
        isAuthenticated: state => !!state.username
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
            localStorage.setItem('username', JSON.stringify(username));
        },

        logout(state) {
            state.username = null;
            localStorage.clear();
        }
    },
    actions: {
        async login({commit}, credentials) {
            const response = await api.post('/login/', {
                email: credentials.email,
                password: credentials.password
            })
            localStorage.setItem('access_token', response.data.access);
            commit('setUsername', response.data.username);
        },

        logout({commit}) {
            commit('logout');
        }
    },
    modules: {
    }
})
