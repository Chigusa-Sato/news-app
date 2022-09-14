<template>
  <div>
    <base-input
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />
    <base-button :label="label" :color="color" @click-event="handleClick" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BaseInput from '../atoms/BaseInput.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default defineComponent({
  components: { BaseInput, BaseButton },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
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
    label: {
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
