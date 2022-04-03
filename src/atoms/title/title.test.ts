import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './Title.js';
import { Title } from './Title.js';
import {
  HeaderLevel,
  HeaderHeight,
  sanitizeSemanticHeaderInput,
  sanitizeAppearanceInput,
} from './title.utils.js';

describe('Title component', () => {
  const titleValue = 'text-value';
  const testSuite = [
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticHeader: '',
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: '',
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticHeader: 'toto',
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: 'toto',
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h2',
        value: "<h1 class='large'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h3',
        value: "<h1 class='medium'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h4',
        value: "<h1 class='small'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h5',
        value: "<h1 class='x-small'>text-value</h1>",
      },
      given: {
        semanticHeader: HeaderLevel.H1,
        appearance: HeaderHeight.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h1',
        value: "<h2 class='x-large'>text-value</h2>",
      },
      given: {
        semanticHeader: HeaderLevel.H2,
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h2',
        value: "<h2 class='large'>text-value</h2>",
      },
      given: {
        semanticHeader: HeaderLevel.H2,
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h3',
        value: "<h2 class='medium'>text-value</h2>",
      },
      given: {
        semanticHeader: HeaderLevel.H2,
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h4',
        value: "<h2 class='small'>text-value</h2>",
      },
      given: {
        semanticHeader: HeaderLevel.H2,
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h5',
        value: "<h2 class='x-small'>text-value</h2>",
      },
      given: {
        semanticHeader: HeaderLevel.H2,
        appearance: HeaderHeight.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h3',
        value: "<h3 class='x-large'>text-value</h3>",
      },
      given: {
        semanticHeader: HeaderLevel.H3,
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h2',
        value: "<h3 class='large'>text-value</h3>",
      },
      given: {
        semanticHeader: HeaderLevel.H3,
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h3',
        value: "<h3 class='medium'>text-value</h3>",
      },
      given: {
        semanticHeader: HeaderLevel.H3,
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h4',
        value: "<h3 class='small'>text-value</h3>",
      },
      given: {
        semanticHeader: HeaderLevel.H3,
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h5',
        value: "<h3 class='x-small'>text-value</h3>",
      },
      given: {
        semanticHeader: HeaderLevel.H3,
        appearance: HeaderHeight.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='x-large'>text-value</h4>",
      },
      given: {
        semanticHeader: HeaderLevel.H4,
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h2',
        value: "<h4 class='large'>text-value</h4>",
      },
      given: {
        semanticHeader: HeaderLevel.H4,
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='medium'>text-value</h4>",
      },
      given: {
        semanticHeader: HeaderLevel.H4,
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='small'>text-value</h4>",
      },
      given: {
        semanticHeader: HeaderLevel.H4,
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h5',
        value: "<h4 class='x-small'>text-value</h4>",
      },
      given: {
        semanticHeader: HeaderLevel.H4,
        appearance: HeaderHeight.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='x-large'>text-value</h5>",
      },
      given: {
        semanticHeader: HeaderLevel.H5,
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h2',
        value: "<h5 class='large'>text-value</h5>",
      },
      given: {
        semanticHeader: HeaderLevel.H5,
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='medium'>text-value</h5>",
      },
      given: {
        semanticHeader: HeaderLevel.H5,
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='small'>text-value</h5>",
      },
      given: {
        semanticHeader: HeaderLevel.H5,
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='x-small'>text-value</h5>",
      },
      given: {
        semanticHeader: HeaderLevel.H5,
        appearance: HeaderHeight.X_SMALL,
      },
    },
  ];

  testSuite.forEach(async testCase => {
    it(`should return the html of ${testCase.expected.label} when the semantic header provided is ${testCase.given.semanticHeader} and the appearance is ${testCase.given.appearance}`, async () => {
      const element: Title = await fixture(
        html`<a11y-title
          semanticHeader="${testCase.given.semanticHeader}"
          appearance="${testCase.given.appearance}"
          title="${titleValue}"
        >
        </a11y-title>`
      );
      const header = element.shadowRoot?.querySelector(
        sanitizeSemanticHeaderInput(testCase.given.semanticHeader)
      ) || {
        textContent: '',
        className: '',
      };

      expect(header).to.exist;
      expect(header.textContent).to.equal(titleValue);
      expect(header.className).to.equal(
        sanitizeAppearanceInput(testCase.given.appearance)
      );
    });

    it('should passes the a11y audit', async () => {
      const element: Title = await fixture(
        html`<a11y-title
          semanticHeader="${testCase.given.semanticHeader}"
          appearance="${testCase.given.appearance}"
          title="${titleValue}"
        >
        </a11y-title>`
      );
      await expect(element).to.be.accessible();
    });
  });
});
