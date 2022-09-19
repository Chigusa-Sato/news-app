import TopNavBar from '../components/organisms/TopNavbar.vue';
export default {
  title: 'organisms/TopNavBar',
  component: TopNavBar,
  argTypes: {},
};

const Template = (args) => ({
  components: { TopNavBar },
  setup() {
    return { args };
  },
  template: '<TopNavBar v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {};
