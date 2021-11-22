---
to: src/renderers/controls/<%= name %>ControlRenderer/spec/<%= name %>ControlRenderer.spec.ts
---
import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/controls/<%= name %>ControlRenderer/stories/<%= name %>ControlRenderer.stories';

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

