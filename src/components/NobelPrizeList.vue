<script setup>
import { storeToRefs } from "pinia";
import { useNobelPrizeStore } from "../stores/index";

const { nobelPrizes } = storeToRefs(useNobelPrizeStore());
</script>

<template>
  <h2>Irodalmi nobel díjasok</h2>
  <ul class="list-group list-group-flush">
    <li
      v-for="nobelPrize in nobelPrizes"
      :key="nobelPrize.azon"
      class="list-group-item"
    >
    {{ nobelPrize.szemely }} - ({{ nobelPrize.ev }})
    </li>
  </ul>
</template>

<style>
</style>