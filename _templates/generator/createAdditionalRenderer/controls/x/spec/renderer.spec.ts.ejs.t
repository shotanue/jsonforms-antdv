---
to: src/renderers/additional/<%= name %>AdditionalRenderer/spec/<%= name %>AdditionalRenderer.spec.ts
---
import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/additional/<%= name %>AdditionalRenderer/stories/<%= name %>AdditionalRenderer.stories';

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

  it('renders a <%= name %> input', () => {
    // todo implement here
    cy.get('input').should('exist');
  });
});

