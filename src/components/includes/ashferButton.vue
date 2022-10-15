<template>
  <div class="my-4 py-4">
    <button
      :type="type"
      @click="$emit('click')"
      class="rounded-3xl uppercase text-xs hover:bg-primary hover:text-white py-2 px-4 md:py-3 md:px-6 text-primary font-normal font-Mplus tracking-buttonWide border-2 border-primary duration-300"
    >
      <span v-if="loading">loading...</span>
      <span v-else> {{ buttonText }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "button",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
