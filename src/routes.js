import VueRouter from 'vue-router'
import Home from './components/Home'
import UsersList from './components/user/List'
import EmployeesList from './components/Employees/List'
import Profile from './components/user/profile.vue'
import err404 from './components/Support/404.vue'

export default new VueRouter ({
	routes: [
		{
			path: '', // http://localhost:8080/
			component: Home
		},
		{
			path: '/users', // http://localhost:8080/users
			component: UsersList,
			name: 'UsersList',

		},
		{
			path: '/employees', 
			component: EmployeesList,
			name: 'Employees',

		},
		{
			path: '/users/:id',
			component: Profile,
			name: 'Profile',
			// beforeEnter(to, from, next) {
			// 	if(to.path == '/users/1') {
			// 		next(true)
			// 	} else {
			// 		next(false)
			// 	}
			// }
		},
		{
			path: '*',
			component: err404,
			name: 'err404'
		}
	],
	mode: 'history',
})