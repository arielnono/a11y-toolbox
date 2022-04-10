import { expect } from '@open-wc/testing';
import {
  sanitizeSemanticHeaderInput,
  HeadingLevel,
  HeadingAppearance,
  sanitizeAppearanceInput,
} from './heading.utils';

describe('sanitizeSemanticHeaderInput function', () => {
  const testSuite = [
    {
      expected: {
        value: HeadingLevel.H1,
      },
      given: {
        semanticLevel: '',
      },
    },
    {
      expected: {
        value: HeadingLevel.H1,
      },
      given: {
        semanticLevel: HeadingLevel.H1,
      },
    },
    {
      expected: {
        value: HeadingLevel.H2,
      },
      given: {
        semanticLevel: HeadingLevel.H2,
      },
    },
    {
      expected: {
        value: HeadingLevel.H3,
      },
      given: {
        semanticLevel: HeadingLevel.H3,
      },
    },
    {
      expected: {
        value: HeadingLevel.H4,
      },
      given: {
        semanticLevel: HeadingLevel.H4,
      },
    },
    {
      expected: {
        value: HeadingLevel.H5,
      },
      given: {
        semanticLevel: HeadingLevel.H5,
      },
    },
  ];
  testSuite.forEach(testCase => {
    it(`should return a ${testCase.expected.value} semanticLevel when the provided value is ${testCase.given.semanticLevel}`, () => {
      expect(
        sanitizeSemanticHeaderInput(testCase.given.semanticLevel)
      ).to.equal(testCase.expected.value);
    });
  });
});

describe('sanitizeAppearanceInput function', () => {
  const testSuite = [
    {
      expected: {
        value: HeadingAppearance.X_LARGE,
      },
      given: {
        appearance: '',
      },
    },
    {
      expected: {
        value: HeadingAppearance.X_LARGE,
      },
      given: {
        appearance: 'toto',
      },
    },
    {
      expected: {
        value: HeadingAppearance.X_LARGE,
      },
      given: {
        appearance: HeadingAppearance.X_LARGE,
      },
    },
    {
      expected: {
        value: HeadingAppearance.LARGE,
      },
      given: {
        appearance: HeadingAppearance.LARGE,
      },
    },
    {
      expected: {
        value: HeadingAppearance.MEDIUM,
      },
      given: {
        appearance: HeadingAppearance.MEDIUM,
      },
    },
    {
      expected: {
        value: HeadingAppearance.SMALL,
      },
      given: {
        appearance: HeadingAppearance.SMALL,
      },
    },
    {
      expected: {
        value: HeadingAppearance.X_SMALL,
      },
      given: {
        appearance: HeadingAppearance.X_SMALL,
      },
    },
  ];
  testSuite.forEach(testCase => {
    it(`should return a ${testCase.expected.value} appearance when the provided value is ${testCase.given.appearance}`, () => {
      expect(sanitizeAppearanceInput(testCase.given.appearance)).to.equal(
        testCase.expected.value
      );
    });
  });
});
