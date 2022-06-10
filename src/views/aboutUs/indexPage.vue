<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="../../../images/aboutHero.jpg"
        alt="our business"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-center sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize"
        >
          who we are
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      class="container mx-auto w-full flex flex-col justify-center py-10 md:py-14 px-8 md:px-0"
    >
      <div
        class="text-primary font-Mplus text-sm md:text-base font-medium tracking-buttonWide uppercase w-full pt-10 md:pt-20"
      >
        who we are
      </div>
      <div
        class="w-full md:w-2/3 font-semibold text-lg md:text-2xl font-poppins text-left text-blacky py-4 md:pt-5 md:pb-5"
      >
        We are a diversified enterprise with footprints in West Africa, East
        Africa and Southern Africa.
      </div>
      <div
        class="flex flex-col md:flex-row md:gap-28 text-left md:text-justify md:pt-6"
      >
        <div class="text-blacky font-poppins font-normal text-lg">
          <p>
            Our business interest cuts across various sectors of the economy and
            we are dedicated to meeting the needs of our customers and the
            communities where our businesses operate. At ASHFAR, we skillfully
            combine diversity, talent, and responsible leadership to ensure that
            our dealings at all levels are guided by the principles of
            integrity, accountability and transparency.
          </p>

          <p class="font-bold font-poppins pt-6 md:pt-10">Our People</p>
          <p>
            ASHFAR leverages on a network of high-profile professionals with
            experience in various sectors of the economy.
          </p>
        </div>
        <div class="text-blacky font-poppins font-normal text-lg">
          <p>
            We believe that our people are our biggest investment hence we
            consistently search for ways to intensify our talent pool. Our
            objective is to drive performance, create motivation, realize the
            optimal potential and enhance personal development.
          </p>
          <p>
            Hence, we invest in talent development and provide skills and
            opportunities to enable our people to grow. Most importantly, we
            create an enabling environment for our staff to realize their
            professional aspirations and be part of a local enterprise with a
            global outlook.
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[350px] bg-secondary inset-0 flex flex-col justify-center"
    >
      <div class="container mx-auto px-10 md:px-0">
        <p class="text-primary text-lg md:text-4xl font-semibold font-poppins">
          Our Vision, Mission & <br />
          Core Values
        </p>
      </div>
    </div>
    <OurValues />
  </div>
</template>

<script>
import OurValues from "./ourValues.vue";
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
  components: { OurValues },
};
</script>

<style scoped></style>
