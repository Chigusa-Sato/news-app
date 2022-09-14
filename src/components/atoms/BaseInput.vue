<template>
  <!-- {{ $attrs }} -->
  <input
    class="p-2 border mr-0 text-gray-800 border-gray-200 bg-white"
    :class="rounded"
    type="text"
    :rounded="rounded"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: true,
      default: 'please type here',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const rounded = computed(() => {
      if (props.rounded) {
        return 'rounded-lg';
      } else {
        return '';
      }
    });
    return { rounded };
  },
});
</script>
