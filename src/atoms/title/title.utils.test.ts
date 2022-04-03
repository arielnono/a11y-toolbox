import { expect } from '@open-wc/testing';
import {
  sanitizeSemanticHeaderInput,
  HeaderLevel,
  HeaderHeight,
  sanitizeAppearanceInput,
} from './title.utils';

describe('sanitizeSemanticHeaderInput function', () => {
  const testSuite = [
    {
      expected: {
        value: HeaderLevel.H1,
      },
      given: {
        semanticHeader: '',
      },
    },
    {
      expected: {
        value: HeaderLevel.H1,
      },
      given: {
        semanticHeader: HeaderLevel.H1,
      },
    },
    {
      expected: {
        value: HeaderLevel.H2,
      },
      given: {
        semanticHeader: HeaderLevel.H2,
      },
    },
    {
      expected: {
        value: HeaderLevel.H3,
      },
      given: {
        semanticHeader: HeaderLevel.H3,
      },
    },
    {
      expected: {
        value: HeaderLevel.H4,
      },
      given: {
        semanticHeader: HeaderLevel.H4,
      },
    },
    {
      expected: {
        value: HeaderLevel.H5,
      },
      given: {
        semanticHeader: HeaderLevel.H5,
      },
    },
  ];
  testSuite.forEach(testCase => {
    it(`should return a ${testCase.expected.value} semanticHeader when the provided value is ${testCase.given.semanticHeader}`, () => {
      expect(
        sanitizeSemanticHeaderInput(testCase.given.semanticHeader)
      ).to.equal(testCase.expected.value);
    });
  });
});

describe('sanitizeAppearanceInput function', () => {
  const testSuite = [
    {
      expected: {
        value: HeaderHeight.X_LARGE,
      },
      given: {
        appearance: '',
      },
    },
    {
      expected: {
        value: HeaderHeight.X_LARGE,
      },
      given: {
        appearance: 'toto',
      },
    },
    {
      expected: {
        value: HeaderHeight.X_LARGE,
      },
      given: {
        appearance: HeaderHeight.X_LARGE,
      },
    },
    {
      expected: {
        value: HeaderHeight.LARGE,
      },
      given: {
        appearance: HeaderHeight.LARGE,
      },
    },
    {
      expected: {
        value: HeaderHeight.MEDIUM,
      },
      given: {
        appearance: HeaderHeight.MEDIUM,
      },
    },
    {
      expected: {
        value: HeaderHeight.SMALL,
      },
      given: {
        appearance: HeaderHeight.SMALL,
      },
    },
    {
      expected: {
        value: HeaderHeight.X_SMALL,
      },
      given: {
        appearance: HeaderHeight.X_SMALL,
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
