<template>
  <div
    class="w-full md:container mx-auto flex justify-center mt-8 md:mt-14"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="w-full bg-[#D9D9D9] rounded-sm md:p-8">
      <form class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div>
            <div class="pt-10 px-4 md:pl-8">
              <label
                class="block uppercase tracking-buttonWide text-blacky text-xs font-bold mb-4"
                for="name"
              >
                Your Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-blacky border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="pt-4 pb-2 md:py-10 px-4 md:pl-8">
              <label
                class="block uppercase tracking-buttonWide text-blacky text-xs font-bold mb-4"
                for="email"
              >
                Your Email
              </label>
              <input
                class="appearance-none block w-full bg-white text-blacky border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <div class="py-3 md:py-10 px-4 md:pr-8">
              <label
                class="block uppercase tracking-buttonWide text-blacky text-xs font-bold mb-4"
                for="message"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                class="appearance-none block w-full bg-white text-blacky border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
              </textarea>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <AshferButton buttonText="send Message" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import AshferButton from "./ashferButton.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss" scoped></style>
