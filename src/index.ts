import { visit } from 'unist-util-visit';

const COPY_BUTTON_ADDED = 'copy-button-added-';

export default function gatsbyRemarkPrismCopyButton(
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

    const buttonNode = {
      type: 'html',
      value: `
          <div class="${buttonContainerClass}">
            <div class="${buttonClass}" tabindex="0" role="button" aria-pressed="false" onclick="gatsbyRemarkCopyToClipboard(this, this.parentNode.nextElementSibling)">
              Copy
            </div>
          </div>
          `,
    };

    parent.children.splice(index, 0, buttonNode);

    node.lang = `${COPY_BUTTON_ADDED}${lang}`;
  });

  return markdownAST;
}
