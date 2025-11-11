module.exports = {
  extends: [
    'eslint:recommended',               // 默认 ESLint 推荐规则
    'plugin:vue/vue3-recommended',      // Vue 3 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    '@nuxtjs/eslint-config',           // Nuxt 3 推荐的 ESLint 配置
  ],
  parserOptions: {
    ecmaVersion: 2020,                 // 支持 ECMAScript 2020 特性
    sourceType: 'module',              // 允许使用模块
    ecmaFeatures: {
      jsx: true,                       // 启用 JSX 特性
    },
  },
  env: {
    browser: true,                     // 启用浏览器环境
    node: true,                        // 启用 Node 环境
    es2021: true,                      // 支持 ES2021
  },
  plugins: [
    'vue',                             // Vue 插件
    '@typescript-eslint',              // TypeScript 插件
  ],
  rules: {
    // 缩进设置为 2 个空格
    'indent': ['error', 2],

    // 语句末尾添加分号
    'semi': ['error', 'always'],

    // template 中的双括号前后需要空 1 格
    'vue/multiline-html-element-content-newline': ['error', {
      'ignores': ['pre', 'textarea'] // 忽略 pre 和 textarea 标签
    }],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false, // 不允许属性间多余空格
    }],
    'vue/max-len': ['error', {
      'code': 120,               // 代码一行最大字符数
      'template': 9000,          // template 中不限制
      'ignoreTemplateLiterals': true,
      'ignoreUrls': true,        // 忽略 URL 长度
      'ignoreStrings': true,
      'ignoreRegExpLiterals': true,
    }],
    
    // TypeScript 函数关键字后面必须有一个空格
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // 等号两侧必须有空格
    'space-infix-ops': 'error',


    // 大括号前后必须有空格
    'block-spacing': ['error', 'always'],

    // 中括号和小括号不允许有空格
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-magic-numbers': 'off', // 禁用 magic numbers，可以自定义规则

    // 禁用 'any' 类型
    '@typescript-eslint/no-explicit-any': 'warn',

    'vue/no-multiple-template-root': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // TypeScript 文件的一些额外规则
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
