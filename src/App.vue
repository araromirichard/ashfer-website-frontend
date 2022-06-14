<script setup>
import navbarComponentVue from "./components/layout/navbarComponent.vue";
import navbarComponentVue2 from "./components/layout/navbarComponent2.vue";
import FooterCom from "./components/layout/footerCom.vue";
</script>

<template>
  <div>
    <navbarComponentVue v-if="$route.name == 'home'" />
    <navbarComponentVue2 v-else />
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>

    <FooterCom />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
