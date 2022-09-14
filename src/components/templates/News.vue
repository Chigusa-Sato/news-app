<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="flex m-4">
        <search-form
          v-model="keyword"
          value="keyword"
          color="gray"
          @inputEvent="inputValue"
          @click-event="search_news"
        />
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="topic in news" :key="topic.publishedAt" class="">
        <Card
          :content="topic"
          @handleClick_favorite="addFavorite(topic)"
          @handleClick_comment="goToCommentPage(topic.id)"
        />
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
import { useNews } from '../../stores/news';
import { useFavorite } from '../../stores/favorite';
import BaseButton from '../atoms/BaseButton.vue';
import BaseInput from '../atoms/BaseInput.vue';
import SearchForm from '../morecules/SearchForm.vue';
import Card from '../organisms/Card.vue';
export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    SearchForm,
    Card,
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
