import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/numberControlRenderer/stories/numberControlRenderer.stories';

const { Basic } = composeStories(stories);

let vm: App;
before(() => {
  vm?.unmount();
  mount(Basic() as any).then(createdVm => {
    vm = createdVm;
  });
});

describe('Basic number input', () => {
  it('should exist', () => {
    cy.get('input').should('exist');
    cy.get('input').should('have.value', 1);
  });

  it('can increase value with button', () => {
    cy.findByRole('button', { name: 'Increase Value' }).should('exist');
    cy.findByRole('button', { name: 'Increase Value' }).click();
    cy.get('input').should('have.value', 2);
  });

  it('can decrease value with button', () => {
    cy.findByRole('button', { name: 'Decrease Value' }).should('exist');
    cy.findByRole('button', { name: 'Decrease Value' }).click();
    cy.get('input').should('have.value', 1);
  });
});
