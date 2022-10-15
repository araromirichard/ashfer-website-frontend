<template>
  <div class="pt-10 md:pt-40 bg-slate-50">
    <div
      class="container mx-auto w-full min-h-full flex-col md:flex-row justify-center py-4 md:py-24 px-8 md:px-0"
    >
      <div
        class="grid overflow-hidden grid-lines grid-cols-12 grid-rows-1 gap-10"
      >
        <div class="row-span-4 md:col-start-1 col-span-12 md:col-span-8">
          <div
            class="bg-white px-10 py-2 md:pt-6 w-full min-h-screen rounded-xl"
          >
            <span
              class="main__title text-3xl md:text-5xl text-secondary font-poppins capitalize"
            >
              {{ article.title }}
            </span>
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div
                class="flex items-center text-gray-600 text-base md:text-3xl"
              >
                <div>
                  <svg
                    class="w-4 h-4 md:w-6 md:h-6 md:mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                </div>
                <div class="ml-1">{{ article.category.name }}</div>
              </div>

              <div
                class="mt-2 sm:mt-0 flex items-center text-gray-600 text-base md:text-3xl"
              >
                <div>
                  <svg
                    class="w-4 h-4 md:w-6 md:h-6 md:mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="ml-1">{{ article.created_date }}</div>
              </div>
            </div>
            <div class="image-container">
              <img
                class="object-cover w-full h-full mt-8 rounded-lg"
                :src="`http://ashfar-api.test/${article.image_url}`"
                alt="blog image"
              />
            </div>
            <div
              class="container mx-auto px-1 md:px-10 py-10 space-y-8 font-poppins text-sm sm:text-lg font-normal text-[#776C82]"
              v-html="article.description"
            ></div>
          </div>
        </div>
        <div class="row-span-1 md:col-start-9 col-span-12 md:col-span-4">
          <div
            class="bg-white px-10 py-10 md:py-28 w-full min-h-screen rounded-xl"
          >
            <span
              class="super__title text-secondary font-Mplus text-base md:text-lg capitalize"
            >
              Related Articles
            </span>
            <div
              class="grid overflow-hidden grid-lines grid-cols-12 grid-rows-2 gap-5 mt-12 md:mt-8"
            >
              <div class="col-start-1 col-span-6">
                <div style="height: 200px; width: 200px">
                  <img
                    class="object-cover w-full h-full rounded-lg"
                    :src="`http://ashfar-api.test/${article.image_url}`"
                    alt="blog image"
                  />
                </div>
              </div>
              <div
                class="col-start-7 col-span-6 font-poppins text-blacky text-xl"
              >
                {{ article.title }}
              </div>
            </div>
          </div>
          <div class="bg-white px-10 py-10 md:py-28 w-full min-h-40 rounded-xl">
            <span
              class="super__title text-secondary font-Mplus text-base md:text-lg capitalize"
            >
              Tags
            </span>

            <!-- <div
              class="col-start-7 col-span-6 font-poppins text-blacky text-xl"
            >
              <span
                class="px-4 py-2 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
              >
                {{ article.title }}
              </span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useArticle } from "@/composables/useArticle";
export default {
  components: {
    //
  },
  props: {
    slug: String,
  },
  setup(props) {
    let { articleDetail, articleDetailLoading, fetchArticleDetail } =
      useArticle();
    fetchArticleDetail({
      slug: props.slug,
    });

    return {
      article: articleDetail,
      loading: articleDetailLoading,
    };
  },
};
</script>

<style scoped>
.super__title {
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.main__title {
  font-style: normal;
  font-weight: 600;
  line-height: 68px;
}

.sub__title-one {
  font-style: normal;
  font-size: 18px;
  line-height: 163.35%;
  color: #776c82;
}

.image-container {
  height: 60vh;
  width: 100%;
}
</style>
