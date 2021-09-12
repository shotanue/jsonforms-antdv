import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/booleanControlRenderer/stories/booleanControlRenderer.stories';

const { Basic } = composeStories(stories);

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

  it('should have label', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('label').should('exist').should('contain.text', 'foo');
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
