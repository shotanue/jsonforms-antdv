import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/numberControlRenderer/stories/numberControlRenderer.stories';

const { Basic, WithLabel, InvalidNumber } = composeStories(stories);

let vm: App;
beforeEach(() => {
  vm?.unmount();
});

describe('Basic number input', () => {
  it('should exist', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('input').should('have.value', 0);
  });

  it('can increase value with button', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.findByRole('button', { name: 'Increase Value' }).should('exist');
    cy.findByRole('button', { name: 'Increase Value' }).click();
    cy.get('input').should('have.value', 1);
  });

  it('can decrease value with button', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.findByRole('button', { name: 'Decrease Value' }).should('exist');
    cy.findByRole('button', { name: 'Decrease Value' }).click();
    cy.get('input').should('have.value', -1);
  });
});

describe('withLabel', () => {
  it('should have label', () => {
    mount(WithLabel() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('label').should('exist').should('contain.text', 'foo');
  });
});

describe('Invalid Number', () => {
  it('should exist', () => {
    mount(InvalidNumber() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.get('input').should('exist');
    cy.get('input').should('have.value', 0);
  });

  it('should contain error message', () => {
    mount(InvalidNumber() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.findByRole('alert')
      .should('exist')
      .should($div => {
        expect($div.text()).to.be.equal('should be >= 1');
      });
  });

  it('should have no errors, if the input is 1', () => {
    mount(InvalidNumber() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.findByRole('button', { name: 'Increase Value' }).should('exist');
    cy.findByRole('button', { name: 'Increase Value' }).click();
    cy.get('input').should('have.value', 1);

    cy.findByRole('alert')
      .should('exist')
      .should($div => {
        expect($div.text()).to.be.equal('');
      });
  });

  it('can show error messages again', () => {
    mount(InvalidNumber() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.findByRole('button', { name: 'Increase Value' }).should('exist');
    cy.findByRole('button', { name: 'Increase Value' }).click();
    cy.get('input').should('have.value', 1);

    cy.findByRole('alert')
      .should('exist')
      .should($div => {
        expect($div.text()).to.be.equal('');
      });

    cy.findByRole('button', { name: 'Decrease Value' }).should('exist');
    cy.findByRole('button', { name: 'Decrease Value' }).click();
    cy.findByRole('button', { name: 'Decrease Value' }).click();
    cy.get('input').should('have.value', -1);

    cy.findByRole('alert')
      .should('exist')
      .should($div => {
        expect($div.text()).to.be.equal('should be >= 1');
      });
  });
});
