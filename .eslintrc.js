module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'react-redux',
    'prettier'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'strict': ['off', 'safe'],
    // disable es6 rules -- start
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-unresolved": [
      "off",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/react-in-jsx-scope": [
      "off",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "constructor-super": "off",
    "generator-star-spacing": "off",
    "no-class-assign": "off",
    "no-confusing-arrow": "off",
    "no-const-assign": "off",
    "no-dupe-class-members": "off",
    "no-duplicate-imports": "off",
    "no-new-symbol": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "off",
    "no-useless-computed-key": "off",
    "no-useless-constructor": "off",
    "no-useless-rename": "off",
    "no-var": "off",
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "off",
    "prefer-reflect": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "require-yield": "off",
    "rest-spread-spacing": "off",
    "sort-imports": "off",
    "symbol-description": "off",
    "template-curly-spacing": "off",
    "yield-star-spacing": "off",
    "global-require": "off",
    "no-unresolved": "off",
    "no-console": "off",
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
    'react-redux/mapDispatchToProps-returns-object': 'off',
    'react-redux/prefer-separate-component-file': 'off',
    'css-modules/no-undef-class': 'off',
    'import/prefer-default-export': 'off',
    'tsx-filename-extension': 'off',
    'jsx-filename-extension': 'off',
    'filenames/match-exported': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    // disable es6 rules -- end


    'no-debugger': 'error',
    'no-undefined': 'warn',
    'comma-dangle': ['warn', 'never'],
    'semi': ['warn', 'always'],
    'guard-for-in': 'error',
    'no-eval': 'error',
    'no-with': 'error',
    'valid-typeof': 'error',
    'no-unused-vars': 'error',
    'no-continue': 'warn',
    'no-extra-semi': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': 'warn',
    'max-len': ['warn', 200, 4],
    'react/prefer-es6-class': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
