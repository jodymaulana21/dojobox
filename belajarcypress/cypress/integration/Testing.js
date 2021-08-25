
describe('kumpulan test case', function (){
    it('tc-1', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')
        cy.get('#et_pb_contact_name_0').type('jody maulana')
        cy.get('#et_pb_contact_email_0').type('Jody.maulana21@gmail.com')
        cy.get('.et_pb_contact_submit').contains('Email Me!')
        cy.get('.et_pb_contact_submit').click()
    })
    it('tc-2', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')        
        cy.get('[value="male"]').click().should('be.cheked')
    })
    it('tc-3', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')        
        cy.get('[value="Bike"]').click().should('have.value','Bike')
    })
    it('tc-4', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')        
        cy.get('select').select('Audi')
        cy.get('select').contains('Audi')
    })
    it('tc-5', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation')        
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})