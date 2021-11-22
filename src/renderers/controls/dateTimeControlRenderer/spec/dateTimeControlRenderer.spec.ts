import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import { toRaw } from 'vue';
import * as stories from '@/renderers/controls/dateTimeControlRenderer/stories/dateTimeControlRenderer.stories';

const { Basic } = composeStories(stories);

describe('Basic', () => {
  let data = {};

  beforeEach(
    mountCallback({
      ...Basic({
        onChange: ev => {
          data = toRaw(ev.data);
        },
      }),
    })
  );

  it('renders a date-time input', () => {
    cy.get('input').should('exist');
  });

  it('renders title as label', () => {
    cy.get('label').should('exist').should('contain.text', 'My Date Time');
  });

  it('should have a placeholder', () => {
    const placeholder = cy.get('input').should('exist').should('have.attr', 'placeholder');
    placeholder.should('equal', 'date-time placeholder');
  });

  it('emits a data change', () => {
    // fix date
    cy.clock(new Date('2021-12-31 00:00:00'));

    // open datepicker
    cy.get('input').click();

    // find Now button
    cy.findByRole('button', { name: 'December 31, 2021' })
      .should('exist')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: '2021-12-31T00:00:00.000Z' });
      });
  });

  it('can clear', () => {
    cy.clock(new Date('2021-12-31 00:00:00'));

    cy.get('input').click();

    cy.findByRole('button', { name: 'December 31, 2021' })
      .should('exist')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: '2021-12-31T00:00:00.000Z' });
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
