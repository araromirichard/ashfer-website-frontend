<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="/images/contactHero.jpg"
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
      class="container mx-auto w-full flex-col md:flex-row justify-center py-10 md:py-14 px-8 md:px-0"
    >
      <div class="flex flex-col md:flex-row md:content-center justify-center">
        <div
          class="flex flex-col w-full md:w-1/2 md:h-full md:pt-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            class="font-poppins font-semibold text-xs sm:text-sm md:text-3xl pb-4 md:pb-8"
          >
            Get in Touch with us
          </div>
          <div class="flex flex-row content-center py-4">
            <img
              src="/src/assets/icons/pin.svg"
              alt="icons"
              class="w-5 sm:w-5 md:w-7 mr-3 md:mr-5"
            />
            <div class="flex flex-col">
              <span
                class="font-poppins text-xs sm:text-sm md:text-lg text-black font-bold tracking-buttonWide uppercase"
                >Our Office</span
              >
              <span
                class="font-poppins font-normal text-xs sm:text-sm md:text-lg"
                >No 18, Swaniker street, Abelemkpe, Accra</span
              >
            </div>
          </div>
          <div class="flex flex-row content-center py-4">
            <img
              src="/src/assets/icons/phone.svg"
              alt="icons"
              class="w-5 sm:w-5 md:w-7 mr-3 md:mr-5"
            />
            <div>
              <span
                class="font-poppins text-xs sm:text-sm md:text-lg text-black font-bold tracking-buttonWide uppercase"
                >contact@AshfarGROUP.com</span
              >
            </div>
          </div>
          <div class="flex flex-row content-center py-4">
            <img
              src="/src/assets/icons/envelop.svg"
              alt="icons"
              class="w-4 sm:w-5 md:w-5 mr-3 md:mr-5"
            />
            <div>
              <span
                class="font-poppins text-xs sm:text-sm md:text-lg text-black font-bold tracking-buttonWide"
                >244 78790 6768</span
              >
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full md:w-1/2 px-2 py-6 h-full flex justify-center content-center"
        >
          <iframe
            class="object-cover w-full"
            height="450"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=No%2018,%20Swaniker%20street,%20Abelemkpe,%20Accra%20accra+(Ashfer%20Group)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="px-6 md:px-0 pb-20">
      <div
        class="font-poppins font-semibold text-xs sm:text-sm md:text-3xl pb-4 md:pb-8 px-6 md:px-28"
      >
        Send a Message
      </div>
      <contact-form />
    </div>
  </div>
</template>

<script>
import contactForm from "../../components/includes/contactForm.vue";
import { onMounted } from "vue";
import AOS from "aos";

export default {
  components: { contactForm },
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
<!-- <script
  type="text/javascript"
  src="https://embedmaps.com/google-maps-authorization/script.js?id=aca6b7fc5d32bce15b6e9ca61fc56c44cdb75c41"
></script> -->
<style scoped></style>
