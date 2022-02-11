import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/layouts/arrayLayoutRenderer/stories/arrayLayoutRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  let data: string[] = [];

  beforeEach(
    mountCallback({
      ...Basic({
        onChange: ev => {
          if (!Array.isArray(ev.data)) {
            throw new TypeError('ev.data should be array');
          }
          data = ev.data;
        },
      }),
    })
  );

  it('renders + button only', () => {
    cy.get('button').should('exist');
    cy.get('input').should('not.exist');
  });

  it('renders input if + button clicked', () => {
    cy.get('button').should('exist').click();
    cy.get('input').should('exist');
    expect(data).to.deep.equal([]);
  });
});
