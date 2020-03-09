module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    /**
     * “off”或者0: 不启用这个规则
     * “warn”或者1: 出现问题会有警告
     * “error”或者2: 出现问题会报错
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制使用单引号
    quotes: ['error', 'single'],
    // 强制不使用分号结尾
    semi: ['error', 'never'],
    // 空格
    'indent': 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        // 'baseIndent': 1 // 顶级缩进 默认是 0
      }
    ],
    // 末尾禁止逗号
    'comma-dangle': [2, 'never'],
    // 禁止 末尾保留一行空行
    'eol-last': 2,
    // 禁止多行空格
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // 禁用行尾空白
    'no-trailing-spaces': 2,
    // 禁止使用分号代替 ASI
    // 'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 操作符 前后空格
    'space-infix-ops': 2,
    // 该规则强制 words 一元操作符后空格和 nonwords 一元操作符之前或之后的空格的一致性。
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // /* 空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // 关闭定义变量未使用提示/报错
    'no-unused-vars': 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "parser": "flow"
      }
    ]
  }
}
