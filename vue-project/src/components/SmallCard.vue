<template>
  <div class="lg:w-full lg:h-76 px-4 py-4 lg:pt-8 bg-whiteF">
    <img class="cursor-pointer rounded-lg md:w-full md:h-40 w-80 lg:h-52" :src="image" />
    <div class="p-5 row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-12">
      <span class="mb-2 whitespace-nowrap text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</span>
      <span class="mb-2 text-xl font-bold text-right tracking-tight text-gray-900 dark:text-white whitespace-nowrap">
        {{ new Date(dateStart).toLocaleDateString() }} ~ {{ new Date(dateEnd).toLocaleDateString()  }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/users'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  dateStart: {
    type: String,
    default: ''
  },
  dateEnd: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  place: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
</script>

<style scoped></style>
