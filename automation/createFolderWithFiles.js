/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const inputArgs = process.argv.slice(2);
const INVALID_ARGUMENT_EXIT_CODE = 9;

const createDirectory = (directory) => {
  if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
  }
  console.log("The directory you want to create already exists");
}

const createFile = (filePath, content='') => {
  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    if (content) {
      console.log(`Content created for file at path ${filePath}`);
    } else {
      console.log(`File at path ${filePath} has been created successfully.`);
    }
  });
}

const appendTextToFile = (filePath, content) => {
  createFile(filePath, content);
}

const buildFilePath = (folderPath, fileName, fileType) => `${folderPath}/${fileName}${fileType}`;

const validateInputParameters = (folderPath, fileName) => {
  if(!folderPath && !fileName) {
    console.error("Expected 2 arguments, Folder path and file name must be provided \n Usage: $ <script> <directory-path> <file-name>");
    process.exit(INVALID_ARGUMENT_EXIT_CODE);
  }
  if(!fileName) {
    console.error("Expected 2 arguments, file name must also be provided \n Usage: $ <script> <directory-path> <file-name>");
    process.exit(INVALID_ARGUMENT_EXIT_CODE);
  }
}

const capitalizeString = (stringToCapitalize) => `${stringToCapitalize.charAt(0).toUpperCase()}${stringToCapitalize.slice(1)}`;

const getCustomElementName = (fileName) => `a11y-${fileName}`;


const buildStyleContent = () => `import { css } from 'lit';

export const style = css\`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--my-component-background-color);
  }

  h1 {
    font-family: var(--headings-font-family);
  }

  .text {
    font-family: var(--body-font-family);
  }

  main {
    flex-grow: 1;
  }

  .logo {
    margin-top: 36px;
    animation: app-logo-spin infinite 20s linear;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }

  .app-footer a {
    margin-left: 5px;
  }
\`;
`;

const buildStoryContent = (fileName) => {
  const fileNameCapitalize = capitalizeString(fileName);
  const customElementName = getCustomElementName(fileName);

  return `import { html, TemplateResult } from 'lit';
import './${fileNameCapitalize}.js';
  
export default {
  title: '${fileNameCapitalize}',
  component: '${customElementName}',
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
}: ArgTypes) => html\`
  <${customElementName}
    style="--${customElementName}-background-color: \${backgroundColor}"
    .title=\${title}
  ></${customElementName}>
\`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};  
`
}

const buildComponentContent = (fileName) => {
  const fileNameCapitalize = capitalizeString(fileName);
  const customElementName = getCustomElementName(fileName);

  return `import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style } from './${fileName}.css';
import { globalStyle } from '../../styles/global.css';

@customElement('${customElementName}')
export class ${fileNameCapitalize} extends LitElement {
  @property({ type: String }) override title = 'My app';

  static override styles = [...globalStyle, style];

  override render() {
    return html\`
      <main>
        <h1>\${this.title}</h1>
        <p class="text">
          Edit <code>src/${fileNameCapitalize}.ts</code> and save to reload.
        </p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "${customElementName}": ${fileNameCapitalize};
  }
}`;
}

const buildTestContent = (fileName) => {
  const fileNameCapitalize = capitalizeString(fileName);
  const customElementName = getCustomElementName(fileName);

  return `import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import './${fileNameCapitalize}.js';
import { ${fileNameCapitalize} } from './${fileNameCapitalize}.js';

describe('${fileNameCapitalize} component', () => {
  let element: ${fileNameCapitalize};
  beforeEach(async () => {
    element = await fixture(html\`<${customElementName}></${customElementName}>\`);
  });

  it('should renders a h1', () => {
    const h1 = element.shadowRoot?.querySelector('h1') || {textContent: ''};
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('should passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
`;
}

const createFolderStructure = (folderPath, fileName) => {
  validateInputParameters(folderPath, fileName)
  createDirectory(folderPath);

  const storyFilePath = buildFilePath(folderPath, fileName, '.stories.ts');
  const componentFilePath = buildFilePath(folderPath, capitalizeString(fileName), '.ts');
  const styleFilePath = buildFilePath(folderPath, fileName, '.css.ts');
  const testFilePath = buildFilePath(folderPath, fileName, '.test.ts');

  appendTextToFile(storyFilePath, buildStoryContent(fileName));
  appendTextToFile(componentFilePath, buildComponentContent(fileName));
  appendTextToFile(styleFilePath, buildStyleContent());
  appendTextToFile(testFilePath, buildTestContent(fileName));
}

createFolderStructure(inputArgs[0], inputArgs[1]);
