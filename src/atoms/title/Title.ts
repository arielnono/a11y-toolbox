import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style } from './title.css';
import { globalStyle } from '../../styles/global.css';
import {
  HeaderLevel,
  HeaderHeight,
  HeaderLevelLiteral,
  sanitizeSemanticHeaderInput,
  sanitizeAppearanceInput,
} from './title.utils';

@customElement('a11y-title')
export class Title extends LitElement {
  @property({ type: String }) override title = 'My app';

  @property({ type: HeaderLevel }) semanticHeader = HeaderLevel.H1;

  @property({ type: HeaderHeight }) appearance = HeaderHeight.X_LARGE;

  static override styles = [...globalStyle, style];

  override render() {
    return HeaderLevelLiteral[sanitizeSemanticHeaderInput(this.semanticHeader)](
      sanitizeAppearanceInput(this.appearance),
      this.title
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a11y-title': Title;
  }
}
