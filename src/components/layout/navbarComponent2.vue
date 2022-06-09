<template>
  <div class="">
    <nav
      id="navbar"
      class="px-4 py-4 md:py-6 bg-white shadow md:fixed w-full z-10 transition-colors duration-500"
    >
      <div class="container mx-auto flex flex-col md:flex-row item-center">
        <div
          class="flex flex-row w-full items-center justify-between md:basis-1/3"
        >
          <div class="hidden md:block">
            <img src="../../assets/logo.svg" alt="company logo" />
          </div>
          <div class="md:hidden">
            <!-- <img
              src="../../assets/logo_wht.svg"
              alt="company logo"
              :class="{ hidden: showWhiteNav }"
            /> -->
            <img
              src="../../assets/logo.svg"
              alt="company logo"
              :class="{ block: !showWhiteNav }"
            />
          </div>
          <div>
            <button v-show="!isVisible" class="md:hidden" @click="toggle">
              <svg
                class="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </button>
            <button v-show="isVisible" class="md:hidden" @click="toggle">
              <svg
                class="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="text-blacky mt-4 md:mt-0 w-full md:space-x-10 font-poppins font-bold sm:text-base md:text-lg tracking-n md:justify-end md:content-center md:items-center md:flex md:flex-row basis-2/3"
          :class="{ hidden: !isVisible }"
        >
          <NavbarLinks to="/" label="Home" />
          <NavbarLinks to="/about-us" label="About Us" />
          <NavbarLinks to="/our-business" label="Our Business" />
          <NavbarLinks to="/our-clients" label="Our Clients" />
          <NavbarLinks to="/contact" label="Contact " />
          <NavbarLinks to="/blog" label="Blog" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import NavbarLinks from "../navbarLinks.vue";
import { useToggle } from "../../composables/useToggle";
import { ref } from "@vue/reactivity";
export default {
  components: { NavbarLinks },
  setup() {
    const router = useRouter();
    const showWhiteNav = ref(false);
    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;

      if (bodyTopPosition < -150) {
        showWhiteNav.value = true;
      } else {
        showWhiteNav.value = false;
      }
    });

    let { isVisible, toggle } = useToggle();
    return {
      router,
      isVisible,
      toggle,
      showWhiteNav,
    };
  },
};
</script>

<style scoped></style>
