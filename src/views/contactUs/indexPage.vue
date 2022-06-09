<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="../../../public/images/contactHero.jpg"
        alt="our business"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-center sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize"
        >
          contact us
        </div>
      </div>
    </div>
    <div
      class="container mx-auto w-full flex justify-center py-10 md:py-14 px-8 md:px-0"
    >
      <div>
        <div></div>
      </div>
      <div></div>
    </div>

    <contact-form />
  </div>
</template>

<script>
import contactForm from "../../components/includes/contactForm.vue";

export default {
  components: { contactForm },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
