import BaseText from '../components/atoms/BaseText.vue';

export default {
  //グループ名
  title: 'Text',
  //使用するコンポーネント
  component: BaseText,
};

export const Default = () => ({
  components: { BaseText },
  template: '<base-text/>',
});

export const Error = () => ({
  components: { BaseText },
  template: '<base-text/>',
});
