<div align="center">
  <h1>sort-js-object</h1>
  ♠️ ♥️ Traverse and sort JS AST object keys ♦️ ♣️
</div>

<br />

<hr />

<div align="center">
  <img src="https://github.com/Debens/sort-js-object/blob/master/example/sort-js-object.gif" />
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

### Using Command Palette (CMD/CTRL + Shift + P)

```
1. Highlight a valid code block
2. CMD + Shift + P -> Sort JS
```

## Support

All of ES6, Typescript and legacy decorators should be support. Pull requests are welcome!

## How does it work?

sort-js-object find the highlighted text in the current editor, and using this text builds a AST using [@babel/parser](https://babeljs.io/docs/en/babel-parser). Then using [@babel/traverse](https://babeljs.io/docs/en/babel-traverse) sorts all the object nodes in the tree.
