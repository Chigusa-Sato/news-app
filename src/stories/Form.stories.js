import SearchForm from '../components/morecules/SearchForm.vue';
export default {
  //グループ名
  title: 'morecules/Form',
  //使用するコンポーネント
  component: SearchForm,
  // //オプション設定
  argTypes: {
    label: {
      control: { String },
    },
  },
};

const Template = (args) => ({
  components: { SearchForm },
  setup() {
    return { args };
  },
  template: '<SearchForm v-bind="args" />',
});

//bindを呼び出しstoryを作成
export const Search = Template.bind({});
//Searchボタンのpropsを設定
Search.args = {
  label: 'Search',
  color: 'gray',
  rounded: false,
  placeholder: '検索ワード入力してください',
};
