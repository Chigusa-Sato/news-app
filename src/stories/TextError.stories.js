import TextError from '../components/atoms/TextError.vue';

export default {
  //グループ名
  title: 'Text',
  //使用するコンポーネント
  component: TextError,
};

export const Default = () => ({
  components: { TextError },
  template: '<text-error/>',
});

export const Error = () => ({
  components: { TextError },
  template: '<text-error/>',
});
