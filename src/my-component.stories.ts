import { html, TemplateResult } from 'lit';
import './my-component.js';

export default {
  title: 'MyComponent',
  component: 'my-component',
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
  <my-component
    style="--my-component-background-color: ${backgroundColor}"
    .title=${title}
  ></my-component>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
