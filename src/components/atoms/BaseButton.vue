<template>
  <button
    class="text-white px-4 py-2 rounded-lg shadow-lg"
    :class="buttonColor"
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
    //TODO:storybookで背景色をカスタムする
    // const style = computed(() => {
    //   return 'backgroundColor:' + props.color;
    // });
    const handleClick = () => {
      emit('clickEvent');
    };

    return { buttonColor, handleClick };
  },
});
</script>
