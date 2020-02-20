<template>
	
	<div id="notification">

		<div v-colored:background="color">
			{{ message || ''}}
			<button @click="cancel">X</button>
		</div>

	</div>	

			

</template>


<script>

	export default {

		props: ['message', 'status'],
		
		name: "notification",

		data() {

			return {
				colors: {
					'error': 'red',
					'success': 'green',
					'warning': 'yellow',
					'default': 'grey'
				}
				
			}

		},
		methods: {
			cancel() {
				this.$emit('cancel');
			}
		},
		computed: {
			color() {
				return this.colors[this.status] || this.colors['default'];
			}
		},


	} 


</script>



<style scoped>
	
</style>