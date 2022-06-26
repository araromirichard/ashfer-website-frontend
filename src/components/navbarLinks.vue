<template>
  <div>
    <router-link
      class="block sm:inline-block px-6 font-poppins sm:text-xs md:text-lg sm:uppercase sm:px-0 py-3 tracking-buttonWide hover:text-primary sm:hover:text-blacky sm:hover:py-0 sm:hover:border-b-4 sm:hover:border-primary transition-colors duration-300"
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

<style scoped>
.ashfer-active-link {
  color: #f15a29;
  /* background-color: #555c75; */
}

@media only screen and (min-width: 768px) {
  .ashfer-active-link {
    border-bottom: 4px solid #f15a29;
    padding-bottom: 0px;
    padding-top: 0px;
  }
}
</style>
