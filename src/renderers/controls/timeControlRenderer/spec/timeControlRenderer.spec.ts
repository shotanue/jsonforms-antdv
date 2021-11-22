import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/controls/timeControlRenderer/stories/timeControlRenderer.stories';

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

  it('renders a time input', () => {
    cy.get('input').should('exist');
  });

  it('renders title as label', () => {
    cy.get('label').should('exist').should('contain.text', 'My Time');
  });

  it('should have a placeholder', () => {
    const placeholder = cy.get('input').should('exist').should('have.attr', 'placeholder');
    placeholder.should('equal', 'time placeholder');
  });

  it('emits a data change', () => {
    // fix time
    cy.clock(new Date('2021-12-31 00:00:00'));

    // open datepicker
    cy.get('input').click();

    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[0], name: '01' }).should('exist').click();
    });
    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[1], name: '01' }).should('exist').click();
    });
    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[2], name: '01' }).should('exist').click();
    });

    cy.then(() => {
      expect(data).to.deep.equal({ prop: '01:01:01' });
    });
  });

  it('can clear', () => {
    // fix time
    cy.clock(new Date('2021-12-31 00:00:00'));

    // open datepicker
    cy.get('input').click();

    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[0], name: '01' }).should('exist').click();
    });
    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[1], name: '01' }).should('exist').click();
    });
    cy.get('.ant-time-picker-panel-select').then($el => {
      cy.findByRole('button', { container: $el[2], name: '01' }).should('exist').click();
    });

    // close modal
    cy.get('input').then(el => {
      el[0].click();
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
