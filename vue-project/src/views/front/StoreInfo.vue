<template>
  <div id="storeinfo" class="lg:flex ms:flex-col overflow-x-hidden">
    <div id="leftimg" class="w-full lg:w-1/2 h-full">
      <swiperinfoVue data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000" :images="storeinfo.images"></swiperinfoVue>
    </div>
    <div id="rightinfo" class=" w-full lg:w-1/2 h-full overflow-y-auto">
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000" class="lg:px-16 px-8 py-8 h-full whitespace-pre-wrap lg:text-xl">
        {{ storeinfo.description }}
      </div>
      <div class="lg:px-16 lg:py-16 px-8 py-8 whitespace-pre-wrap sm:text-sm lg:text-xl bg-gray-900 text-gray-50 h-full">
        <div class="pb-4">營業時間：{{ storeinfo.dateValue }}</div>
        <div class="pb-4">地點：{{ storeinfo.place }}</div>
        <div class="pb-4">
          粉絲專頁：
          <br />
          <a :href="storeinfo.url">{{ storeinfo.url }}</a>
        </div>
        <div class="pb-4 whitespace-pre-wrap">
          特色：
          <br />
          {{ storeinfo.special }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import swiperinfoVue from '../../components/swiperinfo.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const route = useRoute()

const storeinfo = reactive({
  name: '',
  image: '',
  images: [],
  description: '',
  dateValue: '',
  special: '',
  url: '',
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
    storeinfo.images = data.result.images
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
