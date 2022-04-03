/* eslint-disable no-shadow */
import { html, TemplateResult } from 'lit';

export enum HeaderLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export enum HeaderHeight {
  X_LARGE = 'x_large',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  X_SMALL = 'x_small',
}

export const HeaderLevelLiteral = {
  [HeaderLevel.H1]: (
    appearance: HeaderHeight,
    value: string
  ): TemplateResult<1> => html`<h1 class="${appearance}">${value}</h1>`,
  [HeaderLevel.H2]: (
    appearance: HeaderHeight,
    value: string
  ): TemplateResult<1> => html`<h2 class="${appearance}">${value}</h2>`,
  [HeaderLevel.H3]: (
    appearance: HeaderHeight,
    value: string
  ): TemplateResult<1> => html`<h3 class="${appearance}">${value}</h3>`,
  [HeaderLevel.H4]: (
    appearance: HeaderHeight,
    value: string
  ): TemplateResult<1> => html`<h4 class="${appearance}">${value}</h4>`,
  [HeaderLevel.H5]: (
    appearance: HeaderHeight,
    value: string
  ): TemplateResult<1> => html`<h5 class="${appearance}">${value}</h5>`,
};

export const sanitizeSemanticHeaderInput = (
  semanticHeaderToSanitize: string
): HeaderLevel =>
  Object.keys(HeaderLevel).includes(
    semanticHeaderToSanitize.toLocaleUpperCase()
  )
    ? (semanticHeaderToSanitize as HeaderLevel)
    : HeaderLevel.H1;

export const sanitizeAppearanceInput = (
  appearanceToSanitize: string
): HeaderHeight =>
  Object.keys(HeaderHeight).includes(appearanceToSanitize.toLocaleUpperCase())
    ? (appearanceToSanitize as HeaderHeight)
    : HeaderHeight.X_LARGE;
