<template>
  <div class="rootcta">
    <DataTable />
  </div>
</template>

<script setup>
import DataTable from "./components/DataTable.vue";
export default {
  name: "App",
  components: { DataTable },
};
</script>

<style>
@import "./assets/alga.css";
</style>