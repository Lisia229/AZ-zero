<template>
  <swiper
    :slidesPerView="3"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :spaceBetween="30"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <img src="../assets/image/v01.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v02.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v03.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v04.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v05.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/image/v06.jpg" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay]
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
</style>
