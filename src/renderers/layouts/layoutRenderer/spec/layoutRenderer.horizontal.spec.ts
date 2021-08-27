import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import * as stories from '@/renderers/layouts/layoutRenderer/stories/layoutRenderer.stories';

const { Horizontal } = composeStories(stories);
describe('Horizontal form', () => {
  it('should exist', () => {
    mount(Horizontal() as any);
    cy.get('form').should('exist');
  });
});
