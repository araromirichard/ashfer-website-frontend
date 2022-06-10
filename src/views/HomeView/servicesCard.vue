<template>
  <div
    class="relative service__card w-full grayscale-0 md:grayscale hover:md:grayscale-0"
  >
    <img
      :src="src"
      alt="cardImage"
      class="absolute w-full h-full object-cover scale-100 hover:scale-110 duration-300"
    />
    <div
      class="text-white absolute bottom-4 px-8 text-card font-extrabold capitalize"
    >
      {{ cardName }}
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
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.service__card {
  position: relative;
  height: 350px;
  background-color: white;
}
</style>
