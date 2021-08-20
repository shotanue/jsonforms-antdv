import { mount } from '@cypress/vue';
import Button from './Button.vue';

it('Button', () => {
  mount(Button);
  cy.get('button').contains('Test button').click();
});
