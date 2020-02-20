import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Home Page from store',
        counter: 555,
        users: [],
        employees: [],
    },
    getters: {
        title(state) {
            return state.title.toUpperCase();
        },
        users(state) {
            return state.users;
        },
        first_user(state) {
            return state.users[0].name;
        },
        UserById: state => id => {
            return state.users.find(user => user.id === id);
        },
        counter(state) {
            return state.counter;
        }
    },
    mutations: {
        add(state, payload) {
            state.counter += payload.val;
        },
        changeName(state, payload) {
            let user = state.users.find(user => user.id === payload.id);
            user.name = payload.val;
        },
        addUsers: (state, payload) => {
            state.users = payload
        },
    },
    actions: {
        addAction(context, payload) {
            setTimeout(() => {
                context.commit('add', payload)
            }, 1000)
        },
        addUsers(context) {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                context.commit('addUsers', res.data)
            });
        },
        addUser() { 
            axios.post('http://dummy.restapiexample.com/api/v1/create', {
                name: 'a', 
                surname: 'b'
            }).then(res => {
                console.log(res.data)
            })
        }
    },
});