import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/layouts/verticalLayoutRenderer/stories/verticalLayoutRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  let data = {};

  beforeEach(
    mountCallback({
      ...Basic({
        onChange: ev => {
          data = ev.data;
        },
      }),
    })
  );

  it('renders a vertical input', () => {
    cy.get('input').should('exist');
    expect(data).to.deep.equal({ prop: false });
  });
});
