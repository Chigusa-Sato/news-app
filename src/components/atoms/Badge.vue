<template>
  <div class="text-left bg-gray-400 w-24 px-2 text-white">
    {{ text }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String,
      default: '',
    },
  },
  setup() {
    //ルーティング周り
  },
});
</script>
