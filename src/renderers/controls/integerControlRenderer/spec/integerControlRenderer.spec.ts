import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/controls/integerControlRenderer/stories/integerControlRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic integer input', () => {
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

  it('should exist', () => {
    cy.get('input').should('exist');
    cy.get('input').should('have.value', 0);
  });

  it('can increase value with button', () => {
    cy.findByRole('button', { name: 'Increase Value' }).should('exist');
    cy.findByRole('button', { name: 'Increase Value' })
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: 1 });
      });
    cy.get('input').should('have.value', 1);
  });

  it('can decrease value with button', () => {
    cy.findByRole('button', { name: 'Decrease Value' }).should('exist');
    cy.findByRole('button', { name: 'Decrease Value' })
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: -1 });
      });
    cy.get('input').should('have.value', -1);
  });
});
