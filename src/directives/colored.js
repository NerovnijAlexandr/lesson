export default {
	bind(el, binding) {
		if(binding.arg === 'background') {
			el.style.backgroundColor = binding.value;
		}
	},
	update(el, binding) {
		if(binding.arg === 'background') {
			el.style.backgroundColor = binding.value;
		}
	},

}
	