import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/additional/labelRenderer/stories/labelRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  it('renders a label input', () => {
    // todo implement here
    cy.get('input').should('exist');
  });
});
