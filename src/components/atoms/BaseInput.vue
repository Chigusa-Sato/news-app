<template>
  <!-- {{ $attrs }} -->
  <input
    class="rounded-lg p-2 border mr-0 text-gray-800 border-gray-200 bg-white"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    type="text"
  />
</template>

<script>
import { defineComponent } from 'vue';

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
  },
  emits: ['update:modelValue'],
});
</script>
