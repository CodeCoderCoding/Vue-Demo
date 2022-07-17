<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './pages/home.vue'
</script>

<template>
  <div>
     <router-link to="/home">home</router-link>
     &nbsp;&nbsp;&nbsp;&nbsp;
     <router-link to="/about">about</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>
