import BaseSelect from '../components/atoms/BaseSelect.vue';

export default {
  //グループ名
  title: 'atoms/Select',
  //使用するコンポーネント
  component: BaseSelect,
  argTyeps: {
    select_options: {
      control: 'select',
      options: ['apple', 'banana', 'grape'],
    },
  },
};

const Template = (args) => ({
  components: { BaseSelect },
  setup() {
    return { args };
  },
  template: '<BaseSelect v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  select_options: 'A',
};
