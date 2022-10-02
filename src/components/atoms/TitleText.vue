<template>
  <p class="text-xl font-bold w-fit" :class="[textColor, hover]">{{ text }}</p>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue';

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white',
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    const textColor = computed(() => {
      if (props.color === 'white') {
        return 'text-white';
      } else {
        return 'text-gray-900';
      }
    });

    const hover = computed(() => {
      if (props.hover) {
        return 'hover:border-b-2 transition-all ease-in-out border-solid border-b-white';
      }
    });
    return { textColor, hover };
  },
});
</script>
