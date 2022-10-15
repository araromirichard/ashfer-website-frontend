<template>
  <div class="pt-0 md:pt-[140px]">
    <div class="relative z-0 h-40 md:h-96 w-full">
      <img
        src="/images/contactHero.jpg"
        alt="our business"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#f15a29] opacity-10"></div>
      <div class="absolute inset-0">
        <div
          class="container mx-auto w-full h-full flex items-center justify-start px-8 sm:px-0 sm:justify-start text-white text-lg md:text-[54px] font-bold font-poppins capitalize"
        >
          Blog
        </div>
      </div>
    </div>
    <div
      class="container mx-auto w-full flex-col md:flex-row justify-center py-10 md:py-14 px-8 md:px-0"
    >
      <ArticlesLayout layout="grid" :articles="articles.data" />
      <div class="mt-8 sm:mt-12">
        <button
          v-if="articles.links.next !== null"
          @click="showMoreArticles"
          class="rounded-3xl uppercase text-xs hover:bg-primary hover:text-white py-2 px-4 md:py-3 md:px-6 text-primary font-normal font-Mplus tracking-buttonWide border-2 border-primary duration-300"
        >
          <span v-if="loading">loading...</span>
          <span v-else>view more</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import contactForm from "../../components/includes/contactForm.vue";
import {} from "vue";
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
