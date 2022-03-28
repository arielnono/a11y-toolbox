const merriweather = new URL(
  '../../assets/fonts/Merriweather-Bold.woff2',
  import.meta.url
).href;
const Atkinson = new URL(
  '../../assets/fonts/Atkinson-Hyperlegible-Regular-102a.woff2',
  import.meta.url
).href;

const fonts = `
@font-face {
  font-display: swap;
  font-family: 'merriweather-bold';
  font-style: normal;
  font-weight: normal;
  src: url('${merriweather}') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Atkinson-regular';
  font-style: normal;
  font-weight: normal;
  src: url('${Atkinson}') format('woff2');
}
`;

// Temporary solution for this bug : https://github.com/mdn/interactive-examples/issues/887
// Big problem with this solution: it load fonts as multiple times as it is called
const newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode(fonts));

document.head.appendChild(newStyle);
