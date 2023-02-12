<template>
  <div id="rentalView" class="px-4 py-4">
    <div id="rentalintro" class="px-4 pb-4">
      <h1 class="text-3xl pb-8 text-center">AZ文創園區 【場地租借辦法】</h1>
      <div class="flex flex-wrap">
        <p class="w-full lg:w-1/2 pb-8 px-4">
          一、宗旨
          <br />
          <br />
          由台灣文創發展股份有限公司所經營之AZ文化創意產業園區（以下稱本園區），為促進台灣文創產業發展，鼓勵各類文化創意發想及跨界藝文創作展演活動，受理本園區檔期申請及審查，特訂定此要點。
        </p>
        <p class="w-full lg:w-1/2 pb-8 px-4">
          二、申請資格
          <br />
          <br />
          團體：法人、政府機關、一般公司企業等。
          <br />
          個人：年滿二十歲之中華民國國民，或在台領有證件之外國人。
        </p>
      </div>
      <div>
        <p class="py-3 text-xs lg:text-lg">【一般場館】</p>

        <div class="relative overflow-x-auto pb-3">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs lg:text-lg text-gray-700 uppercase bg-pink-50">
              <tr>
                <th scope="col" class="px-6 py-3">場館名稱</th>
                <th scope="col" class="px-6 py-3">總坪數</th>
                <th scope="col" class="px-6 py-3">活動日場租(含稅)</th>
                <th scope="col" class="px-6 py-3">進撤場日場租(含稅)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rental in rentals" :key="rental._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 lg:text-base">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ rental.name }}</th>
                <td class="px-6 py-4">{{ rental.size }}</td>
                <td class="px-6 py-4">NT$ {{ rental.price }}</td>
                <td class="px-6 py-4">NT$ {{ rental.price / 2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="rentalform" class="px-4 py-4">
      <p class="pb-8 px-4 text-base">
        三、場地申請
        <br />
        <br />
        若要申請，請填寫以下表單。
        <br />
        工作日為3-5個工作天(不包含假日)
        <br />
        會有專人與您聯繫‧
      </p>
      <div id="rentalForm" class="flex rounded-lg border-[1px] border-gray-100 shadow">
        <div class="w-1/2">
          <img class="hidden h-full object-cover lg:block rounded-l-lg" src="../../assets/image/b01.jpg" />
        </div>
        <div class="flex-col py-4 px-4 relative justify-center items-center w-full">
          <h1 class="text-center text-2xl py-4 px-4">AZ.ゼロ 場地申請表</h1>
          <form class="space-y-6 py-4 px-8">
            <fieldset v-if="step === 1">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -活動名稱 -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請人 ：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">填表日期（例 2023-01-03)：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- <div class="sm:col-span-2"> -->
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請單位：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡電話 ：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡信箱 ：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">聯絡地址：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
              </div>
              <div class="flex justify-center py-4">
                <button
                  type="button"
                  class="next action-button inline-flex items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 2">
                  下一步
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
            <fieldset v-if="step === 2">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div>聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -單位類別 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">單位類別：</label>
                  <select
                    id="countries"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500">
                    <option>一般團體</option>
                    <option>藝文團體</option>
                  </select>
                </div>
                <!-- -統一編號 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">統一編號 / 立案字號：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- -申請場地 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">申請場地：</label>
                  <select
                    id="countries"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500">
                    <option>AZ劇場</option>
                    <option>玻璃貨櫃屋（2層樓）</option>
                    <option>展覽會場</option>
                  </select>
                </div>
                <!-- -活動性質 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動性質：</label>
                  <select
                    id="countries"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500">
                    <option>座談會/研討會/研習/講座/論壇</option>
                    <option>記者會/發表會</option>
                    <option>同人/社團活動</option>
                    <option>藝術/文化展演活動</option>
                    <option>消費者體驗活動</option>
                    <option>演唱會/簽名會</option>
                    <option>個展/畢展</option>
                    <option>影片/平面拍攝</option>
                    <option>園遊會/家庭日/市集</option>
                    <option>其他</option>
                  </select>
                </div>
                <!-- -參觀性質 -->
                <div class="w-full">
                  <label for="category" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">參觀性質：</label>
                  <select
                    id="countries"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500">
                    <option>不開放</option>
                    <option>自由入場</option>
                    <option>索票/邀請函</option>
                    <option>售票</option>
                    <option>其他</option>
                  </select>
                </div>
                <div class="w-full">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動日期（例 2023-01-03 ～ 2023-01-10)：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
              </div>
              <div class="flex justify-center py-4">
                <button
                  type="button"
                  class="previous action-button inline-flex items-center px-3 mr-2 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 1">
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  上一步
                </button>
                <button
                  type="button"
                  class="next action-button inline-flex ml-2 items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink"
                  @click="step = 3">
                  下一步
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
            <fieldset v-if="step === 3">
              <div class="flex justify-around items-center text-xl rounded-xl px-4 pb-6">
                <div>聯絡資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div>場地資訊</div>
                <svg
                  class="w-6 h-6transition duration-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
                <div class="text-pinkP px-4 py-2 border-b-2 border-pinkP">活動規劃</div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <!-- -活動名稱 -->
                <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動名稱：</label>
                  <input
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" />
                </div>
                <!-- -活動內容 -->
                <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">活動內容：</label>
                  <textarea
                    id="description"
                    rows="8"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-lightpink sm:text-md focus:ring-pink-500 focus:border-pink-500" 
                    placeholder="Your description here"></textarea>
                </div>
                
              </div>
              <div class="flex justify-center py-4">
                <button
                  @click="step = 2"
                  type="button"
                  class="previous action-button inline-flex items-center px-3 mr-2 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink">
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  上一步
                </button>
                <button
                  type="submit"
                  class="submit action-button inline-flex ml-2 items-center px-3 py-2 my-2 text-sm font-medium text-center text-white bg-pinkP rounded-lg hover:text-black hover:bg-lightpink focus:ring-4 focus:outline-none focus:ring-lightpink">
                  送出
                  <svg
                    class="w-6 h-6transition duration-75"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import Input from '../../components/TheInput.vue'

const step = ref(1)
const rentals = reactive([])
;(async () => {
  try {
    // !資料要解構 data:新名字
    const { data } = await api.get('/rentals')
    rentals.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    console.log(error)
  }
})()
</script>
