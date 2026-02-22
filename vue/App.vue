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
</script>

<style scoped>
</style>
