<template>
  <div class="flex flex-col">
    <!-- 「後で読む」対象の記事に対してクリップを表示 -->
    <!-- <FavoriteIcon class="relative left-72 top-12" /> -->
    <Badge :text="formatDate(cardContent.publishedAt)" />
    <div
      class="
        bg-white
        py-4
        overflow-hidden
        flex
        justify-center
        align-center
        w-full
      "
    >
      <img
        v-if="cardContent.urlToImage !== null"
        :src="cardContent.urlToImage"
        class="max-h-60 max-w-xs object-cover"
      />
      <img v-else src="../../assets/no_photo.png" alt="" />
    </div>
    <a
      class="
        block
        font-bold
        max-w-xs
        pt-3
        text-left
        overflow-hidden
        line-clamp-3
      "
      :href="cardContent.url"
      >{{ cardContent.title }}</a
    >
    <Text :text="cardContent.author" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import Text from '../atoms/Text.vue';
import Badge from '../atoms/Badge.vue';
import FavoriteIcon from '../atoms/FavoriteIcon.vue';
export default defineComponent({
  components: { Text, Badge, FavoriteIcon },
  props: {
    cardContent: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const formatDate = computed(() => (date) => {
      let today = 'Y/M/D';
      today = today.replace(/Y/g, date.slice(0, 4));
      today = today.replace(/M/g, date.slice(5, 7));
      today = today.replace(/D/g, date.slice(8, 10));
      return today;
    });

    return { formatDate };
  },
});
</script>
