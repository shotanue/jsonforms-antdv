import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/multiStringControlRenderer/stories/multiStringControlRenderer.stories';

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
    cy.get('textarea').should('exist');
  });

  it('can type', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('textarea').should('exist');
    cy.get('textarea').type('foobar');
    cy.get('textarea').should('have.value', 'foobar');
  });
});
