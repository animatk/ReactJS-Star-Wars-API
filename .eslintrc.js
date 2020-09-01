module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
    },
    plugins: [
      'react',
    ],
    rules: {
      semi: ['error', 'never'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': [0],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          "labelComponents": [],
          "labelAttributes": [],
          "controlComponents": [],
          "assert": "either",
          "depth": 25
        }
      ],
    },
  }