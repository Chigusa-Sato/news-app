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
  modelValue: 'りんご',
  // type: 'text',
};
// export const Search = () => ({
//   components: { BaseInput },
//   template: '<base-input />',
// });
