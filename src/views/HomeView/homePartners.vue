<template>
  <div class="container mx-auto flex flex-col justify-center content-center">
    <div
      class="super__title font-Mplus px-8 text-center pt-20 uppercase text-primary w-full"
    >
      partners and clients
    </div>
    <div
      class="font-poppins font-semibold text-center text-4xl px-8 py-6 sm:py-8 sm:text-center tracking-wider"
    >
      Who we work with
    </div>
    <div class="flex flex-row justify-center content-center">
      <div
        class="font-poppins px-8 py-3 sm:py-4 text-lg font-extrabold text-highlight text-center"
        style="max-width: 558px"
      >
        With just 6 years under our belt, we have worked and partnered with
        several organizations and indviduals locally and internationally in
        ensuring that their business objectives are met.
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center content-center gap-1 gap-y-4 sm:gap-14 py-6"
    >
      <img src="../../../logos/bui-power.png" alt="bui-power" />
      <img src="../../../logos/bgn.png" alt="bgn" />
      <img src="../../../logos/volta.png" alt="volta" />
      <img src="../../../logos/phedc.png" alt="phedc" />
    </div>
    <AshferButton buttonText="learn more" class="flex justify-center"/>
  </div>
</template>

<script>
import AshferButton from "../../components/includes/ashferButton.vue";
export default {
  setup() {
    return {};
  },
  components: { AshferButton },
};
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
