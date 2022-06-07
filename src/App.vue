<script setup>
import navbarComponentVue from "./components/layout/navbarComponent.vue";
import FooterCom from "./components/layout/footerCom.vue";
</script>

<template>
  <navbarComponentVue />

  <RouterView />
  <FooterCom />
</template>
