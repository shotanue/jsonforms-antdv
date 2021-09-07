import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/stringControlRenderer/stories/stringControlRenderer.stories';

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
    cy.get('input').should('have.value', 'foo');
  });
});
