<template>
  <div id="storeinfo">
    <section>
      <div class="px-4 flex-column justify-center items-center">
        <div class="text-center">
          <p class="text-2xl pb-4 lg:text-4xl lg:pt-3 lg:pb-8">
            {{ storeinfo.name }}
          </p>
        </div>
        <div>
          <img class="w-full lg:w-2/3 mx-auto rounded-lg" :src="storeinfo.image" />
        </div>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
        <div class="lg:flex lg:text-left text-center lg:justify-center lg:items-start">
          <div class="lg:px-16 lg:w-2/3 whitespace-pre-wrap lg:text-xl">{{ storeinfo.description }}</div>
          <div class="lg:px-8 lg:w-1/3 flex-col">
            <div class="text-xl pb-4">營業時間：{{ storeinfo.dateValue }}</div>
            <div class="text-xl pb-4">地點：{{ storeinfo.place }}</div>
            <div class="text-xl pb-4">粉絲專頁： <br>
              <a :href="storeinfo.url">{{ storeinfo.url }}</a></div>
            <div class="text-xl pb-4 whitespace-pre-wrap">特色： <br>
              {{ storeinfo.special }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

const route = useRoute()

const storeinfo = reactive({
  name: '',
  image: '',
  description: '',
  dateValue: '',
  special:'',
  url:'',
  place: '',
  price: ''
})

;(async () => {
  try {
    const { data } = await api.get('/stories/' + route.params.id)
    storeinfo.name = data.result.name
    storeinfo.image = data.result.image
    storeinfo.description = data.result.description
    storeinfo.dateValue = data.result.dateValue
    storeinfo.url = data.result.url
    storeinfo.place = data.result.place
    storeinfo.special = data.result.special
    storeinfo.price = data.result.price
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
