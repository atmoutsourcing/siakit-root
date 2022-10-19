module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: [
    'import-helpers',
  ],
  rules: {
    'react/display-name': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          ['module', 'absolute'],
          '/^@/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  }
}