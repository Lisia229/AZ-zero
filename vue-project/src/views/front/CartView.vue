<template>
  <div id="CartView">
    <!-- -navbar -->
    <nav class="px-4 py-4 lg:pb-6 lg:py-10 w-full z-10 bg-white fixed" aria-label="Breadcrumb">
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
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">購物車</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="px-4 pt-16">
      <div class="flex justify-center items-center py-8 px-8 text-2xl">
        <svg class="w-10 h-10 pr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
        </svg>
        <div>購物車</div>
      </div>
      <table class="w-full border-b-[1px] border-gray-500 table-fixed text-left text-gray-500 py-8">
        <thead class="text-base text-center text-white uppercase bg-black">
          <tr>
            <th scope="col" class="px-6 py-3">商品照片</th>
            <th scope="col" class="px-6 py-3">商品名稱</th>
            <th scope="col" class="px-6 py-3">商品價格</th>
            <th scope="col" class="px-6 py-3">商品數量</th>
            <th scope="col" class="px-6 py-3">商品小計</th>
            <th scope="col" class="px-6 py-3">操作</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr class="my-2" v-for="(item, index) in cart" :key="index">
            <td>
              <img class="w-full mx-auto" :src="item.p_id.image" />
            </td>
            <td>
              {{ item.p_id.name }}
            </td>
            <td>NT. {{ item.p_id.price }}</td>
            <td>
              <button type="button" @click="updateCart(idx, -1)">-</button>
              &nbsp; {{ item.p_id.quantity }} &nbsp;
              <button type="button" @click="updateCart(idx, 1)">+</button>
            </td>
            <td>NT. {{ item.p_id.price * item.quantity + item.e_id.price * item.quantity }}</td>
            <td>
              <button type="button" @click="updateCart(idx, item.p_id.quantity * -1)">刪除</button>
            </td>
          </tr>
          <tr v-if="cart.length === 0">
            <td colspan="6">沒有商品</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-wrap px-4 py-4 justify-start text-right items-center">
        <div class="w-full">
          <p class="text-base">
            總金額 &nbsp;
            <span class="text-2xl text-red-700">NT. {{ totalPrice }}</span>
          </p>
        </div>
        <div class="w-full py-4">
          <button
            class="w-40 text-center px-3 py-2 bg-blueB border-[1px] border-blueB hover:bg-white hover:text-blueB text-white"
            type="button"
            :disabled="!canCheckout"
            @click="onCheckoutBtnClick">
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/users'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  await editCart(form)
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/admin/usersOrder')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + current.p_id.price * current.quantity + current.e_id.price * current.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return (
    cart.length > 0 &&
    !cart.some(product => {
      return !product.p_id.sell
    })
  )
})

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
