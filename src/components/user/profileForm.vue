<template>
					
	<div id="profile-form">
		
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" v-model="name">
		</div>
		<div>
			<label for="surname">Surname</label>
			<input type="text" id="surname" v-model="surname">
		</div>

		<div>
			<label for="about-me">AboutMe</label>
			<input id="about-me" v-model="aboutme" rows='10' cols='50'>
		</div>

		<div>
			<button @click="save" class="font-bold py-2 px-4 bg-red-500 rounded">Save</button>
			<button @click="cancel" class="font-bold py-2 px-4 bg-red-500 rounded">Cancel</button>
		</div>
	</div>

	

</template>



<script>

	import {eventBus} from '../../main.js'

	export default {

		props: { 
			user: {
				type: Object,
				required: true
			} 
		},

		name: "ProfileForm",

		data() {
			return {
				name: '',
				surname: '',
				aboutme: ''
			}
		},
		methods: {
			save() {
				let name = this.name
				let surname = this.surname
				let aboutme = this.aboutme

				this.$emit('save-user', {name, surname, aboutme})

				eventBus.$emit('show-notify', {
					message: 'User saved',
					status: 'success'
				})

				this.cancel()
			},
			cancel() {
				this.$emit('cancel')
			}
		},
		created() {
			this.name = this.user.name
			this.surname = this.user.surname
			this.aboutme = this.user.aboutme
		}
	} 

</script>



<style scoped>
	
</style>