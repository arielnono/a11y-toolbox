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
    .title=${title}
    semanticHeader="h1"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title=${title}
    semanticHeader="h2"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title=${title}
    semanticHeader="h3"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title=${title}
    semanticHeader="h4"
  ></a11y-title>
  <a11y-title
    style="--a11y-title-background-color: ${backgroundColor}"
    .title=${title}
    semanticHeader="h5"
  ></a11y-title>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
