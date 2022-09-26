<template>
  <div>
    <Badge :text="formatDate(cardContent.publishedAt)" />
    <img :src="cardContent.urlToImage" class="my-1" />
    <a class="block font-bold text-left" :href="cardContent.url">{{
      cardContent.title
    }}</a>
    <Text :text="cardContent.author" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import Text from '../atoms/Text.vue';
import Badge from '../atoms/Badge.vue';
export default defineComponent({
  components: { Text, Badge },
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
