<template>
  <div class="bg-gray-200 shadow-sm m-1 w-96 h-128 p-5">
    {{ path }}
    <Text
      color="white"
      :text="formatDate(content.publishedAt)"
      class="text-left bg-gray-400 w-24 px-2"
    />
    <img :src="content.urlToImage" class="my-1" />
    <a class="block font-bold" :href="content.url">{{ content.title }}</a>
    <Text :text="content.author" />
    <div class="flex justify-center gap-2">
      <base-button
        color="blue"
        label="後で読む"
        @click-event="handleClick('handleClick_favorite')"
        v-if="path === '/'"
      />
      <base-button
        color="light-blue"
        label="コメント"
        @click-event="handleClick('handleClick_comment')"
        v-if="path === '/'"
      />
      <base-button
        color="gray"
        label="削除"
        @click-event="handleClick('handleClick_remove')"
        v-if="path === '/favorite'"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import BaseButton from '../atoms/BaseButton.vue';
import Text from '../atoms/Text.vue';
export default defineComponent({
  components: { BaseButton, Text },
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
    },
    content: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const path = computed(() => {
      const route = useRoute();
      return route.path;
    });
    const formatDate = computed(() => (date) => {
      let today = 'Y/M/D';
      today = today.replace(/Y/g, date.slice(0, 4));
      today = today.replace(/M/g, date.slice(5, 7));
      today = today.replace(/D/g, date.slice(8, 10));
      return today;
    });
    const handleClick = (eventName) => {
      emit(eventName);
    };
    return { handleClick, formatDate, path };
  },
});
</script>
