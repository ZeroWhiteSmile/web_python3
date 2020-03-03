module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色。
    "rule-empty-line-before": null, // 在规则前需要或禁止使用空行（可自动修复）。
    "color-hex-length": "long", // 指定十六进制颜色的短或长表示法（可自动修复）。
    "color-hex-case": "lower", // 指定十六进制颜色的小写或大写（可自动修复）。
    "unit-whitelist": ["em", "rem", "%", "s", "px"], // 指定允许的单位白名单。
    "declaration-colon-newline-after": null, // 在冒号声明（Autofixable）后需要换行符或禁止使用空格。
    "function-whitespace-after": "always" // 函数后要求或禁止使用空格。
  }
}
