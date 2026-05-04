describe('Sauce Demo Login Tests', () => {

  // Test 1: valid login
  it('should login successfully', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    cy.get('#login-button').click();

    cy.contains('Swag Labs').should('be.visible');
  });


  // Test 2: invalid login
  it('should show error for invalid login', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce1');

    cy.get('#login-button').click();

    cy.contains('Epic sadface').should('be.visible');
  });

});