/* eslint-env node */
module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'prettier',
    'tailwindcss'
  ],
  globals: {
    process: true
  },
  settings: {
    react: {
      version: 'detect',
      pragma: 'React'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'jsx-a11y/no-autofocus': 'off',
    'import/default': 0,
    'import/no-unresolved': 'off',
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'no-undef': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        quoteProps: 'as-needed',
        trailingComma: 'none',
        bracketSpacing: true,
        semi: false,
        useTabs: false,
        proseWrap: 'never',
        endOfLine: 'auto',
        jsxBracketSameLine: true
      }
    ]
  }
}
