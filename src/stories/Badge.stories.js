import Badge from '../components/atoms/Badge.vue';

export default {
  title: 'atoms/Badge',
  component: Badge,
  argTypes: {
    text: {
      control: { String },
    },
  },
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  text: '2022/09/16',
};
