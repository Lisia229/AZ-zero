<template>
  <!-- -swiper -->
  <div id="swiperhome" class="pt-[70px] lg:pt-[100px]">
    <Swiper></Swiper>
  </div>
  <!-- -展覽 -->
  <div class="h-full lg:h-[100vh] 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">WHAT’S GOING ON</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium uppercase text-center tracking-normal font-serif">Upcoming Exhibitions</div>
    </div>
    <div class="w-full flex flex-wrap pb-8 justify-center items-center">
      <homeswiper></homeswiper>
    </div>
  </div>
  <!-- -介紹 -->
  <div class="h-full lg:h-[100vh] 2xl:h-full flex flex-wrap justify-center items-center w-full bg-[#515a6e]">
    <div class="w-full lg:w-1/2 h-full">
      <img class="w-full h-full object-cover" src="../../assets/image/01.jpg" />
    </div>
    <div class="w-full lg:w-1/2 h-full px-4 py-4 lg:py-[100px] lg:px-[100px]">
      <span class="text-pinkP leading-10 font-medium uppercase text-center tracking-widest">FUN FACTS</span>
      <div class="font-serif text-xl lg:text-[40px] leading-10 text-white font-bold lg:mb-[20px]">Exhibit In Big Record Of Success.</div>
      <div class="font-light mb-[20px] text-white md:text-lg">
        我們也相當鼓勵自行創業的青年進駐來我們園區，在場創業青年就像是臺灣的國手，你們的創意、科技實力，一定會為AZゼロ帶來翻轉的力量，而我們也一定會以更開放的態度，和所有有心創業的青年一起打拚，共同帶領ゼロ走向創新的宏觀方向與格局，ゼロ的未來，將因為有大家的智慧和努力而更加精采。
      </div>
      <div class="flex justify-center items-center">
        <div class="w-1/3 flex-col">
          <div class="font-serif text-xl lg:text-[40px] leading-10 font-bold lg:mb-[20px] text-pinkP">245</div>
          <div class="text-white">
            Exhibitions
            <br />
            Has Been
          </div>
        </div>
        <div class="w-1/3 flex-col">
          <div class="font-serif text-xl lg:text-[40px] leading-10 font-bold lg:mb-[20px] text-pinkP">3k</div>
          <div class="text-white">
            Visitors
            <br />
            In Last Year
          </div>
        </div>
        <div class="w-1/3 flex-col">
          <div class="font-serif text-xl lg:text-[40px] leading-10 font-bold lg:mb-[20px] text-pinkP">50</div>
          <div class="text-white">
            Awards
            <br />
            Have Received
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- -商品 -->
  <div class="h-full 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">products</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium text-center tracking-normal font-serif">Explore our Products</div>
    </div>
    <div class="w-full flex flex-wrap pb-8 justify-center items-center">
      <swipermoreVue></swipermoreVue>
    </div>
  </div>
  <!-- -場地介紹 -->
  <div class="h-full py-4 px-4 md:py-8 md:px-8 lg:h-[100vh] lg:px-[100px] lg:py-16 2xl:h-full flex flex-wrap justify-center items-center w-full bg-[#FDFBF5]">
    <div class="w-full lg:w-1/2 h-full px-4 py-4 lg:py-[100px] lg:px-[100px]">
      <span class="text-pinkP leading-10 font-medium uppercase text-center tracking-widest">ABOUT RENTAL</span>
      <div class="font-serif text-xl lg:text-[40px] leading-10 text-black font-bold lg:pt-[20px] lg:pb-[30px]">歡迎您發揮您的創意</div>
      <div class="font-light mb-[20px] text-black md:text-lg">
        由台灣文創發展股份有限公司所經營之AZ文化創意產業園區（以下稱本園區），為促進台灣文創產業發展，鼓勵各類文化創意發想及跨界藝文創作展演活動，受理本園區檔期申請及審查，特訂定此要點。
      </div>
      <div>
        <router-link to="/rental">
          <button class="text-pinkP hover:bg-pinkP hover:text-white font-serif py-3 px-6 border border-pinkP" type="button">MORE</button>
        </router-link>
      </div>
    </div>
    <div class="w-full h-full md:w-1/2 flex justify-center items-center">
      <rentalhome></rentalhome>
    </div>
  </div>
  <!-- -商店 -->
  <div class="h-full 2xl:h-full flex flex-wrap justify-center items-center w-full py-4 px-4 md:py-8 md:px-8 lg:px-[100px] lg:py-16">
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-pinkP font-medium uppercase text-center tracking-widest">SHOP</div>
    </div>
    <div class="w-full pb-4 lg:pb-8">
      <div class="text-black text-2xl lg:text-[40px] font-medium uppercase text-center tracking-normal font-serif">園區店家</div>
    </div>
    <div class="w-full h-full flex flex-wrap pb-8 justify-center items-center">
      <shopswiper></shopswiper>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import homeswiper from '../../swiper/homeswiper.vue'
import swipermoreVue from '../../swiper/homeproduct.vue'
import Swiper from '../../components/SwiperHome.vue'
import rentalhome from '../../swiper/rentalhome.vue'
import shopswiper from '../../swiper/shopswiper.vue'

const router = useRouter()

const stories = reactive([])

const exhibitions = reactive([])
const exhibition_bigs = reactive([])

;(async () => {
  try {
    const { data } = await api.get('/exhibitions')
    exhibitions.push(...data.result.splice(1, 3))
    exhibition_bigs.push(...data.result.splice(0, 1))

    // !資料要解構 data:新名字
    const { data: data2 } = await api.get('/stories')
    stories.push(...data2.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    console.log(error)
  }
})()

const info = id => {
  router.push(`exhibition/${id}`)
}

const store = id => {
  router.push(`stories/${id}`)
}
</script>
