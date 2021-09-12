import { composeStories } from '@storybook/testing-vue3';
import { mount } from '@cypress/vue';
import { App } from 'vue';
import * as stories from '@/renderers/controls/stringControlRenderer/stories/stringControlRenderer.stories';

const { Basic, WithLabel, InvalidText } = composeStories(stories);

let vm: App;
beforeEach(() => {
  vm?.unmount();
});

describe('Basic', () => {
  it('should exist', () => {
    mount(Basic() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('input').should('have.value', 'foo');
  });
});

describe('With Label', () => {
  it('should have label', () => {
    mount(WithLabel() as any).then(createdVm => {
      vm = createdVm;
    });
    cy.get('input').should('exist');
    cy.get('label').should('exist').should('contain.text', 'foo');
  });
});

describe('Invalid Text', () => {
  it('should exist', () => {
    mount(InvalidText() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.get('input').should('exist');
    cy.get('input').should('have.value', 'foo');

    cy.findAllByRole('alert').should('exist');

    cy.findAllByRole('alert').then(el => {
      expect(el[0].textContent).to.be.equal('should NOT be longer than 2 characters');
      expect(el[1].textContent).to.be.equal('should match pattern "^a\\w.*"');
    });
  });

  it('should contain two error messages', () => {
    mount(InvalidText() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.findAllByRole('alert').should('exist');
    cy.findAllByRole('alert').then(el => {
      expect(el[0].textContent).to.be.equal('should NOT be longer than 2 characters');
      expect(el[1].textContent).to.be.equal('should match pattern "^a\\w.*"');
    });
  });

  it('should remove regex error message, typed asdf', () => {
    mount(InvalidText() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.get('input').should('exist');
    cy.get('input').clear();
    cy.get('input').type('asdf');
    cy.findByRole('alert').should($div => {
      expect($div.text()).to.be.equal('should NOT be longer than 2 characters');
    });
  });

  it('should remove length error message, typed f', () => {
    mount(InvalidText() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.get('input').should('exist');
    cy.get('input').clear();
    cy.get('input').type('f');
    cy.findByRole('alert').should($div => {
      expect($div.text()).to.be.equal('should match pattern "^a\\w.*"');
    });
  });

  it('should contain no error messages, typed as', () => {
    mount(InvalidText() as any).then(createdVm => {
      vm = createdVm;
    });

    cy.get('input').should('exist');
    cy.get('input').clear();
    cy.get('input').type('as');
    cy.findByRole('alert').should($div => {
      expect($div.text()).to.be.equal('');
    });
  });
});
