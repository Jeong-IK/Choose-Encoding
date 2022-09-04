module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "airbnb-base",
        ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
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
            "trailingComma": "all",
            "printWidth": 80
        }],
    },
    "settings":{
        "react":{
            "version":"detect"
        }
    }
}
