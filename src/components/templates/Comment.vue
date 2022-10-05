<template>
  <div class="container min-h-screen flex mt-16 justify-center">
    <div
      class="bg-gray-100 w-4/5 h-2/3 flex p-10 gap-10"
      v-if="newsDetail !== null"
    >
      <div class="bg-white w-1/2 overflow-hidden p-4">
        <img :src="newsDetail.urlToImage" />
        <a class="block font-bold" :href="newsDetail.url">{{
          newsDetail.title
        }}</a>
        <p>{{ newsDetail.description }}</p>
        <p>{{ newsDetail.author }}</p>
      </div>
      <div class="w-1/2 flex flex-col justify-center items-end">
        <input
          type="text"
          class="w-full h-full border-2 border-blue-300 rounded mb-2"
          placeholder="please write here"
          v-model="comments"
        />
        <div class="flex justify-end gap-2">
          <BaseButton
            color="gray"
            label="戻る"
            @click="return_to_previous_page"
          />
          <BaseButton label="投稿" color="light-blue" @click="submitComments" />
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
import BaseButton from '../atoms/BaseButton.vue';
export default defineComponent({
  components: {
    TextError,
    BaseButton,
  },
  setup() {
    //ルーティング周り
    const route = useRoute();
    const router = useRouter();
    let id = route.params.topicId;
    //idにデータ紐づいたニュース情報を取得
    const newsStore = useNews();

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

    const return_to_previous_page = () => {
      router.back();
    };
    return {
      comments,
      id,
      newsDetail,
      submitComments,
      return_to_previous_page,
    };
  },
});
</script>

<style scoped>
.line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
}
</style>
