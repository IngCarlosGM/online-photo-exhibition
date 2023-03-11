module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'eslint-config-prettier',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [],
  parserOptions: {
    ecamFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
