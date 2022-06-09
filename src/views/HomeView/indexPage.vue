<script setup>
import HeroSection from "./heroSection.vue";
import AboutSect from "./aboutSect.vue";
import WhatWeDo from "./whatWeDo.vue";
import HomePartners from "./homePartners.vue";
import HomeCsr from "./homeCsr.vue";
</script>

<template>
  <div>
    <HeroSection />

    <!-- about us section starts -->
    <AboutSect />
    <!-- about us section ends -->

    <!-- what we do section starts -->
    <WhatWeDo />
    <!-- what we do section ends -->

    <!-- partners section starts -->
    <HomePartners />
    <!-- partners section ends -->

    <!-- crv and contact section starts -->
    <div class="mb-20">
      <HomeCsr />
    </div>
    <!-- crv and contact section ends -->
  </div>
</template>
