import { mount } from '@cypress/vue';
import Button from '@/components/Button.vue';

it('Button', () => {
  mount(Button);
  cy.findByRole('button', { name: 'Test button' }).click();
});
