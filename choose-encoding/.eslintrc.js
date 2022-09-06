module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "airbnb-base"
        ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project" : "./tsconfig.json",
        "ecmaVersion": "latest",
        "sourceType": "module",

    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "semi": true,
            "useTabs": false,
            "tabWidth": 2,
            "trailingComma": "es5",
            "printWidth": 80}],
        "comma-dangle" : "off"
    },
    "settings":{
        "react":{
            "version":"detect"
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
          },
    }
}
