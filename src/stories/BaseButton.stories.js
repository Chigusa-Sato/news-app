import BaseButton from '../components/atoms/BaseButton.vue';

export default {
  //グループ名
  title: 'Button',
  //使用するコンポーネント
  component: BaseButton,
};

export const Primary = () => ({
  components: { BaseButton },
  template: '<base-button />',
});

export const Secondary = () => ({
  components: { BaseButton },
  template: '<base-button />',
});
