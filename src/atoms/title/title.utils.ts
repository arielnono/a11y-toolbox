/* eslint-disable no-shadow */
export enum HeaderLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export enum HeaderHeight {
  X_LARGE = 'x-large',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  X_SMALL = 'x-small',
}

export const getTitleHtml = (
  semanticHeader: HeaderLevel,
  appearance: HeaderHeight,
  value: string
): string =>
  `<${semanticHeader} class='${appearance}'>${value}</${semanticHeader}>`;
