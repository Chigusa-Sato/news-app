<template>
  <button
    class="text-white px-4 py-2 shadow-lg"
    :class="[buttonColor, rounded, hover]"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true,
    },
    hover: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);
    const buttonColor = computed(() => {
      if (props.color === 'blue') {
        return 'bg-blue-400';
      } else if (props.color === 'light-blue') {
        return 'bg-blue-300';
      } else if (props.color === 'gray') {
        return 'bg-gray-400';
      } else {
        return 'bg-red-300';
      }
    });

    const rounded = computed(() => {
      if (props.rounded) {
        return 'rounded-lg';
      } else {
        return '';
      }
    });

    const hover = computed(() => {
      if (props.hover) {
        return 'hover:shadow-none';
      }
    });

    const handleClick = () => {
      emit('clickEvent');
    };

    return { buttonColor, rounded, hover, handleClick };
  },
});
</script>
