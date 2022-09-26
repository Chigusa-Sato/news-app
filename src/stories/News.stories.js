import News from '../components/templates/News.vue';
import SampleImage from '../assets/sample.png';
export default {
  title: 'templates/News',
  component: News,
  argTypes: {
    // cardContent: {
    //   control: { Object },
    // },
  },
};

const Template = (args) => ({
  components: { News },
  setup() {
    return { args };
  },
  template: '<News v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  //   cardContent: {
  //     publishedAt: '2022-09-13',
  //     title: 'タイトル',
  //     author: '著者',
  //     urlToImage: SampleImage,
  //   },
};
