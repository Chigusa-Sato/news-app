<template>
  <div class="container min-h-full">
    <div v-if="!favorites.length">記事が登録されていません</div>
    <div v-else class="flex flex-wrap">
      <div
        v-for="topic in favorites"
        :key="topic.publishedAt"
        class="bg-gray-100 m-1 w-96 p-5"
      >
        <div>
          <img :src="topic.urlToImage" />
          <a class="block font-bold" :href="topic.url">{{ topic.title }}</a>
          <p>{{ topic.author }}</p>
          <button
            class="bg-gray-300 py-1 px-3 rounded"
            @click="removeFromFavorite(topic)"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  reactive,
  watchEffect,
  onMounted,
} from 'vue';
import { useFavorite } from '../stores/favorite';

export default defineComponent({
  setup() {
    //お気に入り追加
    const favoriteStore = useFavorite();
    const favorites = computed(() => favoriteStore.favorites);
    const removeFromFavorite = (topic) => {
      favoriteStore.removeFromFavorite(topic.id);
    };

    return { favorites, removeFromFavorite };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
