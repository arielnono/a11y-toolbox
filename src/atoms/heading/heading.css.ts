import { css } from 'lit';

// https://www.layoutgridcalculator.com/typographic-scale/
// https://type-scale.com/
// Major second used for mobile
// Minor third used for tablet
// major third used for small desktop
// perfect fourth used for large desktop
// augmented fourth used for tv

import { DEVICE_BOUNDARIES } from '../../styles/variables.css';

export const style = css`
  :host {
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--headings-font-family);
    line-height: 1.3;
    margin: calc(var(--spacing-unit) * 2);
  }

  @media (min-width: ${DEVICE_BOUNDARIES.tvLowerBoundary}px) {
    .x_large {
      font-size: 4.209rem;
    }

    .large {
      font-size: 3.157rem;
    }

    .medium {
      font-size: 2.369rem;
    }

    .small {
      font-size: 1.777rem;
    }

    .x_small {
      font-size: 1.333rem;
    }
  }

  @media (min-width: ${DEVICE_BOUNDARIES.largeDesktopLowerBoundary}px) and (max-width: ${DEVICE_BOUNDARIES.largeDesktopUpperBoundary}px) {
    :host {
      background-color: red;
    }

    .x_large {
      font-size: 3.052rem;
    }

    .large {
      font-size: 2.441rem;
    }

    .medium {
      font-size: 1.953rem;
    }

    .small {
      font-size: 1.563rem;
    }

    .x_small {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: ${DEVICE_BOUNDARIES.smallDesktopLowerBoundary}px) and (max-width: ${DEVICE_BOUNDARIES.smallDesktopUpperBoundary}px) {
    .x_large {
      font-size: 3.052rem;
    }

    .large {
      font-size: 2.441rem;
    }

    .medium {
      font-size: 1.953rem;
    }

    .small {
      font-size: 1.563rem;
    }

    .x_small {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: ${DEVICE_BOUNDARIES.tabletLowerBoundary}px) and (max-width: ${DEVICE_BOUNDARIES.tabletUpperBoundary}px) {
    .x_large {
      font-size: 2.488rem;
    }

    .large {
      font-size: 2.074rem;
    }

    .medium {
      font-size: 1.728rem;
    }

    .small {
      font-size: 1.44rem;
    }

    .x_small {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: ${DEVICE_BOUNDARIES.mobileLowerBoundary}px) and (max-width: ${DEVICE_BOUNDARIES.mobileUpperBoundary}px) {
    .x_large {
      font-size: 1.802rem;
    }

    .large {
      font-size: 1.602rem;
    }

    .medium {
      font-size: 1.424rem;
    }

    .small {
      font-size: 1.266rem;
    }

    .x_small {
      font-size: 1.125rem;
    }
  }
`;
