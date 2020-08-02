module.exports = {
  parser: "babel-eslint",
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  rules: {
    // 禁止重复的空格
    "no-multi-spaces": "error",

    // 禁止尾部空格
    "no-trailing-spaces": "error",

    // import区域下空行
    "import/newline-after-import": ["error", { "count": 1 }],

    // 缩进2
    "indent": ["error", 2],
  }
}