const visit = require('unist-util-visit');

const COPY_BUTTON_ADDED = 'copy-button-added-';

module.exports = function gatsbyRemarkPrismCopyButton(
  { markdownAST },
  {
    buttonContainerClass: customButtonContainerClass,
    buttonClass: customButtonClass,
  },
) {
  visit(markdownAST, 'code', (node, index, parent) => {
    const lang = node.lang || '';

    if (lang.startsWith(COPY_BUTTON_ADDED)) {
      node.lang = lang.substring(COPY_BUTTON_ADDED.length);
      return;
    }

    const buttonClass = ['gatsby-remark-prismjs-copy-button', customButtonClass]
      .filter(Boolean)
      .join(' ');
    const buttonContainerClass = [
      'gatsby-remark-prismjs-copy-button-container',
      customButtonContainerClass,
    ]
      .filter(Boolean)
      .join(' ');

    let code = parent.children[index].value;
    code = code
      .replace(/"/gm, '&quot;')
      .replace(/`/gm, '\\`')
      .replace(/\$/gm, '\\$');

    const buttonNode = {
      type: 'html',
      value: `
          <div class="${buttonContainerClass}">
            <div class="${buttonClass}" tabindex="0" role="button" aria-pressed="false" onclick="gatsbyRemarkCopyToClipboard(\`${code}\`, this)">
              Copy
            </div>
          </div>
          `,
    };

    parent.children.splice(index, 0, buttonNode);

    node.lang = `${COPY_BUTTON_ADDED}${lang}`;
  });

  return markdownAST;
};
