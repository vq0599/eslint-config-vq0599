module.exports = {
  extends: [
    'vqzfss',
    'plugin:vue/recommended'
  ],
  rules: {
    "vue/no-v-html": "off",
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".vue"
        ]
      }
    }
  },
}