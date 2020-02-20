<template>
	
<div id=user-list>
	
	<h1>User list</h1>

	<ul>
		
		<li v-for="user in users"
				:key="user.id">
				<router-link
				class="bg-red"
					tag="a"
					:to="{ name: 'Profile', 
						params: {id: user.id}, 
					}"
					>{{ user.name }}</router-link>
				
		</li>
	</ul>

</div>

			

</template>


<script>

	import {mapGetters} from 'vuex'

	export default {
		name: 'List',
		data() {
			return {
				
			}
		},
		methods: {
			getUsers() {
				this.$store.dispatch('addUsers');
			},
			posst() {
				this.$store.dispatch('addUser');
			}
		},
		computed: mapGetters([
			'users',
		]),
		created() {
			this.getUsers();
			this.posst();
		}
	}


</script>



<style scoped>
	
</style>