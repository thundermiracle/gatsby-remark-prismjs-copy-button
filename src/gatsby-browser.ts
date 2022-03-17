import './styles.css';

export const onClientEntry = () => {
  window.gatsbyRemarkCopyToClipboard = async (str, copyButtonDom) => {
    if (copyButtonDom.textContent === 'Copied') {
      return;
    }
    navigator.clipboard.writeText(str);

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
