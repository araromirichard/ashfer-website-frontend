<template>
  <div class="grid md:grid-cols-2 w-full h-full md:h-4/5 justify-center">
    <div class="flex flex-row justify-center h-full">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="flex flex-col justify-center content-start px-8 md:w-3/5 text-left"
      >
        <span class="super__title font-Mplus pt-20">ABOUT US</span>
        <span class="main__title font-poppins pt-5">Who we are</span>
        <span class="sub__title-one font-poppins font-bold pt-4">
          We are a diversified enterprise with footprints in West Africa, East
          Africa and Southern Africa.
        </span>
        <span class="sub__title-one pt-4 text-left">
          Our business interest cuts across various sectors of the economy and
          we are dedicated to meeting the needs of our customers and the
          communities where our businesses operate.
        </span>
        <!-- ashfer button -->
        <AshferButton
          @click="$router.push({ name: 'about' })"
          button-text="learn more"
        />
      </div>
    </div>
    <div
      class="px-8 py-10 md:px-0 bg-cover w-full h-full"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="1000"
    >
      <img
        src="/images/about-sect.jpg"
        alt="about-sect"
        class="w-full object-cover h-full"
      />
    </div>
  </div>
</template>

<script setup>
import AshferButton from "../../components/includes/ashferButton.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.super__title {
  font-style: normal;
  font-weight: 800;
  font-size: 12.6px;
  line-height: 26px;
  letter-spacing: 6px;
  text-transform: uppercase;

  color: #0d004c;
}
.main__title {
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 68px;
  color: #30233d;
}

.sub__title-one {
  font-style: normal;
  font-size: 18px;
  line-height: 163.35%;
  color: #776c82;
}
</style>
