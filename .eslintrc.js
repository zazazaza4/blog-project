module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'i18next',
    'react-hooks',
    'yaroslav-prod-plugin',
  ],
  rules: {
    indent: ['error', 2],
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/no-unused-vars': 'off',
    'i18next/no-literal-string':
    [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'border',
          'role',
          'to',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'as',
        ],
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/function-component-definition': 'off',
    'yaroslav-prod-plugin/path-checker': 'error',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
    'simple-import-sort/exports': ['error'],
    'arrow-body-style': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^[a-zA-Z]', '^@'],
          ['^app/'],
          ['^pages/'],
          ['^widgets/'],
          ['^features/'],
          ['^entities/'],
          ['^shared/'],
          ['^shared/assets/'],
          ['^\\.{1,2}/', '^\\./'],
          ['^\\u0000'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};
