<template>
  <base-select
    :select_options="select_options"
    :name="name"
    @updateValue="updateSelect"
    :value="category"
    class="mr-2"
  />
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
import { defineComponent, ref, reactive } from 'vue';
import BaseSelect from '../atoms/BaseSelect.vue';
import BaseInput from '../atoms/BaseInput.vue';
import BaseButton from '../atoms/BaseButton.vue';

export default defineComponent({
  components: { BaseSelect, BaseInput, BaseButton },
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
    select_options: {
      type: Array,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    category: {
      type: String,
      required: false,
      default: 'general',
    },
  },
  setup(props, { emit }) {
    const updateSelect = (value) => {
      emit('updateSelect', value);
    };
    const handleClick = () => {
      emit('clickEvent');
    };

    const handleInput = (e) => {
      emit('inputEvent', e.target.value);
    };
    return { handleClick, handleInput, updateSelect };
  },
});
</script>
