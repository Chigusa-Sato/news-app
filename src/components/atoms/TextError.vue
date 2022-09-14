<template>
  <p class="text-red font-bold" :class="textColor">※{{ text }}</p>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    const textColor = computed(() => {
      if (props.color === 'red') {
        return 'text-red-700';
      } else {
        return 'text-gray-900';
      }
    });
    return { textColor };
  },
});
</script>
