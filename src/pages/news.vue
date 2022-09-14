<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="flex m-4">
        <search-form
          placeholder="検索ワードを入力して下さい"
          v-model="keyword"
          value="keyword"
          color="gray"
          label="検索"
          @inputEvent="inputValue"
          @click-event="search_news"
        />
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="topic in news" :key="topic.publishedAt" class="">
        <div class="bg-gray-100 m-1 w-96 p-5">
          <img :src="topic.urlToImage" />
          <a class="block font-bold" :href="topic.url">{{ topic.title }}</a>
          <p>{{ topic.author }}</p>
          <base-button
            color="blue"
            label="後で読む"
            @click-event="addFavorite(topic)"
          />
          <base-button
            color="light-blue"
            label="コメント"
            @click-event="goToCommentPage(topic.id)"
          />
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
import BaseButton from '../components/atoms/BaseButton.vue';
import BaseInput from '../components/atoms/BaseInput.vue';
import SearchForm from '../components/morecules/SearchForm.vue';
export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    SearchForm,
  },
  setup() {
    //ルーティング周り
    const router = useRouter();
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

    const inputValue = (value) => {
      keyword.value = value;
    };

    return {
      goToCommentPage,
      news,
      addFavorite,
      search_news,
      keyword,
      inputValue,
    };
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
