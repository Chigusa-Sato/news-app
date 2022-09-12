// tailwindの読み込み
import '../src/index.css';

export const parameters = {
  globals: {
    backgrounds: {},
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
