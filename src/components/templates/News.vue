<template>
  <div class="container">
    <div class="flex justify-center">
      <div class="flex mb-4">
        <search-form
          class=""
          v-model="keyword"
          value="keyword"
          color="gray"
          :category="category"
          name="category"
          :select_options="options"
          @updateSelect="updateCategory"
          @inputEvent="inputValue"
          @click-event="search_news"
        />
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
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
      <TextError text="検索結果はありません" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useNews } from '../../stores/news';
import { useFavorite } from '../../stores/favorite';
import TextError from '../atoms/TextError.vue';
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
    TextError,
  },
  setup() {
    //storeモジュール定義
    const newsStore = useNews();
    const favoriteStore = useFavorite();
    const news = computed(() => newsStore.News);

    //ルーティング周り
    const router = useRouter();
    const goToCommentPage = (id) => {
      router.push({ name: 'comments', params: { topicId: id } });
    };

    //お気に入り追加
    const addFavorite = (topic) => {
      favoriteStore.addToFavorite(topic);
    };
    //クリップアイコン表示
    const addClipIcon = (argNews) => {
      const favorites = favoriteStore.favorites;
      console.log(favorites[0], argNews.value);

      const joinedNewsArray = [...favorites, ...argNews.value];
      const duplicatedNewsArray = joinedNewsArray.filter(
        (item) => favorites.includes(item.id) && argNews.value.includes(item.id)
      );
    };
    //ニュース情報の取得
    //createdはsetup関数内に記載
    new Promise((resolve) => {
      newsStore.fetchNews();
      resolve();
    }).then(() => {
      addClipIcon(news);
    });

    //検索
    //-カテゴリ
    const options = reactive([
      'general',
      'business',
      'entertainment',
      'health',
      'science',
      'sports',
      'technology',
    ]);

    let category = ref('general');
    const updateCategory = (val) => {
      category.value = val;
    };

    //-キーワード
    let keyword = ref('');
    const search_news = () => {
      newsStore.searchNews(keyword.value, category.value);
      console.log('searchCate', category.value);
      addClipIcon(news);
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
      updateCategory,
      options,
      category,
      addClipIcon,
    };
  },
});
</script>
