<template>
  <div id="admin-contect">
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
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-100 focus:ring-pink-300 focus:border-pink-500"
            placeholder="Search for items" />
        </div>
      </div>

      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xl text-white uppercase bg-black">
          <tr>
            <th scope="col" class="px-6 py-3">email</th>
            <th scope="col" class="px-6 py-3">subject</th>
            <th scope="col" class="px-6 py-3">message</th>
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
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="filter-radio-example-1"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500" />
                        <label for="filter-radio-example-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">全部</label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          checked=""
                          id="filter-radio-example-2"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500" />
                        <label for="filter-radio-example-2" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">已回覆</label>
                      </div>
                    </li>
                    <li>
                      <div class="flex items-center p-2 rounded hover:bg-gray-100">
                        <input
                          id="filter-radio-example-3"
                          type="radio"
                          value=""
                          name="filter-radio"
                          class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500" />
                        <label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">未回覆</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contect, idx) in contects" :key="contect._id" class="bg-gray-100 border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ contect.email }}</th>
            <td class="px-6 text-gray-700 py-4">{{ contect.subject }}</td>
            <td class="px-6 text-gray-700 py-4 whitespace-pre">{{ contect.message }}</td>
            <td class="px-6 py-4">
              <div class="flex">
                <div class="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 " />
                  <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">已回覆</label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const contects = reactive([])

;(async () => {
  try {
    const { data } = await apiAuth.get('/contect')
    contects.push(...data.result)
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
