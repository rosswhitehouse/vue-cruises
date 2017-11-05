<template>
	<li class="list-group-item cruise-item" @click="selectCruise">
		<div class="row">
			<div class="col-lg-9">
				<h2>{{ cruise.destination }} for {{cruise.length}} nights</h2>
			</div>
			<div class="col-lg-2">
				<h3 class="price">£{{ cruise.price }}</h3>
			</div>
			<div class="col-12">
				<p>Boarding: {{cruise.start}} {{cruise.year}}</p>
			</div>
			<div class="col-12">
				<div class="details details--small">VIEW DETAILS</div>
			</div>
		</div>
	</li>
</template>
<script>
	import { cruiseBus } from '../main';

	export default {
		props: ['cruise'],
		methods: {
			selectCruise() {
				cruiseBus.$emit('selectedCruise', this.cruise)
				scrollTo(document.body, 0, 100)
			},
			scrollTo(element, to, duration) {
		        if (duration < 0) return;
		        var difference = to - element.scrollTop;
		        var perTick = difference / duration * 2;

			    setTimeout(function() {
			        element.scrollTop = element.scrollTop + perTick;
			        scrollTo(element, to, duration - 2);
			    }, 10);
			}
		}
	}
</script>

<style lang="scss">
.cruise-item {
	cursor: pointer;

	h2 {
		font-size: 25px;
		margin: 0 0 0.2em 0;
	}
	h3 {
		font-size: 20px;
		color: #29B6F6;
		margin: 0 0 0.2em 0;
	}
}

.details {
	background: #29B6F6;
	color: white;
	padding: 12px 6px;
	box-sizing: border-box;
	border: #29B6F6 solid 2px;
	text-align: center;
	cursor: pointer;
	
	&:hover {
		color: #29B6F6;
		background: white;
	}

	&--small {
		padding: 4px;
		font-size: 14px;
		display: inline-block;
		float: right;
	}
}

.rightFloat {
	margin-left:66.66%;
}
</style>