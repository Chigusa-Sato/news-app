import CardInfo from '../components/morecules/CardInfo.vue';
import SampleImage from '../assets/sample.png';
export default {
  title: 'morecules/CardInfo',
  component: CardInfo,
  argTypes: {
    cardContent: {
      control: { Object },
    },
  },
};

const Template = (args) => ({
  components: { CardInfo },
  setup() {
    return { args };
  },
  template: '<CardInfo v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  cardContent: {
    publishedAt: '2022-09-13',
    title: 'タイトル',
    author: '著者',
    urlToImage: SampleImage,
  },
};
