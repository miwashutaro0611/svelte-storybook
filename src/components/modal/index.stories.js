import { action } from '@storybook/addon-actions';
import markdown from './README.md'

import Modal from './index.svelte';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalContent = () => ({
  Component: Modal,
});

ModalContent.story = {
  parameters: {
    notes: { markdown },
  }
}
