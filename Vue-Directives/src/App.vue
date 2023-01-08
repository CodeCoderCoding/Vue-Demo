<template>
  <div v-if="show">v-if</div>
</template>

<script setup>
  import { ref } from 'vue'
  let show=ref(true);
</script>

<style scoped>

</style>
