<script setup>
 
import CountryList from '../components/CountryList.vue'
import NobelPrizeList from '../components/NobelPrizeList.vue';
import ContinentList from '../components/ContinentList.vue';

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <continent-list></continent-list>
        <country-list></country-list>
      </div>
      <div class="col-12 col-md-4">
        <nobel-prize-list></nobel-prize-list>
      </div>
    </div>
  </div>

</template>
