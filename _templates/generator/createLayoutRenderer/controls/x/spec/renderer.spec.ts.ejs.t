---
to: src/renderers/layouts/<%= name %>LayoutRenderer/spec/<%= name %>LayoutRenderer.spec.ts
---
import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/layouts/<%= name %>LayoutRenderer/stories/<%= name %>LayoutRenderer.stories';

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

