<template>
  <div class="w-full h-full justify-center md:justify-start bg-secondary">
    <div class="flex flex-row container mx-auto h-full">
      <div
        class="flex flex-col justify-center content-start px-8 md:w-3/5 text-left"
      >
        <div class="super__title font-Mplus pt-20 uppercase text-ashfarWhite">
          our business
        </div>
        <div class="main__title font-poppins pt-5 text-primary">What we do</div>
        <div
          class="sub__title-one font-poppins font-bold pt-4 text-ashfarWhite text-left"
        >
          We offer services in
          <span class="text-orange"
            >Power, Oil and Gas, Haulage, Construction</span
          >
          and <span class="text-orange">Manufacturing</span> sectors.
        </div>
        <div class="sub__title-one pt-4 text-ashfarWhite text-left">
          <p class="pt-4">
            Ashfar is committed to consistent provision of services that meet
            and/or exceed our customer expectations.
          </p>
          <br />

          <span>
            To realize this objective, the organization is committed to
            complying with, implementing, and maintaining the highest quality
            standards.
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 py-16 sm:pt-20 sm:pb-40 px-8 sm:px-16 bg-secondary h-full w-full"
  >
    <router-link :to="{ name: 'our-business', hash: '#power' }">
      <ServicesCard
        data-aos="fade-up"
        data-aos-duration="500"
        cardName="power"
        src="/images/POWER.jpg"
      />
    </router-link>
    <router-link :to="{ name: 'our-business', hash: '#oil' }">
      <ServicesCard
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        cardName="Oil and gas"
        src="/images/OIL-AND-GAS.jpg"
      />
    </router-link>
    <router-link :to="{ name: 'our-business', hash: '#haulage' }">
      <ServicesCard
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="350"
        cardName="haulage"
        src="/images/HAULAGE.jpg"
      />
    </router-link>
    <router-link :to="{ name: 'our-business', hash: '#construct' }">
      <ServicesCard
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="400"
        cardName="construction"
        src="/images/OUR-BUSINESS.jpg"
      />
    </router-link>
    <router-link :to="{ name: 'our-business', hash: '#manufacture' }">
      <ServicesCard
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="450"
        cardName="manufacturing"
        src="/images/MANUFACTURING.jpg"
      />
    </router-link>
  </div>
</template>

<script setup>
import ServicesCard from "./servicesCard.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.super__title {
  font-style: normal;
  font-weight: 700;
  font-size: 12.6px;
  line-height: 26px;
}
.main__title {
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 68px;
}

.sub__title-one {
  font-style: normal;
  font-size: 18px;
  line-height: 163.35%;
}
</style>
