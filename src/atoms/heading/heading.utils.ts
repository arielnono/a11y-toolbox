/* eslint-disable no-shadow */
import { html, TemplateResult } from 'lit';

export enum HeadingLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export enum HeadingAppearance {
  X_LARGE = 'x_large',
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  X_SMALL = 'x_small',
}

export const HeaderLevelLiteral = {
  [HeadingLevel.H1]: (
    appearance: HeadingAppearance,
    value: string
  ): TemplateResult<1> => html`<h1 class="${appearance}">${value}</h1>`,
  [HeadingLevel.H2]: (
    appearance: HeadingAppearance,
    value: string
  ): TemplateResult<1> => html`<h2 class="${appearance}">${value}</h2>`,
  [HeadingLevel.H3]: (
    appearance: HeadingAppearance,
    value: string
  ): TemplateResult<1> => html`<h3 class="${appearance}">${value}</h3>`,
  [HeadingLevel.H4]: (
    appearance: HeadingAppearance,
    value: string
  ): TemplateResult<1> => html`<h4 class="${appearance}">${value}</h4>`,
  [HeadingLevel.H5]: (
    appearance: HeadingAppearance,
    value: string
  ): TemplateResult<1> => html`<h5 class="${appearance}">${value}</h5>`,
};

export const sanitizeSemanticHeaderInput = (
  semanticHeaderToSanitize: string
): HeadingLevel =>
  Object.keys(HeadingLevel).includes(
    semanticHeaderToSanitize.toLocaleUpperCase()
  )
    ? (semanticHeaderToSanitize as HeadingLevel)
    : HeadingLevel.H1;

export const sanitizeAppearanceInput = (
  appearanceToSanitize: string
): HeadingAppearance =>
  Object.keys(HeadingAppearance).includes(
    appearanceToSanitize.toLocaleUpperCase()
  )
    ? (appearanceToSanitize as HeadingAppearance)
    : HeadingAppearance.X_LARGE;
