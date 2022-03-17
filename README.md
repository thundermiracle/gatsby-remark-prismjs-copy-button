# gatsby-remark-prismjs-copy-button

[![npm version](https://badge.fury.io/js/gatsby-remark-prismjs-copy-button.svg)](https://badge.fury.io/js/gatsby-remark-prismjs-copy-button)

Add copy button to your prismjs' code blocks.

![copy-button-preview](./assets/copy-preview.gif)

## How to install

```shell
npm install --save gatsby-transformer-remark gatsby-remark-prismjs gatsby-remark-prismjs-copy-button
```

## How to use

Add it to `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-prismjs-copy-button`],
      },
    },
  ],
};
```

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
