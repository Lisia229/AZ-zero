<template>
  <div v-for="image in images">
    <img :src="image" />
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/users'
// Import Swiper Vue.js components

defineProps({
  image: {
    type: String
  },
  images: {
    type: Array
  }
})

const user = useUserStore()
</script>
