<template>
  <div id="exhibitionInfo">
    <section class="py-8">
      <div class="px-4 flex-column justify-center items-center">
        <div class="flex flex-wrap">
          <div class="hidden mx-auto lg:block lg:w-[30%] py-4 px-8">
            <div>
              <div class="pb-4">
                <button type="button">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                  </svg>
                </button>
              </div>
              <div class="text-xl lg:text-2xl font-medium pb-4">{{ exhibitioninfo.name }}</div>
              <div class="text-xl pb-4">
                日期：{{ new Date(exhibitioninfo.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibitioninfo.dateEnd).toLocaleDateString() }}
              </div>
              <div class="text-xl pb-4">時間：{{ exhibitioninfo.time }}</div>
              <div class="text-xl pb-4">地點：{{ exhibitioninfo.place }}</div>
              <div class="text-xl pb-4">門票：NT. {{ exhibitioninfo.price }}</div>
            </div>
            <form @submit.prevent="submitCart" class="w-full border-b-[1px] border-gray-300">
              <div class="sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center">
                <span class="whitespace-nowrap">{{ exhibitioninfo.name }}</span>
                <span class="text-red-800 whitespace-nowrap">門票NT. {{ exhibitioninfo.price }}</span>
              </div>
              <!-- -選數量 -->
              <div id="addquantity" class="flex w-full pb-4 justify-between items-start lg:items-center relative">
                <button class="absolute left-3" type="button" @click="quantity--">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
                  </svg>
                </button>
                <input
                  v-model="quantity"
                  type="number"
                  min="1"
                  max="10"
                  readonly="readonly"
                  class="bg-white py- px-36 text-center border border-[#242424] text-[#242424] text-sm focus:ring-[#242424] focus:border-[#242424] block w-full p-2.5" />
                <button class="absolute right-3" type="button" @click="quantity++">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </button>
              </div>
              <!-- -加入購物車 -->
              <div class="w-full pb-4 justify-between items-start lg:items-center">
                <button
                  @click="editCart({ _id, quantity: 1 })"
                  type="submit"
                  class="bg-[#323232] w-full h-12 px-4 py-2 text-base text-white border-[1px] border-[#323232] hover:text-[#323232] hover:bg-white">
                  ADD TO BAG
                </button>
              </div>
            </form>
          </div>
          <div class="w-full lg:w-[70%] py-4 px-4">
            <img class="w-[80%] mx-auto" :src="exhibitioninfo.image" />
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
        <div class="flex flex-wrap justify-center items-center">
          <div class="lg:hidden w-full py-4 px-4">
            <div>
              <div class="pb-4">
                <button type="button">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                  </svg>
                </button>
              </div>
              <div class="text-xl lg:text-2xl pb-4">
                日期：{{ new Date(exhibitioninfo.dateStart).toLocaleDateString() }} ~ {{ new Date(exhibitioninfo.dateEnd).toLocaleDateString() }}
              </div>
              <div class="text-xl lg:text-2xl pb-4">時間：{{ exhibitioninfo.time }}</div>
              <div class="text-xl lg:text-2xl pb-4">地點：{{ exhibitioninfo.place }}</div>
              <div class="text-xl lg:text-2xl pb-4">門票：NT. {{ exhibitioninfo.price }}</div>
            </div>
            <form @submit.prevent="submitCart" class="w-full border-b-[1px] border-gray-300">
              <div class="sm:w-2/3 lg:w-full flex justify-between items-start lg:items-center">
                <span class="whitespace-nowrap">{{ exhibitioninfo.name }}</span>
                <span class="text-red-800 whitespace-nowrap">門票NT. {{ exhibitioninfo.price }}</span>
              </div>
              <!-- -選數量 -->
              <div id="addquantity" class="flex w-full pb-4 justify-between items-start lg:items-center relative">
                <button class="absolute left-3 top-3" type="button" @click="quantity--">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
                  </svg>
                </button>
                <input
                  v-model="quantity"
                  type="number"
                  min="1"
                  max="10"
                  readonly="readonly"
                  class="bg-white py- px-36 text-center border border-[#242424] text-[#242424] text-sm focus:ring-[#242424] focus:border-[#242424] block w-full p-2.5" />
                <button class="absolute right-3 top-3" type="button" @click="quantity++">
                  <svg
                    class="w-5 h-5 number-btn"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </button>
              </div>
              <!-- -加入購物車 -->
              <div class="w-full pb-4 justify-between items-start lg:items-center">
                <button
                  @click="editCart({ _id, quantity: 1 })"
                  type="submit"
                  class="bg-[#323232] w-full h-12 px-4 py-2 text-base text-white border-[1px] border-[#323232] hover:text-[#323232] hover:bg-white">
                  ADD TO BAG
                </button>
              </div>
            </form>
          </div>

          <div class="w-full">
            <div class="w-full text-center">
              <h1 class="text-xl lg:text-4xl">【 展覽介紹 】</h1>
            </div>
            <div class="w-full">
              <div class="px-4 py-4 lg:px-16 lg:py-8 w-full whitespace-pre-wrap lg:text-xl text-center">{{ exhibitioninfo.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import router from '../../router'
import { useUserStore } from '@/stores/users'

const route = useRoute()

const user = useUserStore()
const { editCart } = user

const quantity = ref(1)

const exhibitioninfo = reactive({
  _id: '',
  name: '',
  image: '',
  description: '',
  dateStart: '',
  dateEnd: '',
  time: '',
  place: '',
  sell: true,
  price: ''
})

const submitCart = async () => {
  await editCart({ e_id: exhibitioninfo._id, quantity: parseInt(quantity.value) })
}

;(async () => {
  try {
    const { data } = await api.get('/exhibitions/' + route.params.id)
    exhibitioninfo._id = data.result._id
    exhibitioninfo.name = data.result.name
    exhibitioninfo.image = data.result.image
    exhibitioninfo.time = data.result.time
    exhibitioninfo.description = data.result.description
    exhibitioninfo.dateStart = data.result.dateStart
    exhibitioninfo.sell = data.result.sell
    exhibitioninfo.dateEnd = data.result.dateEnd
    exhibitioninfo.place = data.result.place
    exhibitioninfo.price = data.result.price

    document.title = 'AZ |' + exhibitioninfo.name
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    router.go(-1)
  }
})()
</script>
