import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './Heading.js';
import { Heading } from './Heading.js';
import {
  HeadingLevel,
  HeadingAppearance,
  sanitizeSemanticHeaderInput,
  sanitizeAppearanceInput,
} from './heading.utils.js';

describe('Heading component', () => {
  const titleValue = 'text-value';
  const testSuite = [
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticLevel: '',
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: '',
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticLevel: 'toto',
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: 'toto',
      },
    },
    {
      expected: {
        label: 'h1 with the style of h1',
        value: "<h1 class='x-large'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h2',
        value: "<h1 class='large'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h3',
        value: "<h1 class='medium'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h4',
        value: "<h1 class='small'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        label: 'h1 with the style of h5',
        value: "<h1 class='x-small'>text-value</h1>",
      },
      given: {
        semanticLevel: HeadingLevel.H1,
        appearance: HeadingAppearance.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h1',
        value: "<h2 class='x-large'>text-value</h2>",
      },
      given: {
        semanticLevel: HeadingLevel.H2,
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h2',
        value: "<h2 class='large'>text-value</h2>",
      },
      given: {
        semanticLevel: HeadingLevel.H2,
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h3',
        value: "<h2 class='medium'>text-value</h2>",
      },
      given: {
        semanticLevel: HeadingLevel.H2,
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h4',
        value: "<h2 class='small'>text-value</h2>",
      },
      given: {
        semanticLevel: HeadingLevel.H2,
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        label: 'h2 with the style of h5',
        value: "<h2 class='x-small'>text-value</h2>",
      },
      given: {
        semanticLevel: HeadingLevel.H2,
        appearance: HeadingAppearance.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h3',
        value: "<h3 class='x-large'>text-value</h3>",
      },
      given: {
        semanticLevel: HeadingLevel.H3,
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h2',
        value: "<h3 class='large'>text-value</h3>",
      },
      given: {
        semanticLevel: HeadingLevel.H3,
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h3',
        value: "<h3 class='medium'>text-value</h3>",
      },
      given: {
        semanticLevel: HeadingLevel.H3,
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h4',
        value: "<h3 class='small'>text-value</h3>",
      },
      given: {
        semanticLevel: HeadingLevel.H3,
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        label: 'h3 with the style of h5',
        value: "<h3 class='x-small'>text-value</h3>",
      },
      given: {
        semanticLevel: HeadingLevel.H3,
        appearance: HeadingAppearance.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='x-large'>text-value</h4>",
      },
      given: {
        semanticLevel: HeadingLevel.H4,
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h2',
        value: "<h4 class='large'>text-value</h4>",
      },
      given: {
        semanticLevel: HeadingLevel.H4,
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='medium'>text-value</h4>",
      },
      given: {
        semanticLevel: HeadingLevel.H4,
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h4',
        value: "<h4 class='small'>text-value</h4>",
      },
      given: {
        semanticLevel: HeadingLevel.H4,
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        label: 'h4 with the style of h5',
        value: "<h4 class='x-small'>text-value</h4>",
      },
      given: {
        semanticLevel: HeadingLevel.H4,
        appearance: HeadingAppearance.X_SMALL,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='x-large'>text-value</h5>",
      },
      given: {
        semanticLevel: HeadingLevel.H5,
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h2',
        value: "<h5 class='large'>text-value</h5>",
      },
      given: {
        semanticLevel: HeadingLevel.H5,
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='medium'>text-value</h5>",
      },
      given: {
        semanticLevel: HeadingLevel.H5,
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='small'>text-value</h5>",
      },
      given: {
        semanticLevel: HeadingLevel.H5,
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        label: 'h5 with the style of h5',
        value: "<h5 class='x-small'>text-value</h5>",
      },
      given: {
        semanticLevel: HeadingLevel.H5,
        appearance: HeadingAppearance.X_SMALL,
      },
    },
  ];

  testSuite.forEach(async testCase => {
    it(`should return the html of ${testCase.expected.label} when the semantic header provided is ${testCase.given.semanticLevel} and the appearance is ${testCase.given.appearance}`, async () => {
      const element: Heading = await fixture(
        html`<a11y-heading
          semanticLevel="${testCase.given.semanticLevel}"
          appearance="${testCase.given.appearance}"
          title="${titleValue}"
        >
        </a11y-heading>`
      );
      const header = element.shadowRoot?.querySelector(
        sanitizeSemanticHeaderInput(testCase.given.semanticLevel)
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
      const element: Heading = await fixture(
        html`<a11y-heading
          semanticLevel="${testCase.given.semanticLevel}"
          appearance="${testCase.given.appearance}"
          title="${titleValue}"
        >
        </a11y-heading>`
      );
      await expect(element).to.be.accessible();
    });
  });
});
