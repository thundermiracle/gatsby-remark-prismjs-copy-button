# gatsby-remark-prismjs-copy-button

[![npm version](https://badge.fury.io/js/gatsby-remark-prismjs-copy-button.svg)](https://badge.fury.io/js/gatsby-remark-prismjs-copy-button)

Add copy button to your prismjs' code blocks.

![copy-button-preview](https://raw.githubusercontent.com/thundermiracle/gatsby-remark-prismjs-copy-button/HEAD/assets/copy-preview.gif)

## How to make it work

[https://thundermiracle.com/blog/en/2022-03-13-gatsby-add-copy-button-to-code-block/](https://thundermiracle.com/blog/en/2022-03-13-gatsby-add-copy-button-to-code-block/)

## How to install

```shell
npm install --save gatsby-transformer-remark gatsby-remark-prismjs gatsby-remark-prismjs-copy-button
```

## How to use

1. Add it to `gatsby-config.js`:

   ※ **NOTE:** You _MUST_ add `gatsby-remark-prismjs-copy-button` before `gatsby-remark-prismjs`, as `gatsby-remark-prismjs` will transform Code MarkdownASTs to HTML. So `gatsby-remark-prismjs-copy-button` will unable to find the Code MarkdownASTs to add copy button.

   ```javascript
   module.exports = {
     plugins: [
       {
         resolve: `gatsby-transformer-remark`,
         options: {
           plugins: [
             `gatsby-remark-prismjs-copy-button`,
             `gatsby-remark-prismjs`,
           ],
         },
       },
     ],
   };
   ```

2. In your template.js.

   ```javascript
   export const query = graphql`
     query ($slug: String!) {
       markdownRemark(fields: { slug: { eq: $slug } }) {
         html
       }
     }
   `;

   export default function Template({ data }) {
     return (
       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
     );
   }
   ```

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
