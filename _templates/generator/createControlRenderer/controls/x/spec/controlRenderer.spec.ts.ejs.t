---
to: src/renderers/controls/<%= name %>ControlRenderer/spec/<%= name %>ControlRenderer.spec.ts
---
import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/<%= name %>ControlRenderer/stories/<%= name %>ControlRenderer.stories';

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
    // todo implement here
    cy.get('input').should('exist');
  });
});

