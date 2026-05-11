<template>
  <div class="p-[5px]">
    <div class="flex items-center gap-[10px] text-[16px] border-b pb-[10px]">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/playground/composition-api">CompositionApi</RouterLink>
      <RouterLink to="/playground/options-api">OptionsApi</RouterLink>
    </div>
    <div class="pt-[10px]">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/javascript/index.js'
import { RouterLink } from 'vue-router'

async function fetchData() {
  const resolve = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await resolve.json()
  console.log(data.title)
}

fetchData()
</script>

<style scoped>
</style>
