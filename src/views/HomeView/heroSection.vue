<template>
  <div class="relative z-0 hero-height">
    <img
      src="/images/heroHome.jpg"
      alt="hero"
      class="block w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-deepOrange opacity-60"
    ></div>
    <div class="absolute inset-0 text-white px-4 md:px-0">
      <div
        class="container mx-auto h-full w-full flex flex-row md:justify-around"
      >
        <div class="flex flex-col justify-center pl-2 md:px-0">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="500"
            class="super__title pb-4 md:pb-0 text-white invisible md:visible"
          >
            WE ARE ASHFAR
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="600"
            class="title pt-1 pb-1.5 md:pt-12 md:pb-0"
          >
            Ashfar,
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="700"
            class="title pb-2 md:py-3"
          >
            Empowering Nations
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1000"
            class="sub__title pt-6 md:pt-4 w-full md:w-[600px]"
          >
            Power | Haulage | Construction | Oil and Gas | Manufacturing
          </div>
        </div>
        <div
          class="flex flex-row mx-auto content-center items-start invisible md:visible md:rotate-90"
        >
          <p
            class="font-Mplus text-xs md:text-lg font-medium tracking-widest uppercase"
          >
            Scroll to see more
          </p>

          <div class="-rotate-90 animate-pulse md:pl-16">
            <img
              src="../../assets/icons/see_more.png"
              alt="see_more"
              class="py-0 px-10 animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.super__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 4px;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;
}
.sub__title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 2px;
}
/* .scroll__text {
  font-family: "Mplus 1p";
  font-style: normal;
  font-weight: 800;
  font-size: 12.6px;
  line-height: 26px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #fcfcfc;
} */

/* media queries for devices */

@screen sm {
  .super__title {
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 4px;
  }
  .title {
    font-size: 34px;
    line-height: 48px;
  }
  .sub__title {
    font-size: 18px;
    line-height: 24px;
  }
}
@screen md {
  .super__title {
    font-size: 20px;
    line-height: 48px;
    letter-spacing: 4px;
  }
  .title {
    font-size: 68px;
    line-height: 74px;
    font-weight: 800;
  }
  .sub__title {
    font-size: 32px;
    line-height: 48px;
  }
}
</style>
