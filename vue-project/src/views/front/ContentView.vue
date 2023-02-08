<template>
  <section id="content">
    <div class="row">
      <div class="col">
        <div class="pt-10 flex flex-col mx-auto items-center rounded-lg md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-97 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="./image/36bc97eaa99c60d4b9089f10176a59f0.jpg"
            alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">聯絡AZ.ゼロ</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              若有任何問題，請隨時與我們聯繫。
              <br />
              訂單客服 AZ@onelittleday.com.tw
              <br />
              雜誌訂閱 az.zero229@gmail.com
              <br />
              行銷合作 az.zero@gmail.com
              <br />
              電商行銷、產品業務 02-1234-1200#103
              <br />
              電話 02-1234-1200
              <br />
              傳真 02-1234-1300
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
          Got a promble ? Want to send feedback to us ? Need details about our rental information ? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
            Send message
          </button>
        </form>
      </div>
    </section>
  </section>
</template>
<script setup>

</script>