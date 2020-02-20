<template>
	
	<div id="user-profile">

		<h1>User profile <span class="bg-blue-400">{{ id }}</span></h1>
		<p>Name: {{ userName }}</p>

		<button class="bg-blue-400" @click="back">Back</button>

		<input type="text" v-model="userName">
		<button @click="changeName">Change name</button>

	</div>	
			

</template>


<script>
	// import {mapGetters} from 'vuex'

	export default {
		name: "Profile",
		data() {
			return {
				test: typeof(this.$route.params['id']),
				id: this.$route.params['id'],
				userName: ''
			}
		},
		watch: {
			$route(to) {
				this.id = to.params['id']
			},
		},
		methods: {
			back() {
				this.$router.push({ name: 'UsersList'})
			},
			changeName() {
				this.$store.commit('changeName', 
				{
					val: this.userName,
					id: this.id
				})
			}
		},
		created() {
			this.userName = this.$store.getters.UserById(this.id).name;
		}
	} 


</script>



<style scoped>
	
</style>