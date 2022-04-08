import { css } from 'lit';

export const DEVICE_BOUNDARIES = {
  mobileLowerBoundary: 320,
  mobileUpperBoundary: 480,
  tabletLowerBoundary: 481,
  tabletUpperBoundary: 768,
  smallDesktopLowerBoundary: 769,
  smallDesktopUpperBoundary: 1024,
  largeDesktopLowerBoundary: 1025,
  largeDesktopUpperBoundary: 1440,
  tvLowerBoundary: 1441,
};

export const variables = css`
  :host {
    --headings-font-family: 'merriweather-bold', Georgia, 'Times New Roman',
      serif;
    --body-font-family: 'Atkinson-regular', helvetica, Verdana, sans-serif;
    --base-font-size: 1rem;
    --spacing-unit: 8px;
  }
`;
