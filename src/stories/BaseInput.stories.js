import BaseInput from '../components/atoms/BaseInput.vue';

export default {
  //グループ名
  title: 'Input',
  //使用するコンポーネント
  component: BaseInput,
  argTyeps: {
    placeholder: {
      control: { String },
    },
    modelValue: {
      control: { String },
    },
    rounded: {
      control: { Boolean },
    },
    // type: {
    //   control: { type: 'select' },
    //   options: ['text', 'date', 'radio'],
    // },
  },
};

const Template = (args) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '入力してください',
  rounded: true,
  // type: 'text',
};
export const Search = Template.bind({});
Search.args = {
  placeholder: '検索ワードを入力してください',
  rounded: false,
  // type: 'text',
};
