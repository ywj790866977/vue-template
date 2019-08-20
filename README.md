# 一个 vue-cli 的模板

主要是添加了一些常用的功能

1. 添加了 eslint+prettier 的一些设置,主要是统一代码风格
2. 添加了 axios 模块
3. 添加了 Elment 模块

## 配合 vscode 设置

```
"vetur.validation.template": false,
    "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        }
    ],
    "eslint.autoFixOnSave": true,
    "editor.formatOnSave": true,
    "files.autoSave": "onFocusChange"
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
