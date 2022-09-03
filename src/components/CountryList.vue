<script setup>
import { storeToRefs } from "pinia";
import { useNobelPrizeStore } from "../stores/index";

const { getAllCountry } = useNobelPrizeStore();
getAllCountry();

const { countries } = storeToRefs(useNobelPrizeStore());
const { countryId } = storeToRefs(useNobelPrizeStore());

const { getNobelPrizeByCountry } = useNobelPrizeStore();
getNobelPrizeByCountry();

const { getCountryByContinent } = storeToRefs( useNobelPrizeStore())
</script>

<template>
  <h2>Országok</h2>
  <select
    class="form-select mt-3"
    v-model="countryId"
    @change="getNobelPrizeByCountry"
  >
    <option
      v-for="country in getCountryByContinent"
      :key="country.azon"
      :value="country.azon"
    >
      {{ country.orszag }}
    </option>
  </select>
  <!-- {{countryId}} -->
</template>

<style>
</style>