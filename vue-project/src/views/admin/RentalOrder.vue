<template>
  <div id="RenatlOrder" class="pt-[70px]">
    <div class="relative overflow-x-auto sm:rounded-lg">
      <!-- !search -->
      <div class="px-4 py-4 bg-black">
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
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xl text-white uppercase bg-black">
          <tr>
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">email</th>
            <th scope="col" class="px-6 py-3">rental</th>
            <th scope="col" class="px-6 py-3">more</th>
            <th scope="col" class="px-6 py-3 flex">
              <p class="px-3 py-1.5">action</p>
              <!-- -filter -->
              <div>
                <button
                  id="dropdownRadioButton"
                  data-dropdown-toggle="dropdownRadio"
                  class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
                  type="button">
                  <svg class="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Filter
                  <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownRadio"
                  class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
                  data-popper-reference-hidden=""
                  data-popper-escaped=""
                  data-popper-placement="top"
                  style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px)">
                  <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li v-for="(buttonCategorie, index) in buttonCategories">
                      <div class="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          :id="'filter-radio-example-' + index"
                          type="radio"
                          :class="{ 'text-white bg-black': filterMain === buttonCategorie }"
                          v-model="filterMain"
                          :value="buttonCategorie"
                          name="filter-radio"
                          class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500" />
                        <label :for="'filter-radio-example-' + index" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">{{ buttonCategorie }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rentalform, index) in showPageData" :key="rentalform._id" class="bg-gray-100 border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ rentalform.name }}</th>
            <td class="px-6 text-gray-700 py-4">{{ rentalform.email }}</td>
            <td class="px-6 text-gray-700 py-4 whitespace-pre">{{ rentalform.rental }}</td>
            <td class="px-6 text-gray-700 py-4 whitespace-pre">
              <button
                type="button"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueB rounded-lg border-[1px] border-blueB hover:text-blueB hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300"
                @click="addBtn(form)">
                看完整資料
              </button>

            </td>
            <td class="px-6 py-4">
              <div class="flex">
                <div class="flex items-center mb-4">
                  <ul>
                    <li>
                      <input
                        @input="check(rentalform._id)"
                        class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
                        type="checkbox"
                        :id="'checkbox' + index"
                        :checked="rentalform.checked" />
                      <label :for="'checkbox' + index">已回覆</label>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
  </div>
</template>
<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, computed, ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { Modal } from 'flowbite'

const rentalforms = reactive([])

// !ref 不會深層監聽
// !reactive 會深層監聽， reactive 只接受 Object 跟 Array

const addBtn = () => {
  modal.show()
}
let modal = null
onMounted(() => {
  modal = new Modal(document.getElementById('orderform'))
})
// -搜尋
const searchValue = ref('')

// -分頁
const limit = 5
// -ref要加value
const currentPage = ref(1)

// -篩選
const filterMain = ref('全部')

const buttonCategories = ['全部', '已回覆', '未回覆']

const filterData = computed(() => {
  return rentalforms.filter(item => {
    const includes = item.rental.includes(searchValue.value)
    return filterMain.value === '全部' ? includes : filterMain.value === '已回覆' ? includes && item.checked : includes && !item.checked
  })
})

const totalPage = computed(() => {
  return Math.ceil(filterData.value.length / limit)
})

const showPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * limit
  const endIndex = currentPage.value * limit

  return filterData.value.slice(startIndex, endIndex)
})

const check = async id => {
  const idx = rentalforms.findIndex(rentalform => rentalform._id === id)
  try {
    await apiAuth.patch('/rentalorders/' + id, { checked: !rentalforms[idx].checked })
    rentalforms[idx].checked = !rentalforms[idx].checked
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}
;(async () => {
  try {
    const { data } = await apiAuth.get('/rentalorders')
    rentalforms.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
