<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <section id="section01" class="bg-whiteF dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">AZ.ゼロ</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            ✦ 尋找下一顆星星 ✦
            <br />
            為台灣其他城市的文創發展創造經驗。
            <br />
            讓各式各樣的創意在這裡切磋較量，
            <br />
            在切磋較量中滙成文化。
            <br />
            讓文創活動的價值，在愉悅的消費體驗中傳遞發散。
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img id="homeBigImg" src="../assets/image/03.jpg" />
        </div>
      </div>
    </section>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/12.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/13.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s06.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s07.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s05.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/s08.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/pc1-9.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/pc1-6.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/pc1-10.jpeg" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
