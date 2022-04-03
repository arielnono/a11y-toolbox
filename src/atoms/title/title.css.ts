import { css } from 'lit';

export const style = css`
  :host {
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--headings-font-family);
  }

  .x_large {
    include for-phone-only {
      font-size: 123px;
    }
  }

  .large {
  }

  .medium {
  }

  .small {
  }

  .x_small {
  }
`;
