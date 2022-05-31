<template>
  <div>
    <router-link
      class="block sm:inline-block px-6 sm:uppercase sm:px-0 py-3 hover:text-primary sm:hover:py-0 sm:hover:border-b-4 sm:hover:border-primary transition-colors duration-300"
      :to="to"
    >
      {{ label }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
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
