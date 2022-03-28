import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './Title.js';
import { Title } from './Title.js';

describe('Title component', () => {
  let element: Title;
  beforeEach(async () => {
    element = await fixture(html`<a11y-title></a11y-title>`);
  });

  it('should renders a h1', () => {
    const h1 = element.shadowRoot?.querySelector('h1') || { textContent: '' };
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('should passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
