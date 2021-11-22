import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/controls/dateControlRenderer/stories/dateControlRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  let data = {};

  beforeEach(
    mountCallback({
      ...Basic({
        onChange: ev => {
          data = ev.data;
        },
      }),
    })
  );

  it('renders a date input', () => {
    cy.get('input').should('exist');
  });

  it('renders title as label', () => {
    cy.get('label').should('exist').should('contain.text', 'My Date');
  });

  it('should have a placeholder', () => {
    const placeholder = cy.get('input').should('exist').should('have.attr', 'placeholder');
    placeholder.should('equal', 'Select date');
  });

  it('emits a data change', () => {
    // fix date
    cy.clock(new Date('2021-12-31'));

    // open datepicker
    cy.get('input').click();

    // find Today button
    cy.findByRole('button', { name: 'December 31, 2021' })
      .should('exist')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: '2021-12-31' });
      });
  });

  it('can clear', () => {
    cy.clock(new Date('2021-12-31'));

    cy.get('input').click();

    cy.findByRole('button', { name: 'December 31, 2021' })
      .should('exist')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: '2021-12-31' });
      });

    cy.get('input').realHover();
    cy.findByRole('img', { name: 'close-circle' })
      .should('be.visible')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: undefined });
      });
  });
});
