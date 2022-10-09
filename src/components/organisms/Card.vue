<template>
  <div
    class="bg-gray-200 shadow-sm w-96 h-128 p-4 flex flex-col justify-between"
  >
    <CardInfo :cardContent="content" class="h-4/5" />
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
        v-if="path === '/' || path === '/favorite/'"
      />
      <base-button
        color="gray"
        label="削除"
        @click-event="handleClick('handleClick_remove')"
        v-if="path === '/favorite/'"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import CardInfo from '../morecules/CardInfo.vue';
import BaseButton from '../atoms/BaseButton.vue';
export default defineComponent({
  components: { BaseButton, Text, CardInfo },
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
      if (route) {
        return route.path;
      } else {
        return '/';
      }
    });
    const handleClick = (eventName) => {
      emit(eventName);
    };
    return { handleClick, path };
  },
});
</script>
