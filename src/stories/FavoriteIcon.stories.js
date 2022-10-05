import FavoriteIcon from '../components/atoms/FavoriteIcon.vue';

export default {
  title: 'atoms/FavoriteIcon',
  component: FavoriteIcon,
  argTypes: {},
};

const Template = (args) => ({
  components: { FavoriteIcon },
  setup() {
    return { args };
  },
  template: '<FavoriteIcon v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  text: '2022/09/16',
};
