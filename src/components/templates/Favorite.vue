<template>
  <div v-if="!favorites.length">
    <TextError text="記事が登録されていません" />
  </div>
  <div v-else class="flex flex-wrap">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <div v-for="topic in favorites" :key="topic.publishedAt" class="">
        <Card
          :content="topic"
          @handleClick_remove="removeFromFavorite(topic)"
          @handleClick_comment="goToCommentPage(topic.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed, defineComponent } from 'vue';
import { useFavorite } from '../../stores/favorite';
import Card from '../organisms/Card.vue';
import TextError from '../atoms/TextError.vue';

export default defineComponent({
  components: {
    Card,
    TextError,
  },
  setup() {
    const router = useRouter();

    //コメントページへ遷移
    const goToCommentPage = (id) => {
      router.push({ name: 'comments', params: { topicId: id } });
    };
    //お気に入り追加
    const favoriteStore = useFavorite();
    const favorites = computed(() => favoriteStore.favorites);
    const removeFromFavorite = (topic) => {
      favoriteStore.removeFromFavorite(topic.id);
    };

    return { favorites, removeFromFavorite, goToCommentPage };
  },
});
</script>
