<script setup>
import navbarComponentVue from "./components/layout/navbarComponent.vue";
import navbarComponentVue2 from "./components/layout/navbarComponent2.vue";
import FooterCom from "./components/layout/footerCom.vue";
</script>

<template>
  <div>
    <navbarComponentVue v-if="$route.name == 'home'" />
    <navbarComponentVue2 v-else />
    <div>
      <RouterView />
    </div>

    <FooterCom />
  </div>
</template>
