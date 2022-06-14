<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="/images/partnerHero.jpg"
        alt="our business"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-center sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize"
        >
          our clients and partners
        </div>
      </div>
    </div>
    <div
      class="container mx-auto w-full flex justify-center py-10 md:py-14 px-8 md:px-0"
    >
      <div
        class="w-full md:w-2/4 text-center font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          With just 6 years under our belt, we have worked and partnered with
          several organizations and indviduals locally and internationally in
          ensuring that their business objectives are met.
        </p>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-start md:justify-center container mx-auto content-center gap-6 gap-y-6 sm:gap-14 px-7 md:px-0 pt-8 pb-14"
    >
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        src="/logos/volta.png"
        alt="volta"
        class="w-40 h-14 sm:w-48 md:w-[250px] md:h-[80px]"
      />
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        data-aos-delay="500"
        src="/logos/bgn.png"
        alt="bgn"
        class="w-40 h-16 sm:w-48 md:w-[182px] md:h-[89px]"
      />
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        data-aos-delay="650"
        src="/logos/alstom.png"
        alt="alstom"
        class="w-40 sm:w-48 md:w-[240px] md:h-[66px]"
      />
      <img
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
        data-aos-delay="800"
        src="/logos/presidencylogo.png"
        alt="presidency"
        class="w-48 sm:52 md:w-[306px] md:h-[63px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        src="/logos/time-elect.png"
        alt="time eletronics logo"
        class="w-48 md:w-[256px] md:h-[72px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="550"
        src="/logos/ghana-elect.png"
        alt="Ghana elect"
        class="w-40 sm:w-48 md:w-[214px] md:h-[77px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
        src="/logos/lusaka.png"
        alt="lusaka"
        class="w-52 sm:w-52 md:w-[298px] md:h-[52px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="650"
        src="/logos/bui-power.png"
        alt="bui-power"
        class="w-40 sm:w-48 md:w-[242px] md:h-[66px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
        src="/logos/bost.png"
        alt="bost"
        class="w-48 h-16 sm:w-52 md:w-[233px] md:h-[54px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="750"
        src="/logos/phedc.png"
        alt="phedc"
        class="w-40 sm:w-48 md:w-[229px] md:h-[76px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        src="/logos/Zen-Sterling.png"
        alt="zen"
        class="w-48 h-10 md:w-[237px] md:h-[57px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="850"
        src="/logos/anser.png"
        alt="anser"
        class="w-38 h-16 sm:w-48 md:w-[180px] md:h-[74px]"
      />
      <img
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="900"
        src="/logos/Rural-Electrification-Agency-REA.png"
        alt="REA"
        class="w-40 md:w-[187px] md:h-[113px]"
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
<style scoped></style>
