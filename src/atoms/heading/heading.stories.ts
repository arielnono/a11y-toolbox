import { html, TemplateResult } from 'lit';

import './Heading.js';

export default {
  title: 'Atoms/Heading',
  component: 'a11y-heading',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  heading?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  heading,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .title="h1 - ${heading}"
    semanticLevel="h1"
    appearance="x_large"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .title="h2 - ${heading}"
    semanticLevel="h2"
    appearance="large"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .title="h3 - ${heading}"
    semanticLevel="h3"
    appearance="medium"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .title="h4 - ${heading}"
    semanticLevel="h4"
    appearance="small"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .title="h5 - ${heading}"
    semanticLevel="h5"
    appearance="x_small"
  ></a11y-heading>
  <div>
    <p>Documentation</p>
    <ol>
      <li>
        <a href="https://www.w3.org/TR/WCAG20-TECHS/H42"
          >Using h1-h6 to identify headings</a
        >
      </li>
      <li>
        <a href="https://www.w3.org/TR/WCAG20-TECHS/H69"
          >Providing heading elements at the beginning of each section of
          content</a
        >
      </li>
    </ol>
  </div>
`;

export const Header = Template.bind({});
Header.args = {
  heading: 'A Visual Type Scale',
};
