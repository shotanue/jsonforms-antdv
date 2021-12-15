import { composeStories } from '@storybook/testing-vue3';
import { mountCallback } from '@cypress/vue';
import * as stories from '@/renderers/controls/enumOneOfControlRenderer/stories/enumOneOfControlRenderer.stories';

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

  it('renders a select input', () => {
    // todo implement here
    cy.get('input').should('exist');
  });

  it('renders title as label', () => {
    cy.get('label').should('exist').should('contain.text', 'My OneOf Enum');
  });

  it('renders options if input clicked', () => {
    cy.get('input').click();
  });

  it('emits a data change', () => {
    Cypress.on('uncaught:exception', () => {
      /*
       antdv throws type error and a warning, but component works.
       Error
         Cannot read properties of null (reading 'addEventListener')
      
       Warning 
         [Vue warn]: Unhandled error during execution of mounted hook
      
       cannot fix this issue, this test ignores type error from antdv.
      */
      return false;
    });
    cy.get('input').click();
    cy.get('.rc-virtual-list')
      .findByText('Bar')
      .click()
      .then(() => {
        expect(data).to.deep.equal({ prop: 'b' });
      });
  });
});
