<template>
  <fieldset>
    <select
      :name="name"
      @change="updateValue"
      class="
        block
        w-full
        bg-base_gray
        bg-opacity-25
        text-base_green
        border border-gray-200
        py-3
        px-4
        leading-tight
        focus:outline-none
        focus:bg-white
        focus:border-gray-500
      "
    >
      <option
        v-for="(option, index) in props_options"
        :value="option.value"
        :key="index"
      >
        {{ option }}
      </option>
    </select>
  </fieldset>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props, { emit }) {
    const props_options = props.options;

    const updateValue = (e) => {
      emit('updateValue', e.target.value);
    };
    return { updateValue, props_options };
  },
});
</script>
