import { createStore } from 'vuex';
import api from '../services/api.js';


export default createStore({
    state: {
        userProfile: null
    },
    getters: {
        isAuthenticated: state => !!state.userProfile
    },
    mutations: {
        setUserProfile(state, userProfile) {
            state.userProfile = userProfile;
        }
    },
    actions: {
        async login({commit}, credentials) {
            const response = await api.post('/login/', {
                email: credentials.email,
                password: credentials.password
            })
            localStorage.setItem('access_token', response.data.access)
            console.log(response, response.data)
            commit('setUserProfile', response.data.user_profile);
        }
    },
    modules: {
    }
})
