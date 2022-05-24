<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="flex m-4">
        <input
          type="text"
          class="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          v-model="keyword"
        />
        <button
          class="px-4 rounded-r-lg bg-gray-400 text-gray-800 font-bold p-2 uppercase border-gray-500 border-t border-b border-r"
          @click="search_news"
        >
          Search
        </button>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="topic in news" :key="topic.publishedAt" class="">
        <div class="bg-gray-100 m-1 w-96 p-5">
          <img :src="topic.urlToImage" />
          <a class="block font-bold" :href="topic.url">{{ topic.title }}</a>
          <p>{{ topic.author }}</p>
          <button
            class="bg-blue-300 py-1 px-3 mr-1 rounded"
            @click="addFavorite(topic)"
          >
            後で読む
          </button>
          <button
            class="bg-blue-400 py-1 px-3 ml-1 rounded"
            @click="goToCommentPage(topic.id)"
          >
            コメント
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center"
      v-show="!news.length"
    >
      <p>検索結果はありません</p>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNews } from '../stores/news';
import { useFavorite } from '../stores/favorite';

export default defineComponent({
  setup() {
    //ルーティング周り
    const router = useRouter();
    // const route = useRoute();
    const goToCommentPage = (id) => {
      router.push({ name: 'comments', params: { topicId: id } });
    };

    //ニュース情報の取得
    //createdはsetup関数内に記載
    const newsStore = useNews();
    const news = computed(() => newsStore.News);
    newsStore.fetchNews();

    //お気に入り追加
    const favoriteStore = useFavorite();
    const addFavorite = (topic) => {
      favoriteStore.addToFavorite(topic);
    };

    //検索
    let keyword = ref('');

    let search_news = () => {
      newsStore.searchNews(keyword.value);
    };

    return { goToCommentPage, news, addFavorite, search_news, keyword };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  /* display: flex;
  flex-wrap: wrap; */
  /* justify-content: space-around; */
  /* gap: 30px; */
}
.wrapper {
  background: rgb(238, 238, 238);
  width: 48%;
}
.button {
  display: block;
  background: rgb(93, 93, 255);
  opacity: 80%;
  border-radius: 5%;
  width: 80px;
  height: 30px;
  font-weight: bold;
  font-size: large;
  margin: auto;
}
</style>
