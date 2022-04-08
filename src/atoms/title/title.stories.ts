import { html, TemplateResult } from 'lit';

import './Title.js';

export default {
  title: 'Atoms/Title',
  component: 'a11y-title',
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
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title="h1 - ${title}"
    semanticHeader="h1"
    appearance="x_large"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title="h2 - ${title}"
    semanticHeader="h2"
    appearance="large"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title="h3 - ${title}"
    semanticHeader="h3"
    appearance="medium"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title="h4 - ${title}"
    semanticHeader="h4"
    appearance="small"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title="h5 - ${title}"
    semanticHeader="h5"
    appearance="x_small"
  ></a11y-title>
`;

export const Header = Template.bind({});
Header.args = {
  title: 'A Visual Type Scale',
};
