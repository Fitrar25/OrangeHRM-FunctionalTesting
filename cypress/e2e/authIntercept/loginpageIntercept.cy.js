import LoginPage from '../../pages/LoginPage'
import loginData from '../../fixtures/LoginData.json'

describe('Scenario 1: Try Intercept', () => {
    beforeEach(() => {
        LoginPage.visit()
    })

    it('TC-01 - Login with valid username and valid password', () => {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary', {
            statusCode: 204,
            body: ''
        }).as('actionSummary204')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@actionSummary204').its('response.statusCode').should('eq', 204)
        LoginPage.verifySuccessfulLogin()
    })

    it('TC-02 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/dashboard/index').as('actionSummary200')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@actionSummary200').its('response.statusCode').should('eq', 200)
        LoginPage.verifySuccessfulLogin()
    })

    it('TC-03 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
    })

    it('TC-04 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/locations').as('locations')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@locations').its('response.statusCode').should('eq', 200)
    })

    it('TC-05 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/leaves?**').as('leaves')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@leaves').its('response.statusCode').should('eq', 200)
    })

    it('TC-06 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/employees/subunit').as('subunit')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@subunit').its('response.statusCode').should('eq', 200)
    })

    it('TC-07 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**web/index.php/api/v2/dashboard/employees/time-at-work?**').as('timeAtWork')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@timeAtWork').its('response.statusCode').should('eq', 200)
    })

    it('TC-08 - Login with valid username and valid password', () => {
        cy.intercept('GET', '**/web/index.php/api/v2/dashboard/shortcuts').as('shortcuts')
        LoginPage.login(loginData.validUsername, loginData.validPassword)
        cy.wait('@shortcuts').its('response.statusCode').should('eq', 200)
    })

})