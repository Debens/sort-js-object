<div align="center">
  <h1>sort-js-object</h1>

♠️ ♥️ Traverse and sort JS AST object keys ♦️ ♣️

<p align="center">
    <a href="https://github.com/Debens/sort-js-object/actions">
      <img src="https://action-badges.now.sh/debens/sort-js-object" alt="Github Workflow" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=debens.sort-js-object">
      <img src="https://vsmarketplacebadge.apphb.com/version/debens.sort-js-object.svg" alt="VS Code Marketplace" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=debens.sort-js-object">
      <img alt="VS Code Marketplace Downloads" src="https://img.shields.io/visual-studio-marketplace/d/debens.sort-js-object">
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=debens.sort-js-object">
      <img src="https://vsmarketplacebadge.apphb.com/installs/debens.sort-js-object.svg" alt="VS Code Marketplace Installs" />
    </a>
</p>

</div>

<hr />

<div align="center">
  <img src="https://github.com/Debens/sort-js-object/raw/master/example/sort-js-object.gif" />
</div>

<hr />

## Installation

Install through VS Code extensions. Search for `Sort JS Object`

[Visual Studio Code Market Place: Sort JS Objects](https://marketplace.visualstudio.com/items?itemName=debens.sort-js-object)

Can also be installed in VS Code: Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
ext install debens.sort-js-object
```

## Usage

Highlight a valid block of JS/TS code and open the command palette using `cmd + shift + p`, search for `Sort JS` and hit enter.

### Hotkeys

-   Format highlighted code: `alt + s`

## Support

All of ES6, Typescript and legacy decorators should be support. Pull requests are welcome!

## How does it work?

sort-js-object finds the highlighted text in the current editor, then using this text builds a AST using [@babel/parser](https://babeljs.io/docs/en/babel-parser), then reorder node arrays on tree using [@babel/traverse](https://babeljs.io/docs/en/babel-traverse).
