<template>
  <div class="service__card w-full">
    <img
      :src="src"
      alt="cardImage"
      class="relative w-full h-full object-cover"
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
