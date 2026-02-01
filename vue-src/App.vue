<template>
  <div class="text-[50px]">
    <div class="">
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
    </div>
    <div class="">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/javascript/index.js'
import { useCounterStore } from '@/store/index'
import { RouterLink } from 'vue-router'

const store = useCounterStore()
</script>

<style scoped></style>
