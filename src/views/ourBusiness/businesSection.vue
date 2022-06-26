<template>
  <div
    class="service__card container mx-auto h-[400px] sm:h-[500px] md:h-[860px] px-8 md:px-0"
  >
    <img
      :src="src"
      alt="cardImage"
      class="relative w-full h-full object-cover"
    />
    <div class="text-white absolute bottom-4 px-8 flex flex-col">
      <span
        class="font-poppins font-extrabold text-card md:text-5xl capitalize"
        >{{ cardName }}</span
      >
      <span
        class="text-xs md:text-sm tracking-buttonWide font-Mplus font-medium uppercase"
        >{{ subTitle }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.service__card {
  position: relative;
  /* height: 350px; */
  background-color: white;
}
</style>
