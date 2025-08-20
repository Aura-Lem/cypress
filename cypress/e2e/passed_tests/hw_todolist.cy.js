describe('template spec', () => {

  it('Todo list page', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.contains('h1', 'To Do List').should('be.visible');
    cy.contains('p', 'Double-click to edit a toodo').should('be.visible');
    cy.get('input').should('have.attr', 'placeholder', "What need's to be done?");
    cy.get('input').should('be.visible', 'placeholder', "What need's to be done?");

  });
})