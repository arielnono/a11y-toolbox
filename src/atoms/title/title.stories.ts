import { html, TemplateResult } from 'lit';
import './Title.js';

export default {
  title: 'Title',
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
  ></a11y-title>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
