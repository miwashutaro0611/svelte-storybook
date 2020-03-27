import { configure, addParameters, addDecorator } from '@storybook/svelte'
import { themes } from '@storybook/theming';
import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

// viewport

const customViewports = {
  iPhone5: {
    name: 'iPhone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone6,7,8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneXsMax: {
    name: 'iPhoneXsMax',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
};

addParameters({
  viewport: { viewports: customViewports },
  backgrounds: [
    { name: 'white', value: '#fff' },
    { name: 'black', value: '#333' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'twitter', value: '#00aced' },
  ],
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  }
});