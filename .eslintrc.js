module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^'],
              ['^@?\\w'],
              ['^@images', '^@/'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
