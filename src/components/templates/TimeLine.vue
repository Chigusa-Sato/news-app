<template>
  <div class="container flex flex-wrap items-center justify-center w-screen">
    <div
      v-for="comment in timeline"
      :key="comment.article.publishedAt"
      class="w-4/5"
    >
      <div class="bg-gray-100 my-1 w-full h-96 p-5 flex">
        <!-- 記事情報 -->
        <!-- <CardInfo
          class="h-80"
          :cardContent="comment.article"
          :isTopPage="isTopPage"
        /> -->

        <div class="flex flex-col">
          <Badge :text="formatDate(comment.article.publishedAt)" />
          <div
            class="
              bg-white
              py-4
              overflow-hidden
              flex
              justify-center
              align-center
              w-full
            "
          >
            <img
              v-if="comment.article.urlToImage !== null"
              :src="comment.article.urlToImage"
              class="max-h-60 max-w-xs object-cover"
            />
            <img v-else src="../../assets/no_photo.png" alt="" />
          </div>
          <a
            class="
              block
              font-bold
              max-w-xs
              pt-3
              text-left
              overflow-hidden
              line-clamp-3
            "
            :href="comment.article.url"
            >{{ comment.article.title }}</a
          >
          <Text :text="comment.article.author" />
        </div>

        <!-- 記事の内容 -->
        <div class="h-80 w-1/2 p-3 flex flex-col items-center">
          <!-- <TitleText text="description" color="black" /> -->
          <Text
            :text="comment.article.description"
            class="h-56bg-red-100 line_clamp"
          />
          <a
            class="block font-bold text-left"
            :href="comment.article.url"
            target="_blank"
          >
            <BaseButton color="gray" label="続きを見る" class="w-28 mt-4" />
          </a>
        </div>
        <!-- コメント -->
        <div
          class="
            bg-white
            h-80
            py-5
            w-1/2
            mx-1
            flex flex-col
            items-center
            justify-between
          "
        >
          <Text :text="comment.comment" class="h-56" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import CardInfo from '../morecules/CardInfo.vue';
import { useTimeline } from '../../stores/timeline';
import Badge from '../atoms/Badge.vue';
import BaseButton from '../atoms/BaseButton.vue';
import TitleText from '../atoms/TitleText.vue';
import Text from '../atoms/Text.vue';
export default defineComponent({
  components: { CardInfo, BaseButton, TitleText, Text, Badge },
  setup() {
    //お気に入り追加
    const timelineStore = useTimeline();
    const timeline = computed(() => timelineStore.timeline);

    const formatDate = computed(() => (date) => {
      let today = 'Y/M/D';
      today = today.replace(/Y/g, date.slice(0, 4));
      today = today.replace(/M/g, date.slice(5, 7));
      today = today.replace(/D/g, date.slice(8, 10));
      return today;
    });

    return { timeline, formatDate };
  },
});
</script>

<style scoped>
.line_clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
}
</style>
