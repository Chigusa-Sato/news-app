<template>
  <p :class="textColor">{{ text }}</p>
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
      if (props.color === 'black') {
        return 'text-gray-900';
      } else {
        return 'text-white';
      }
    });
    return { textColor };
  },
});
</script>
