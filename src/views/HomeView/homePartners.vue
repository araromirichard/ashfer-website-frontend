<template>
  <div class="container mx-auto flex flex-col justify-center content-center">
    <div
      class="super__title font-Mplus px-8 text-center pt-20 uppercase text-highlight w-full"
    >
      partners and clients
    </div>
    <div
      class="font-poppins text-secondary font-semibold text-center text-4xl px-8 py-6 sm:py-8 sm:text-center tracking-wider"
    >
      Who we work with
    </div>
    <div class="flex flex-row justify-center content-center">
      <div
        class="font-poppins px-8 py-3 sm:py-4 text-lg font-extrabold text-highlight text-center"
        style="max-width: 558px"
      >
        With just 6 years under our belt, we have worked and partnered with
        organizations around the world to ensure that our goals are met.
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center content-center gap-14 gap-y-6 sm:gap-14 py-6"
    >
      <img
        data-aos="fade-up"
        data-aos-duration="500"
        src="/logos/bui-power.png"
        alt="bui-power"
        class="w-40 h-12 sm:w-48 md:w-[242px] md:h-[66px] hidden md:block"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        src="/logos/bgn.png"
        alt="bgn"
        class="h-12 sm:w-48 md:w-[182px] md:h-[89px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="150"
        src="/logos/volta.png"
        alt="volta"
        class="h-10 sm:w-48 md:w-[250px] md:h-[80px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        src="/logos/phedc.png"
        alt="phedc"
        class="h-10 sm:w-48 md:w-[229px] md:h-[76px]"
      />
    </div>
    <AshferButton
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay="300"
      @click="$router.push({ name: 'our clients' })"
      buttonText="learn more"
      class="flex justify-center"
    />
  </div>
</template>

<script setup>
import AshferButton from "../../components/includes/ashferButton.vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.super__title {
  font-style: normal;
  font-weight: 700;
  font-size: 12.6px;
  line-height: 26px;
  letter-spacing: 6px;
}
</style>
