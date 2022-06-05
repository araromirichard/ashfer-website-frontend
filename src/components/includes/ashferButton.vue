<template>
  <div class="my-4 py-4">
    <button
      class="rounded-3xl uppercase text-xs hover:bg-primary hover:text-white py-3 px-6 text-primary font-normal font-Mplus tracking-buttonWide border-2 border-primary duration-300"
    >
      {{ buttonText }}
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
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
