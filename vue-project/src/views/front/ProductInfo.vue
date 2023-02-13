<template>
  <div id="productInfo" class="px-4 py-8">
    <!-- -navbar -->
    <nav class="sm:px-4 py-6" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-pinkP">
            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <router-link to="/product" class="ml-1 text-sm font-medium text-gray-700 hover:text-pinkP md:ml-2 dark:text-gray-400 dark:hover:text-white">商品</router-link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">商品資訊</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex">
      <div id="productimg" class="w-full lg:w-1/2 px-4 py-4">
        <ProductSwiper :images="productinfo.images"></ProductSwiper>
      </div>
      <div id="productcontent" class="relative w-full lg:w-1/2 px-4 py-4 flex justify-center items-center">
        <div class="w-1/3 text-xl lg:text-2xl flex justify-between items-center fixed top-1/4">
          <div class="flex-wrap flex w-full">
            <div class="w-full flex justify-end pb-4">
              <button type="button">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                </svg>
              </button>
            </div>
            <div class="w-full flex justify-between items-center">
              <span>{{ productinfo.name }}</span>
              <span class="text-red-800">NT$ {{ productinfo.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductSwiper from '../../components/ProductSwipwe.vue'



AOS.init()
const route = useRoute()

const productinfo = reactive({
  _id: '',
  name: '',
  price: '',
  colors: '',
  description: '',
  image: '',
  images: [],
  sell: true,
  category: ''
})

;(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    productinfo.name = data.result.name
    productinfo.image = data.result.image
    productinfo.description = data.result.description
    productinfo.colors = data.result.colors
    productinfo.images = data.result.images
    productinfo.sell = data.result.sell
    productinfo.category = data.result.category
    productinfo.price = data.result.price
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
