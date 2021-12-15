import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import type { App } from 'vue';
import * as stories from '@/renderers/controls/booleanControlRenderer/stories/booleanControlRenderer.stories';

const { Basic, WithLabel } = composeStories(stories);

let vm: App;
beforeEach(() => {
  vm?.unmount();
});

describe('Basic', () => {
  it('should exist', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('input').should('not.be.checked');
  });

  it('can check', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('input').check();
    cy.get('input').should('be.checked');
  });
});

describe('With Label', () => {
  it('should exist', () => {
    mount(WithLabel() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('label').should('exist').should('have.text', 'foo');
  });
});
