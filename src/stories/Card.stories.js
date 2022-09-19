import Card from '../components/organisms/Card.vue';
import SampleImage from '../assets/sample.png';
export default {
  title: 'organisms/Card',
  component: Card,
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'light-blue', 'gray', 'red'],
    },
    content: '',
    path: '',
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
//Defaultボタンのpropsを設定
Default.args = {
  path: '',
  color: 'blue',
  content: {
    publishedAt: '2022-09-13',
    title: 'タイトル',
    author: '著者',
    urlToImage: SampleImage,
  },
};
