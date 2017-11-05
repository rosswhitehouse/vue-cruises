<template>
	<div class="cruise-detail" v-if="cruise">
		<h2>{{ cruise.destination }} for {{ cruise.length }} nights</h2>
		<h3>{{ cruise.start }} - {{ cruise.end }} {{ cruise.year }}</h3>
		<h4 class="price">£{{ cruise.price }}</h4>
		<p>{{ cruise.content }}</p>

		<div class="details">
			APPLY NOW
		</div>
	</div>
</template>
<script>
	import { cruiseBus } from '../main';

	export default {
		data: function() {
			return {
				cruise: null
			}
		},
		created() {
			cruiseBus.$on('selectedCruise', (passedCruise) => {
				this.cruise = passedCruise;
			})
		}
	}
</script>
<style>
	.cruise-detail {
		margin-top: 30px;
		padding: 0 30px;
	}
</style>