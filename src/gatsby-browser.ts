import './styles.css';

export const onClientEntry = () => {
  window.gatsbyRemarkCopyToClipboard = async (copyButtonDom, codeBlockDom) => {
    if (copyButtonDom.textContent === 'Copied') {
      return;
    }
    navigator.clipboard.writeText(codeBlockDom.textContent || '');

    copyButtonDom.classList.add('copied');
    copyButtonDom.textContent = 'Copied!';

    await new Promise((resolve) => {
      setTimeout(() => {
        copyButtonDom.classList.remove('copied');
        copyButtonDom.textContent = 'Copy';
        resolve('done');
      }, 1500);
    });
  };
};
