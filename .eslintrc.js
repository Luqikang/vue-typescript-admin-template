module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    /** semi 为0 表示 ts可以加;也可以不加; */
    semi: [2, 'always'],
    /** 配置每行的属性数量 */
    'vue/max-attributes-per-line': ['error', {
      singleline: 6,
      multiline: {
        max: 6,
        allowFirstLine: true
      }
    }],
    'no-multiple-empty-lines': [1, { max: 1 }], // 空行最多不能超过2行
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'padded-blocks': 1, // 块语句内行首行尾是否要空行
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-const': 'off', // 未使用的值不强制化转换成const
    '@typescript-eslint/member-delimiter-style': ['error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
