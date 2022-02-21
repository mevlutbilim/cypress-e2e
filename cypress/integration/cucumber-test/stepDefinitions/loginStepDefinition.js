import {Given,And, When, Then} from 'cypress-cucumber-preprocessor'

Given('I open login page',()=>{
    cy.visit('/');
})

When('I enter username',()=>{
    cy.get('#loginusername').type(Cypress.env('username'));
    
    
})

And('I enter password',()=>{
     cy.get('#loginpassword').type(Cypress.env('password'));
})

Then('I click the login button',()=>{
    cy.get('#logIn()').click();
})