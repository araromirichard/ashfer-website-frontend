<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="/images/Photo.jpg"
        alt="our business"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-center sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize"
        >
          our business
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
          Ashfar is committed to consistent provision of services that meet and
          exceed our customers expectations. We aim to achieve this through
          proactive innovation and research-based technology as well as
          partnering with world-renowned service providers.
        </p>
        <p>
          Our diversified services ranges from Power Generation & Distribution,
          Manufacturing, Oil and Gas, Haulage and Construction.
        </p>
      </div>
    </div>
    <div id="power" data-aos="fade-up" data-aos-duration="500">
      <BusinesSection
        cardName="power"
        subTitle="generation & distribution"
        src="/images/power-1.jpg"
      />
      <div
        class="container mx-auto px-8 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          Across Africa, there is a desperate need for power. To combat this
          issue, countries across the continent are partnering with Independent
          Power Producers (IPP) to produce power to make up for energy
          shortfall.
        </p>
        <p>
          At ASHFAR , we have made it our goal to be at the forefront of
          generating electricity using renewable sources. We are investing in
          technologies that make renewable energy more affordable and
          accessible. We have set high targets to maximize the use of the
          abundant sunlight by deploying the latest in solar power generation
          technology.
        </p>
        <p>
          We also emphasize on the use of advanced Battery Energy Storage
          Systems (BESS) that facilitate a 24-hour cycle in solar power
          generation. To enhance our sustainability drive across the power
          value-chain, we also work with utility and industry customers to
          improve their performance while lowering environmental impact.
        </p>
        <p>
          We build high voltage, medium voltage and low voltage power
          substations and we enlists Original Equipment Manufacturers such as
          ABB, SIEMENS and Emerson for our procurement needs.
        </p>
      </div>
    </div>
    <div id="haulage" data-aos="fade-up" data-aos-duration="500">
      <BusinesSection
        cardName="haulage"
        subTitle="Nationwide coverage"
        src="/images/HAULAGE-3.jpg"
      />
      <div
        class="container mx-auto px-8 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          Ashar proudly offers a wide array of logistics solutions. We offer
          bespoke haulage services at competitive rates. We are the partner you
          can trust to move goods by road, sea and air.
        </p>
        <p>
          You can trust us to pick up, transport and deliver goods intact and
          on-time, everytime. With a hand-picked network of partners globally,
          your goods are transported with the utmost care every step of the way.
        </p>
      </div>
    </div>
    <div id="construct" data-aos="fade-up" data-aos-duration="500">
      <BusinesSection
        cardName="construction"
        subTitle="building the future"
        src="/images/CONSTRUCTION-1.jpg"
      />
      <div
        class="container mx-auto px-8 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          We provide complete construction solutions. The majority of our
          contracts are 'design & build' projects. We are involved in each stage
          of the project from architectural design, planning, approval and
          construction.
        </p>
        <p>
          We also provide building maintenance and facility management
          solutions.
        </p>
      </div>
    </div>
    <div id="oil" data-aos="fade-up" data-aos-duration="500">
      <BusinesSection
        cardName="oli and gas"
        subTitle="retail and bulk petroleum products"
        src="/images/OIL-&-GAS-1.jpg"
      />
      <div
        class="container mx-auto px-8 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          In the oil and gas sector, our major activity is in the area of bulk
          trading of petroleum products across West, Central, East, and Southern
          Africa. Our product portfolio cuts across product lines such as
          Automotive Gas Oil (AGO, also known as Diesel), Aviation Turbine
          Kerosene (ATK, also known as JetA1), Premium Motor Spirit (PMS, also
          known as Gasoline), Household Kerosene (HHK), Low Pour Fuel Oil
          (LPFO), High Pour Fuel Oil (HPFO) and Bitumen.
        </p>
        <p>
          As part of our growth strategy, we have established strong
          partnerships which grant us market access, funding, and a reliable
          supply of petroleum products. We also make continuous efforts to
          secure access to reliable logistics, thereby ensuring smooth delivery
          operations across the African continent. We are rigorous in our
          quality control and ensure that the highest safety standards are
          applied at each point in time.
        </p>
      </div>
    </div>
    <div
      id="manufacture"
      class="mb-20"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <BusinesSection
        cardName="manufacturing"
        subTitle="water production & distribution"
        src="/images/MANUFACTURING-1.jpg"
      />
      <div
        class="container mx-auto px-8 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
      >
        <p>
          At Ashfar, we understand that water enhances people’s quality of life
          and so we ensure that we make available pure, natural and ethically
          sourced water for our consumers. Our products are manufactured with
          our consumers in mind. It is our goal to provide sustainable hydration
          and high-quality beverages around the world.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BusinesSection from "./businesSection.vue";
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
  components: { BusinesSection },
};
</script>

<style scoped></style>
