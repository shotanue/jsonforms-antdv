import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import * as stories from '@/renderers/layouts/layoutRenderer/stories/layoutRenderer.stories';

const { Vertical } = composeStories(stories);
describe('Vertical form', () => {
  it('should exist', () => {
    mount(Vertical() as any);
    cy.get('form').should('exist');
  });
});
