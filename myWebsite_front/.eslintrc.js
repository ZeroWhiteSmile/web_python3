module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // 校验 .vue 文件
  plugins: ['vue'],
  // 自定义规则
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    //不允许出现不规则的空格
    'no-irregular-whitespace': 0,
    //不允许出现多余的空格
    'no-multi-spaces': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-unreachable': 0, //防止使用swtich语句 语法检查报错
    //强制使用单引号
    'quotes': ['error', 'single'],
    //强制不使用分号结尾
    'semi': ['error', 'never'],
    'indent': ["off", 2],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    // 函数前是否哟空格
    "space-before-function-paren": 1
  }
}
