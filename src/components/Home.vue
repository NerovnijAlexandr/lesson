<template>
	
<div id=user-list>
	
	<h1 class="bg-green-400">{{ title }}</h1>
	{{ counter }}
	<button @click='add'>Add</button>

</div>

			

</template>


<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'Home',
		computed: mapGetters([
			'title',
			'counter'
		]),
		methods: {
			add() {
				this.$store.dispatch('addAction', {val: 5})
			}
		}
	}


</script>



<style scoped>
	
</style>