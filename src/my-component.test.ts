import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { MyComponent } from './MyComponent.js';
import './my-component.js';

describe('MyComponent', () => {
  let element: MyComponent;
  beforeEach(async () => {
    element = await fixture(html`<my-component></my-component>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    // eslint-disable-next-line no-unused-expressions
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
