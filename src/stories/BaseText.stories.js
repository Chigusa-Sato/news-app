import BaseText from '../components/atoms/Text.vue';

export default {
  title: 'Text',
  component: BaseText,
  argTypes: {
    text: {
      control: { String },
    },
  },
};

const Template = (args) => ({
  components: { BaseText },
  setup() {
    return { args };
  },
  template: '<BaseText v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  text: 'BaseText',
};
