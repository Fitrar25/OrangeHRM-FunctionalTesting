describe('Scenario 1: Verify User Login Functionality on OrangeHRM', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Visit the login page before each test
    })
    it('TC-01-Verify login with valid username and valid password', () => { 
        cy.get('[name="username"]').type('Admin') 
        cy.get('[name="password"]').type('admin123') 
        cy.get('.oxd-button').click()
        cy.url().should('include', '/dashboard')
    })

    it('TC-02-Verify login with empty username and valid password', () => {
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Required')
    })

    it('TC-03-Verify login with valid username and empty password', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Required')
    })

    it('TC-04-Verify login with both fields empty', () => {
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Required')
    })

    it('TC-05-Verify login with valid username and invalid password', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('invalidPassword')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-06-Verify login with invalid username and valid password', () => {
        cy.get('[name="username"]').type('invalidUser')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-07-Verify login with invalid username and invalid password', () => {
        cy.get('[name="username"]').type('invalidUser')
        cy.get('[name="password"]').type('invalidPassword')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-08-Verify login with username containing leading spaces', () => {
        cy.get('[name="username"]').type(' Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-09-Verify login with password containing trailing spaces', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123 ')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-10-Verify case sensitivity on username field', () => {
        cy.get('[name="username"]').type('AdMiN')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-11-Verify case sensitivity on password field', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('Admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

    it('TC-12-Verify login with SQL injection characters', () => {
        cy.get('[name="username"]').type("' OR '1'='1")
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-slot').should('contain', 'Invalid credentials')
    })

})
