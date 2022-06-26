<template>
  <footer class="bg-secondary w-full py-6">
    <div
      class="container mx-auto flex text-white mt-10 md:mt-20 flex-wrap w-full md:space-x-3 space-y-8"
    >
      <div class="flex flex-col justify-start content-center md:hidden">
        <img src="/src/assets/footerlogo.svg" class="w-60" alt="" />
        <span class="text-base font-poppins font-bold ml-10"
          >Empowering Nations</span
        >
      </div>
      <div class="flex flex-wrap my-4 sm:my-6 md:my-0">
        <div class="font-poppins col-span-12 mx-10 my-8 md:my-0">
          <span
            class="text-base font-poppins uppercase font-medium mb-4 border-b-2 border-primary tracking-buttonWide justify-center"
            >menu</span
          >

          <ul>
            <li class="links">
              <router-link to="/">Home</router-link>
            </li>
            <li class="links">
              <router-link to="/about-us">About</router-link>
            </li>
            <li class="links">
              <router-link to="/our-business">Our Business</router-link>
            </li>
            <li class="links">
              <router-link to="/">Career</router-link>
            </li>
            <li class="links">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="font-poppins mx-10 my-8 md:my-0">
          <span
            class="text-base font-poppins uppercase font-medium mb-4 border-b-2 border-primary tracking-buttonWide justify-center"
            >services</span
          >

          <ul>
            <li class="links">
              <router-link :to="{ name: 'our-business', hash: '#power' }"
                >Power</router-link
              >
            </li>
            <li class="links">
              <router-link :to="{ name: 'our-business', hash: '#oil' }"
                >Oil & Gas</router-link
              >
            </li>
            <li class="links">
              <router-link :to="{ name: 'our-business', hash: '#haulage' }"
                >Haulage</router-link
              >
            </li>
            <li class="links">
              <router-link :to="{ name: 'our-business', hash: '#manufacture' }"
                >Manufacturing</router-link
              >
            </li>
            <li class="links">
              <router-link :to="{ name: 'our-business', hash: '#construct' }"
                >Construction</router-link
              >
            </li>
          </ul>
        </div>
        <div class="font-poppins mx-10 my-8 md:my-0">
          <span
            class="text-base font-poppins uppercase font-medium mb-4 border-b-2 border-primary tracking-buttonWide justify-center"
            >contact us</span
          >

          <ul>
            <li class="links text-base md:text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a class="email px-2 md:px-4" href="mailto:info@ashfargroup.com">
                info@ashfargroup.com</a
              >
            </li>
            <li class="links text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <a class="phone px-2 md:px-4" href="tel:+233302799601"
                >+233 30 279 9601</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="font-poppins mx-10 md:mx-0 my-8 md:my-0">
        <span
          class="text-base font-poppins uppercase font-medium mb-4 border-b-2 border-primary tracking-buttonWide justify-center"
          >follow us</span
        >

        <ul class="flex flex-row space-x-10">
          <li class="mt-8">
            <a href="#">
              <svg
                class="w-5 h-5 text-white hover:text-red-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
          </li>
          <li class="mt-8">
            <a href="#">
              <svg
                class="w-5 h-5 text-white hover:text-red-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
          </li>
          <li class="mt-8">
            <a href="#">
              <svg
                viewBox="0 0 512 512 "
                class="w-6 h-6 text-white hover:text-red-400 fill-current"
              >
                <g>
                  <path
                    d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"
                  />
                  <path
                    d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"
                  />
                  <circle cx="351.5" cy="160.5" r="21.5" />
                </g>
              </svg>
            </a>
          </li>
          <li class="mt-8">
            <a href="#">
              <svg
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white hover:text-red-400 fill-current hover:translate-x-0.5 duration-300"
              >
                <path
                  d="M25.0651 2.81639C24.7707 1.7078 23.9032 0.834703 22.8018 0.538406C20.8054 0 12.8 0 12.8 0C12.8 0 4.7947 0 2.79825 0.538406C1.69683 0.83475 0.829359 1.7078 0.534938 2.81639C0 4.82578 0 9.01819 0 9.01819C0 9.01819 0 13.2106 0.534938 15.22C0.829359 16.3286 1.69683 17.1653 2.79825 17.4616C4.7947 18 12.8 18 12.8 18C12.8 18 20.8053 18 22.8018 17.4616C23.9032 17.1653 24.7707 16.3286 25.0651 15.22C25.6 13.2106 25.6 9.01819 25.6 9.01819C25.6 9.01819 25.6 4.82578 25.0651 2.81639ZM10.1818 12.8246V5.2118L16.8727 9.01828L10.1818 12.8246Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="w-full text-white flex justify-center content-center my-20 md:my-24"
    >
      &copy; 2022 Ashfar. All right reserved.
    </div>
  </footer>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>
.links {
  padding-top: 1rem;
  letter-spacing: 3px;
}

.email .phone {
  text-decoration: none;
}
</style>
