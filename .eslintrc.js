module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/display-name': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
  },
};
