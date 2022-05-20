<template>
  <div class="container flex flex-wrap items-center justify-center">
    <!-- API {{ import.meta.env.API_URL }} -->
    <div
      v-for="comment in timeline"
      :key="comment.article.publishedAt"
      class="flex"
    >
      <div class="bg-gray-100 my-1 w-96 p-5">
        <img :src="comment.article.urlToImage" />
        <a class="block font-bold" :href="comment.article.url">{{
          comment.article.title
        }}</a>
        <p>{{ comment.article.author }}</p>
      </div>
      <div class="bg-gray-100 my-1 w-96 p-5">
        <div class="m-3 p-5">
          {{ comment.comment }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue';
import { useTimeline } from '../stores/timeline';

export default defineComponent({
  setup() {
    //お気に入り追加
    const timelineStore = useTimeline();
    const timeline = computed(() => timelineStore.timeline);

    return { timeline };
  },
});
</script>
