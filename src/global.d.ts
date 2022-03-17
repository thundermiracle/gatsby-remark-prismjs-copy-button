interface Window {
  gatsbyRemarkCopyToClipboard: (
    str: string,
    copyButtonDom: HTMLElement,
  ) => Promise<void>;
}
