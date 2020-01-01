<template>
	<div id="app" class='container'>
		<router-view></router-view>
	</div>
</template>

<script>
import Profiles from './components/Profiles.vue'

export default {
	name: 'app',
	components: {
		Profiles
	},
	data () {
		return {}
	}
}
</script>
