import BaseSelect from '../components/atoms/BaseSelect.vue';

export default {
  //グループ名
  title: 'atoms/Select',
  //使用するコンポーネント
  component: BaseSelect,
  argTyeps: {
    options: {
      control: 'select',
      options: ['A', 'B', 'C'],
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
  options: 'A',
};
