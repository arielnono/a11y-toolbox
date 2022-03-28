import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style } from './title.css';
import { globalStyle } from '../../styles/global.css';

@customElement('a11y-title')
export class Title extends LitElement {
  @property({ type: String }) override title = 'My app';

  static override styles = [...globalStyle, style];

  override render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <p class="text">Edit <code>src/Title.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a11y-title': Title;
  }
}
