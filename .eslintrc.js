module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'simple-import-sort',
    'promise',
    'no-loops',
    'max-params-no-constructor',
  ],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {

    /* common rules */
    'import/no-extraneous-dependencies': [
      'error',
      {
        'packageDir': './'
      }
    ],

    /* prettier rules */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
      }
    ],

    /* error rules ts */
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['StrictPascalCase'],
        'prefix': ['I']
      },
      {
        'selector': 'typeAlias',
        'format': ['StrictPascalCase'],
        'prefix': ['T']
      },
      {
        'selector': 'enum',
        'format': ['StrictPascalCase'],
        'suffix': ['Enum']
      },
      {
        'selector': 'class',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': 'class',
        'modifiers': ['abstract'],
        'format': ['StrictPascalCase'],
        'prefix': ['A']
      },
      {
        'selector': 'classMethod',
        'format': ['strictCamelCase'],
      },

      /* Enforce that all variables are either in camelCase or UPPER_CASE */
      {
        'selector': 'variable',
        'format': ['strictCamelCase', 'UPPER_CASE']
      },

      /* Enforce that boolean variables are prefixed with an allowed verb */
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': [
          'StrictPascalCase',
          'UPPER_CASE',
        ],
        'prefix': ['is', 'has', 'IS_', 'HAS_'],
      },
    ],
    'max-classes-per-file': ['error', 1],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    "no-param-reassign": [
      "error",
      {
        "props": true,
        'ignorePropertyModificationsFor': ['sum', 'acc', 'accum', 'req', 'request']
      }
    ],
    indent: ['error', 2],
    'prettier/prettier': [2, { useTabs: false }],

    /* error rules js */
    'no-loops/no-loops': 2,

    /* error rules node */
    'no-sync': 'error',

    /* error rules code-style */
    'no-console': 'error',
    'newline-before-return': 'error',
    'no-restricted-imports': ['error', {'patterns': ['src/*']}],
    'no-empty-function': ['error', { 'allow': ['constructors'] }],
    'max-params-no-constructor/max-params-no-constructor': ['error', 4],
    'array-bracket-spacing': 2,
    'array-callback-return': 2,
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'curly': [
      'error',
      'multi-line',
      'consistent',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        'null': 'ignore',
      },
    ],
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],
    'no-confusing-arrow': [
      'error',
      {
        'allowParens': true,
      }
    ],
    'no-constant-condition': [
      'error',
      {
        'checkLoops': false,
      }
    ],

    /* disabled rules */
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-var': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-shadow': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': 'off',
    'operator-linebreak': 'off',
    'brace-style': 'off',
    'import/prefer-default-export': 'off',
  },
};
