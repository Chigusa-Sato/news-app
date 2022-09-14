<template>
  <div class="container min-h-screen flex mt-16 justify-center">
    <div
      class="bg-gray-100 w-4/5 h-2/3 flex p-10 gap-10"
      v-if="newsDetail !== null"
    >
      <div class="bg-white w-1/2">
        <img :src="newsDetail.urlToImage" />
        <a class="block font-bold" :href="newsDetail.url">{{
          newsDetail.title
        }}</a>
        <p>{{ newsDetail.description }}</p>
        <p>{{ newsDetail.author }}</p>
      </div>
      <div class="bg-white w-1/2 flex flex-col justify-center items-center">
        <input
          type="text"
          class="w-3/4 h-3/4 border-2 border-blue-300 rounded"
          placeholder="please write here"
          v-model="comments"
        />
        <div class="flex justify-end">
          <button class="bg-blue-200 rounded px-3 py-1" @click="submitComments">
            投稿
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <TextError text="対象の記事が見つかりません" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useNews } from '../../stores/news';
import { useTimeline } from '../../stores/timeline';
import TextError from '../atoms/TextError.vue';
export default defineComponent({
  components: {
    TextError,
  },
  setup() {
    //ルーティング周り
    const route = useRoute();
    const router = useRouter();
    let id = route.params.topicId;
    //idにデータ紐づいたニュース情報を取得
    const newsStore = useNews();

    console.log(id);
    let newsDetail = null;
    if (newsStore.News.length) {
      newsDetail = computed(() => newsStore.fetchNews_detail(id));
    }
    //コメントの投稿
    let comments = ref('');
    const timelineStore = useTimeline();
    const submitComments = () => {
      if (window.confirm('投稿してもよろしいでしょうか')) {
        timelineStore.submitComments(comments.value, newsDetail.value);
        router.push('/timeLine/');
      }
    };
    return { comments, id, newsDetail, submitComments };
  },
});
</script>

<style scoped></style>
