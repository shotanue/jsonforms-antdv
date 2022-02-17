import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/layouts/horizontalLayoutRenderer/stories/horizontalLayoutRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  beforeEach(
    mountCallback({
      ...Basic({
        onChange: () => {},
      }),
    })
  );

  it('renders a horizontal input', () => {
    // todo implement here
    cy.get('input').should('exist');
  });
});
