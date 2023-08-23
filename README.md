# eslint-config-react-stockulus

This packages is a set of eslint rules, recommended for all React Projects.

ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline. [More Info](https://eslint.org)

This Project is also bundled with [Prettier](https://prettier.io/) in order to ensure company wide Code formatting.

## Usage

```bash
yarn add eslint typescript eslint-config-react-stockulus -D
```

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-react-stockulus"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-react-stockulus"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-react-stockulus'
}
```

## VS Code

Its recommended to install [eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
and configure your settings like

```json
    "eslint.alwaysShowStatus": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

```

You properly have a Prettier Extension installed. This might cause conflicts with the eslint formatter. I'd recommend to deactivate or uninstall it. 

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- React environment
- TailwindCSS
- parser: typescript

## Developer instructions

### Requirements

- node.js (18 recommended)
- yarn

### Development

```bash
git clone git@github.com:stockulus/eslint-config-react.git
cd eslint-config-react
yarn
yarn test
```

other useful scripts

```bash
yarn run
```

or check [package.json](/package.json)

### new Release

Create a Tag on master with

```bash
yarn version:patch
yarn version:minor
yarn version:major
```
