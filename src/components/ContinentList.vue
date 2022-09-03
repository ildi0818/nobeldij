<template>
  <h2>Kontinensek</h2>
  <select class="form-select" v-model="selectedContinent">
    <option
      v-for="continent in getAllContinent"
      :key="continent"
      :value="continent"
    >
      {{ continent }}
    </option>
  </select>
</template>


<script setup>
import { storeToRefs } from "pinia";
import { useNobelPrizeStore } from "../stores/index";

const { getAllContinent } = storeToRefs(useNobelPrizeStore());

const { selectedContinent } = storeToRefs(useNobelPrizeStore());
</script>

<style>
</style>