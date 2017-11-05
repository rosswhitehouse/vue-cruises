<template>
  <div id="wrapper">
    <app-header></app-header>

    <div class="container">
      <div class="row">

        <div class="transition"
          :class="{ 'col-12 col-md-5': hasSelected, 'col-md-6 offset-md-3': !hasSelected  }">
          <app-cruises></app-cruises>
        </div>

        <div class="col-12 col-md-7 transition fadein--hide delay"
          :class="{ 'fadein--show': hasSelected, 'fadein--hide': !hasSelected}">
          <app-cruise-detail></app-cruise-detail>
        </div>
      </div>
      <div class="row">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './globals/Header.vue'
import Footer from './globals/Footer.vue'
import Cruises from './components/Cruises.vue'
import CruiseDetail from './components/CruiseDetail.vue'

import { cruiseBus } from './main';

export default {
  data: function() {
    return {
      allCruises: [],
      selectedCruise: null,
      hasSelected: false
    }
  },
  components: {
    appCruises: Cruises,
    appHeader: Header,
    appFooter: Footer,
    appCruiseDetail: CruiseDetail
  },
  methods: {
  },
  created() {
    cruiseBus.$on('selectedCruise', (passedCruise) => {
      this.selectedCruise = passedCruise
      this.hasSelected = true
    })
  }
}
</script>

<style lang="scss">
  h1 {
    font-family: 'Courgette', Helvetica, sans-serif;
  }
  body, p, h2, h3, h4 {
    font-family: 'Roboto', Helvetica, sans-serif;
  }
  .transition {
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }
  .delay {
    transition-delay: 0.5s;
  }
  .fadein--hide {
    opacity: 0;
    max-height: 0;
    height: auto;
  }
  .fadein--show {
    opacity: 1;
    max-height: 100vh;
    height: auto;
  }
  .col-md-0 {
    width: 0;
  }
  .price {
    color: #29B6F6;
    font-weight: bold;
  }
  ul {
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .offset-md-3 {
      margin-left: 25%;
    }
    .show-filter {
      display: none;
    }
  }
</style>
