module.exports = {
  trailingComma: 'es6', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  tabWidth: 2, // 缩进字节数
  semi: false, // 句尾添加分号
  singleQuote: true,
  tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
  eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  endOfLine: "auto", // 结尾是 \n \r \n\r auto
  parser: "babylon", // 格式化的解析器，默认是babylon
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  ignorePath: ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
};