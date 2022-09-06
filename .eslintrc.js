module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off', // Неправильно работает в Windows.
    'arrow-parens': 'off', // Несовместимо с prettier
    'vuejs-accessibility/alt-text': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'object-curly-newline': 'off', // Несовместимо с prettier
    'no-mixed-operators': 'off', // Несовместимо с prettier
    'function-paren-newline': 'off', // Несовместимо с prettier
    'space-before-function-paren': 0, // Несовместимо с prettier
    'max-len': ['warn', 120, 2, { ignoreUrls: true }], // airbnb позволяет некоторые пограничные случаи
    'prettier/prettier': ['error'],
  },
};
