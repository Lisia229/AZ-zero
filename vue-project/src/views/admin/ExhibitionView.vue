<template>
  <div id="admin-exhibition">
    <div class="flex">
      <div class="px-4 py-4">
        <button
          type="button"
          class="text-white bg-blueB hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          @click="addBtn(form)">
          新增展覽
        </button>
      </div>
      <!-- !search -->
      <div class="px-4 py-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            v-model="searchValue"
            @change="currentPage = 1"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-100 focus:ring-pink-300 focus:border-pink-500"
            placeholder="Search" />
        </div>
      </div>
    </div>
    <section id="addExhibition" class="bg-white z-50 hidden rounded-xl border-2 border-black absolute">
      <div id="exhibitionform" class="relative rounded-xl">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            @click="cancel(form)"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="addExhibition">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new Exhibition</h2>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exhibition Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Exhibition name" />
                </div>
                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">place</label>
                  <Input
                    v-model="form.place"
                    :select="place"
                    title="choose place"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="place" />
                </div>
                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">sell(TRUE / FALSE)</label>
                  <input
                    v-model="form.sell"
                    type="text"
                    name="place"
                    id="place"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input
                    v-model="form.price"
                    type="number"
                    name="price"
                    id="price"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999" />
                </div>

                <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <Input
                    v-model="form.category"
                    :select="categories"
                    title="choose category"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="categories" />
                </div>

                <!-- -date -->

                <div class="sm:col-span-2">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <vue-tailwind-datepicker data-form-type="range" placeholder="YYYY-MM-DD ~ YYYY-MM-DD" v-model="form.dateValue" />
                </div>

                <!-- <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">time</label>
                  <input
                    v-model="form.time"
                    type="text"
                    name="place"
                    id="place"
                    placeholder="10:00 - 16:00"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div> -->

                <!-- -Description -->
                <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea
                    v-model="form.description"
                    id="description"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"></textarea>
                </div>
                <div class="sm:col-span-2">
                  <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">upload image</label>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadImage v-model="form.image" id="dropzone-file" />
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                          or drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-middle">
                <div class="col">
                  <button
                    type="button"
                    data-modal-hide="addExhibition"
                    @click="cancel(form)"
                    class="inline-flex border-[1px] border-pinkP shadow bg-pinkP text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-white hover:text-pinkP hover:border-[1px] hover:border-pinkP">
                    cancel
                  </button>
                  <button
                    type="submit"
                    data-modal-hide="addExhibition"
                    class="inline-flex shadow bg-blueB text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 border-[1px] border-blueB hover:bg-white hover:text-blueB hover:border-[1px] hover:border-blueB">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div id="exhibition-list" class="grid mb-8 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
      <div
        id="card"
        v-for="(exhibition, index) in showPageData"
        :key="exhibition._id"
        class="flex flex-col items-center justify-center p-8 text-center bg-whiteF rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg h-60" :src="exhibition.image" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ exhibition.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ exhibition.dateValue }}
            </p>
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="editBtn(exhibition)">
              編輯
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav class="grid items-center justify-center px-4 py-4 mx-auto" aria-label="Pagenavigationexample">
      <ul class="mx-auto inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            aria-current="page"
            class="block px-3 py-2 ml-0 leading-tight text-gray-500 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
        <li v-for="page in totalPage" @click="currentPage = page">
          <p
            :class="{ 'text-white bg-pinkP': currentPage === page }"
            class="z-10 px-3 py-2 leading-tight hover:bg-pinkP hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            {{ page }}
          </p>
        </li>
        <li>
          <a
            href="#"
            class="block px-3 py-2 leading-tight text-gray-500 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, computed, ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import UploadImage from '../../components/UploadImage.vue'
import Input from '../../components/TheInput.vue'
import { Modal } from 'flowbite'

import VueTailwindDatepicker from 'vue-tailwind-datepicker'

const categories = ['期間限定店', '市集活動', '論壇演講', '展演活動', '其他']
const place = ['玻璃貨櫃屋(2層樓)', 'AZ劇場', '展覽會館', '其他']

const exhibitions = reactive([])

// -搜尋
const searchValue = ref('')

// -分頁
const limit = 6
// -ref要加value
const totalPage = ref(1)
const currentPage = ref(1)

// -篩選
const filterMain = ref('全部')

const filterData = computed(() => {
  const isSearch = searchValue.value !== ''
  if (isSearch) {
    filterMain.value === '全部'
  }

  const exhibitionsList = exhibitions.filter(item => {
    if (isSearch) {
      return item.name.includes(searchValue.value)
    } else {
      if (filterMain.value === '全部') return item
      return item.category === filterMain.value
    }
  })
  totalPage.value = Math.ceil(exhibitionsList.length / limit)
  return exhibitionsList
})

const showPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * limit
  const endIndex = currentPage.value * limit

  return filterData.value.slice(startIndex, endIndex)
})

let modal = null

onMounted(() => {
  modal = new Modal(document.getElementById('addExhibition'))
})

const addBtn = () => {
  modal.show()
}

// 抓取表單物件
const form = reactive({
  _id: '',
  name: '',
  place: '',
  price: 0,
  time: '',
  dateValue: '',
  description: '',
  image: undefined,
  sell: true,
  category: '',
  valid: false
})

// !編輯商品
const editBtn = data => {
  console.log(data)
  form._id = data._id
  form.name = data.name
  form.place = data.place
  form.price = data.price
  form.time = data.time
  form.dateValue = data.dateValue
  form.description = data.description
  form.image = data.image
  form.sell = data.sell
  form.category = data.category
  form.valid = data.valid
  modal.show()
}

// -取消
const cancel = () => {
  form._id = ''
  form.name = ''
  form.place = ''
  form.price = 0
  form.dateValue = ''
  form.description = ''
  form.image = ''
  form.sell = false
  form.category = ''
  form.time = ''
  form.valid = false
  form.idx = -1
  modal.hide()
}

const submit = async () => {
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('dateValue', form.dateValue)
  fd.append('time', form.time)
  fd.append('place', form.place)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/exhibitions', fd)
      exhibitions.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/exhibitions/' + form._id, fd)
      exhibitions[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  // -送出後清空
  form._id = ''
  form.name = ''
  form.place = ''
  form.price = 0
  form.dateValue = ''
  form.description = ''
  form.image = ''
  form.sell = false
  form.category = ''
  form.time = ''
  form.valid = false
  form.idx = -1

  modal.hide()
}

;(async () => {
  try {
    const { data } = await apiAuth.get('/exhibitions/all')
    exhibitions.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
