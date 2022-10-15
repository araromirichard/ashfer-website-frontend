<template>
  <div>
    <div
      :class="{
        'space-y-8 sm:space-y-16': isList,
        'grid sm:grid-cols-3 sm:gap-12': isGrid,
      }"
    >
      <Article
      
        :layout="layout"
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "@/components/singleArticle.vue";
import { computed } from "vue";
export default {
  components: {
    Article,
  },
  props: {
    layout: {
      type: String,
      default: "list",
    },
    showViewAll: {
      type: Boolean,
    },
    articles: Array,
  },
  setup(props) {
    let isGrid = computed(() => {
      return props.layout === "grid";
    });
    let isList = computed(() => {
      return props.layout === "list";
    });
    return {
      isGrid,
      isList,
    };
  },
};
</script>
