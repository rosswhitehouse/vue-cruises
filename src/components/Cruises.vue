<template>
	<div>

	    <div class="show-filter">
	        <div class="details" 
	        	@click="toggleFilter"
	        	>ALL CRUISES <i class="fa fa-caret-up" aria-hidden="true"></i></span>
</div>
	    </div>

		<ul class="list-group cruise-list">

			<app-cruise
				v-for="cruise in cruises.slice(0, sliceAmount)"
				:cruise="cruise"
			></app-cruise>

			<li class="show-more">
				<div class="details" @click="showMore">SHOW MORE</div>
			</li>
		</ul>

	</div>
</template>

<script>
	import { cruiseBus } from '../main';

	import Cruise from './Cruise.vue'
	import CruiseData from '../data/cruise-data.json'

	export default {
		components: {
			appCruise: Cruise
		},
		data: function() {
			return {
				sliceAmount: 4,
				cruises: CruiseData.cruises
			}
		},
		methods: {
			showMore: function() {
				this.sliceAmount = this.sliceAmount + 4
			},
		    toggleFilter: function() {
				var cruiseList = document.querySelector('.cruise-list').classList,
					glyphList = document.querySelector('.details .fa').classList
				if (cruiseList.contains('hide')) {
					cruiseList.remove('hide')
					glyphList.add('fa-caret-up')
					glyphList.remove('fa-caret-down')
				} else {
					cruiseList.add('hide')
					glyphList.add('fa-caret-down')
					glyphList.remove('fa-caret-up')
				}
		    }
		},
		created() {
			cruiseBus.$on('selectedCruise', (passedCruise) => {
				if (window.innerWidth < 768) {
					this.toggleFilter()
				}
			})
		}
	}
</script>
<style lang="scss">
	.cruise-list {
		height: auto;
		max-height: 5000px;
		transition: all 0.3s ease-in-out;
		overflow: hidden;

		&.hide {
			max-height: 0px;
		}
	}
</style>