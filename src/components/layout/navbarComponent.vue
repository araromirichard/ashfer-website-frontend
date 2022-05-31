<template>
  <div>
    <nav
      id="navbar"
      class="px-4 py-4 sm:py-6 bg-white shadow sm:fixed w-full z-10"
    >
      <div class="container mx-auto flex flex-col sm:flex-row item-center">
        <div class="flex flex-row w-full items-center justify-between">
          <div>
            <img src="../../assets/logo.svg" alt="company logo" />
          </div>
          <div>
            <button v-show="!isVisible" class="sm:hidden" @click="toggle">
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
            <button v-show="isVisible" class="sm:hidden" @click="toggle">
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
          class="text-blacky mt-4 sm:mt-0 w-full sm:space-x-6 font-poppins font-bold text-lg tracking-widest sm:justify-end sm:content-center sm:items-center sm:flex sm:flex-row"
          :class="{ hidden: !isVisible }"
        >
          <NavbarLinks to="/home" label="Home" />
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
export default {
  components: { NavbarLinks },
  setup() {
    const router = useRouter();

    let { isVisible, toggle } = useToggle();
    return {
      router,
      isVisible,
      toggle,
    };
  },
};
</script>

<style scoped></style>
