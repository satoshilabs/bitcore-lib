# Browser Builds
BtcLib and most official submodules work in the browser, thanks to [browserify](http://browserify.org/) (some modules are not fully compatible with web browsers).

The easiest and recommended way to use them, is via [Bower](http://bower.io/), a browser package manager, and get the release bundles. For example, when building an app that uses `btc-lib` and `btc-mnemonic`, you do:

```sh
bower install btc-lib
bower install btc-mnemonic
```

You can also use a `bower.json` file to store the dependencies of your project:

```json
{
  "name": "Your app name",
  "version": "0.0.1",
  "license": "MIT",
  "dependencies": {
    "btc-lib": "^0.13.7",
    "btc-mnemonic": "^1.0.1"
  }
}
```

and run `bower install` to install the dependencies.

After this, you can include the bundled release versions in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <script src="bower_components/btc-lib/btc.min.js"></script>
  <script src="bower_components/btc-mnemonic/btc-mnemonic.min.js"></script>
</head>

<body>

  <script type="text/javascript">
    var btcLib = require('btc-lib');
    var Mnemonic = require('btc-mnemonic');
    // etc...
  </script>

</body>

</html>
```

## Building Custom Bundles
If you want to use a specific version of a module, instead of a release version (not recommended), you must run browserify yourself.  You can get a minified browser bundle by running the following on the project root folder.

```sh
browserify --require ./index.js:btc-lib | uglifyjs > btc-lib.min.js
```

```sh
browserify --require ./index.js:btc-mnemonic --external btc-lib | uglifyjs > btc-mnemonic.min.js
```

In many of the modules you can also run the command to build a browser bundle:
```sh
gulp browser
```
