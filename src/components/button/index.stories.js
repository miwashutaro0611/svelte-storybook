import { action } from '@storybook/addon-actions';
import markdown from './README.md'

import Button from './index.svelte';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonContent = () => ({
  Component: Button,
});

ButtonContent.story = {
  parameters: {
    notes: { markdown },
  }
}
