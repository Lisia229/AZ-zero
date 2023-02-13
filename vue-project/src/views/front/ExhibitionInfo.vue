<template>
  <!-- <div id="exhibitionInfo">
    <section>
      <div class="px-4 flex-column justify-center items-center">
        <div class="text-center">
          <p class="text-2xl pb-4 lg:text-4xl lg:pt-3 lg:pb-8">
            {{ exhibitioninfo.name }}
          </p>
        </div>
        <div>
          <img class="w-full lg:w-2/3 mx-auto" :src="exhibitioninfo.image" />
        </div>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
        <div class="lg:flex lg:text-left text-center lg:justify-center lg:items-start">
          <div class="lg:pr-16">
            <div class="text-xl pb-4">日期：{{ exhibitioninfo.dateValue }}</div>
            <div class="text-xl pb-4">地點：{{ exhibitioninfo.place }}</div>
            <div class="text-xl pb-4">門票：{{ exhibitioninfo.price }}</div>
          </div>
          <div class="lg:pl-16 lg:w-1/2 whitespace-pre-wrap lg:text-xl">{{ exhibitioninfo.description }}</div>
        </div>
      </div>
    </section>
  </div> -->
  <div id="exhibitionInfo" class="lg:flex ms:flex-col overflow-x-hidden">
    <div id="leftimg" class="w-full lg:w-1/2 h-full">
      <img class="object-cover h-full w-full" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000" :src="exhibitioninfo.image" />
    </div>
    <div id="rightinfo" class="w-full lg:w-1/2 h-full overflow-y-auto">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-delay="1000"
        class="lg:px-16 flex overflow-y-auto justify-center items-center px-8 py-8 h-full whitespace-pre-wrap lg:text-xl">
        {{ exhibitioninfo.description }}
      </div>
      <div class="lg:px-16 lg:py-16 px-8 py-8 whitespace-pre-wrap sm:text-sm lg:text-xl bg-gray-800 text-gray-50 h-full">
        <div class="pb-4">名稱：{{ exhibitioninfo.name }}</div>
        <div class="pb-4">日期：{{ new Date(exhibitioninfo.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibitioninfo.dateEnd).toLocaleDateString()  }}</div>
        <div class="pb-4">時間：{{ exhibitioninfo.time }}</div>
        <div class="pb-4">地點：{{ exhibitioninfo.place }}</div>
        <div class="pb-4">門票：NT${{ exhibitioninfo.price }}</div>
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

const route = useRoute()

const exhibitioninfo = reactive({
  name: '',
  image: '',
  description: '',
  dateStart: '',
  dateEnd: '',
  time:'',
  place: '',
  price: ''
})

;(async () => {
  try {
    const { data } = await api.get('/exhibitions/' + route.params.id)
    exhibitioninfo.name = data.result.name
    exhibitioninfo.image = data.result.image
    exhibitioninfo.time = data.result.time
    exhibitioninfo.description = data.result.description
    exhibitioninfo.dateStart = data.result.dateStart
    exhibitioninfo.dateEnd = data.result.dateEnd
    exhibitioninfo.place = data.result.place
    exhibitioninfo.price = data.result.price
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
