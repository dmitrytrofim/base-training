<template>
  <div>OptionsApi</div>
  <div class="">{{ count }}</div>
  <button @click="incrementCount">Click me!</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count++
    }
  }
})
</script>

<style scoped></style>