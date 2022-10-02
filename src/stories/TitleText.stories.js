import TitleText from '../components/atoms/TitleText.vue';
export default {
  title: 'atoms/TitleText',
  component: TitleText,
  argTypes: {
    text: {
      control: { String },
    },
  },
};
const Template = (args) => ({
  components: { TitleText },
  setup() {
    return { args };
  },
  template: '<TitleText v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  text: 'TitleText',
  color: 'white',
  hover: true,
};
