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
    .heading="h1 - ${heading}"
    semanticLevel="h1"
    appearance="x_large"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .heading="h2 - ${heading}"
    semanticLevel="h2"
    appearance="large"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .heading="h3 - ${heading}"
    semanticLevel="h3"
    appearance="medium"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .heading="h4 - ${heading}"
    semanticLevel="h4"
    appearance="small"
  ></a11y-heading>
  <a11y-heading
    style="--a11y-heading-background-color: ${backgroundColor}"
    .heading="h5 - ${heading}"
    semanticLevel="h5"
    appearance="x_small"
  ></a11y-heading>
`;

export const Header = Template.bind({});
Header.args = {
  heading: 'A Visual Type Scale',
};
