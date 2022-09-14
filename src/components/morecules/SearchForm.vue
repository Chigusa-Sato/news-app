<template>
  <base-input
    placeholder="検索ワードを入力"
    :value="modelValue"
    :rounded="false"
    @input="handleInput"
  />
  <base-button
    label="検索"
    :color="color"
    :rounded="false"
    @click-event="handleClick"
  />
</template>

<script>
import { defineComponent } from 'vue';
import BaseInput from '../atoms/BaseInput.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default defineComponent({
  components: { BaseInput, BaseButton },
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('clickEvent');
    };

    const handleInput = (e) => {
      emit('inputEvent', e.target.value);
    };

    return { handleClick, handleInput };
  },
});
</script>
