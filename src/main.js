import Vue from 'vue'
import App from './App.vue'

export const cruiseBus = new Vue({
	data: {
		selectedCruise: null
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
