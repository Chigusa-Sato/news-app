import BaseButton from '../components/atoms/BaseButton.vue';

export default {
  //グループ名
  title: 'Button',
  //使用するコンポーネント
  component: BaseButton,
  // //オプション設定
  argTypes: {
    label: {
      control: { String },
    },
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<BaseButton v-bind="args" />',
});

//bindを呼び出しstoryを作成
export const Primary = Template.bind({});
//Primaryボタンのpropsを設定
Primary.args = {
  label: 'Primary',
  color: 'blue',
};

// //bindを呼び出しstoryを作成
// export const Secondary = Template.bind({});
// //Secondaryボタンのpropsを設定
// Secondary.args = {
//   label: 'Secondary',
//   color: 'light-blue',
// };

//bindを呼び出しstoryを作成
export const Secondary = Template.bind({});
//Secondaryボタンのpropsを設定
Secondary.args = {
  label: 'Secondary',
  color: 'gray',
};
