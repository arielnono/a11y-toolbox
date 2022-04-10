import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style } from './heading.css';
import { globalStyle } from '../../styles/global.css';
import {
  HeadingLevel,
  HeadingAppearance,
  HeaderLevelLiteral,
  sanitizeSemanticHeaderInput,
  sanitizeAppearanceInput,
} from './heading.utils';

@customElement('a11y-heading')
export class Heading extends LitElement {
  @property({ type: String }) override title = 'My app';

  @property({ type: HeadingLevel }) semanticLevel = HeadingLevel.H1;

  @property({ type: HeadingAppearance }) appearance = HeadingAppearance.X_LARGE;

  static override styles = [...globalStyle, style];

  override render() {
    return HeaderLevelLiteral[sanitizeSemanticHeaderInput(this.semanticLevel)](
      sanitizeAppearanceInput(this.appearance),
      this.title
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a11y-heading': Heading;
  }
}
