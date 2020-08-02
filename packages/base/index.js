module.exports = {
  parser: "babel-eslint",
  extends: [
    'eslint:recommended',
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

  }
}