<template>
  <div
    class="flex flex-col md:flex-row w-full sm:h-full md:h-[600px] justify-center content-center"
  >
    <div
      class="md:basis-4/5 bg-primary flex justify-center content-center px-4 md:pl-20"
    >
      <div
        class="px-8 py-10 text-white"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div
          class="flex flex-col md:flex-row md:gap-32 pt-4 pb-3 md:pt-8 md:pb-4 text-left"
        >
          <div class="text-base md:text-2xl font-semibold capitalize">
            Our Vision
          </div>
          <div class="w-full md:w-4/6 text-left text-base md:text-lg">
            Our Vision is to create a diversified business portfolio that is
            recognized regionally and globally for its drive towards sustainable
            development.
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-28 md:py-4 py-6 text-left">
          <div class="text-base md:text-2xl font-semibold capitalize">
            Our Mission
          </div>
          <div
            class="w-full md:w-3/5 text-left md:text-justify text-base md:text-lg"
          >
            We care about the environment where we operate and as such we are
            concerned about the sustainability of our surroundings. Our mission
            is to provide services that are ecologically sustainable and create
            value for future generations
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-20 text-left">
          <div class="text-base md:text-2xl font-semibold capitalize">
            Our core Value
          </div>
          <div
            class="w-full md:w-3/5 text-left md:text-justify text-base md:text-lg"
          >
            At ASHFAR, we are committed to promoting the following values:
            <ol class="list-decimal pl-4 capitalize">
              <li>Discipline</li>
              <li>responsibility</li>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>value people</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="md:basis-2/5 w-full h-full hidden md:block">
      <img
        src="/images/ourValues.jpg"
        alt="a pocket watch"
        class="object-cover w-full h-[340px] md:h-full"
      />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
export default {
  setup() {
    onMounted(() => {
      AOS.init();
    });
    return {
      onMounted,
    };
  },
};
</script>

<style lang="scss" scoped></style>
