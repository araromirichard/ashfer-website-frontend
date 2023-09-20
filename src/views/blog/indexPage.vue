<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img src="/images/contactHero.jpg" alt="our business" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-start px-8 sm:px-0 sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize">
          Blog
        </div>
      </div>
    </div>
    <div class="container mx-auto w-full flex-col md:flex-row justify-center py-10 md:py-14 px-8 md:px-0"
      v-if="articles.data && articles.data.length > 0">
      <ArticlesLayout layout="grid" :articles="articles.data" />
      <div class="mt-8 sm:mt-12">
        <button v-if="articles.links.next !== null" @click="showMoreArticles"
          class="rounded-3xl uppercase text-xs hover:bg-primary hover:text-white py-2 px-4 md:py-3 md:px-6 text-primary font-normal font-Mplus tracking-buttonWide border-2 border-primary duration-300">
          <span v-if="loading">loading...</span>
          <span v-else>view more</span>
        </button>
      </div>
    </div>
    <div class="w-full text-center flex flex-col justify-center items-center py-40" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-24 h-24 text-neutral-400">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
      <p class="text-xl text-neutral-500">Ooops! No Post Available. Check Back later..</p>

    </div>
  </div>
</template>

<script>
//import contactForm from "../../components/includes/contactForm.vue";
import { } from "vue";
//import AOS from "aos";
import ArticlesLayout from "@/components/ArticlesLayout.vue";
import { useArticle } from "@/composables/useArticle";

export default {
  name: "blogPage",
  components: { ArticlesLayout },
  setup() {
    // onMounted(() => {
    //   AOS.init();
    // });

    let { fetchArticles, loading, articles } = useArticle();
    fetchArticles();
    function showMoreArticles() {
      fetchArticles({
        showMore: true,
        page: articles.value.meta.current_page + 1,
      });
    }
    return {
      articles,
      loading,
      showMoreArticles,
    };
  },
};
</script>

<style scoped></style>
