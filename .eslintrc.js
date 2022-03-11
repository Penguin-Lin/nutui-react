module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'unused-imports', 'prettier', 'markdown'],
  overrides: [
    {
      files: ['src/packages/**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: [
        'src/packages/**/*.md/*.ts',
        'src/packages/**/*.md/*.tsx',
        'src/packages/**/*.md/*.js',
        'src/packages/**/*.md/*.jsx',
      ],
      rules: {
        'unused-imports/no-unused-imports': 0,
      },
    },
  ],
  rules: {
    'unused-imports/no-unused-imports': 2,

    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-script-url': 0,
    'no-unused-expressions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/static-property-placement': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
}
