<template>
  <div
    class="w-full md:container mx-1 md:mx-auto flex justify-center mt-8 md:mt-14"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="w-full rounded-md md:p-8">
      <form class="w-full" @submit.prevent="sendFeedback">
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
                class="appearance-none block w-full bg-white text-blacky border border-gray-300 md:border-gray-400 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                v-model="form.name"
              />
              <span class="text-deepOrange text-sm">{{
                getError("name")
              }}</span>
            </div>
            <div class="pt-4 pb-2 md:py-[30px] px-4 md:pl-8">
              <label
                class="block uppercase tracking-buttonWide text-blacky text-xs font-bold mb-4"
                for="email"
              >
                Your Email
              </label>
              <input
                v-model="form.email"
                class="appearance-none block w-full bg-white text-blacky border border-gray-300 md:border-gray-400 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <span class="text-deepOrange text-sm">{{
                getError("email")
              }}</span>
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
                v-model="form.message"
                rows="8"
                placeholder="Write your message"
                class="appearance-none block w-full bg-white text-blacky border border-gray-300 md:border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
              </textarea>
              <span class="text-deepOrange text-sm">{{
                getError("message")
              }}</span>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center">
          <AshferButton
            buttonText="send Message"
            type="submit"
            :loading="loading"
          />
        </div>
      </form>
      <div
        v-if="successMessage"
        class="bg-gray-100 shadow-sm text-center text-base sm:text-lg flex w-full h-14 justify-center content-center font-Mplus tracking-widest"
      >
        <span class="py-2 text-green-800 font-semibold" v-if="successMessage"
          >{{ successMessage }}
        </span>
      </div>

      <!-- <div
        class="bg-gray-100 shadow-sm text-center text-base sm:text-lg flex w-full h-14 justify-center content-center font-Mplus tracking-widest"
      >
        <span class="py-2 text-deepOrange font-semibold">
          Ooops! An error occured....try again later.
        </span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import AshferButton from "./ashferButton.vue";
import { useContact } from "@/composables/useContact.js";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});

let { form, loading, sendFeedback, successMessage, getError } = useContact();
</script>

<style lang="scss" scoped></style>
