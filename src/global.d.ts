interface Window {
  gatsbyRemarkCopyToClipboard: (
    copyButtonDom: HTMLElement,
    codeBlockDom: HTMLElement,
  ) => Promise<void>;
}
