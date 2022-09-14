<template>
  <div class="flex flex-wrap items-center justify-center">
    <div v-for="topic in news" :key="topic.publishedAt" class="">
      <Card :content="topic" @handleClick_remove="removeFromFavorite(topic)" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useFavorite } from '../stores/favorite';
import Card from '../organisms/Card.vue';

export default defineComponent({
  components: {
    Card,
  },
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
