class LoginPage {
    elements = {
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        loginButton: () => cy.get('.oxd-button'),
        errorMessage: () => cy.get('.orangehrm-login-slot')
    };

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        const field = this.elements.usernameInput();
        field.clear();
        if (username) {
            field.type(username);
        }
    }

    fillPassword(password) {
        const field = this.elements.passwordInput();
        field.clear();
        if (password) {
            field.type(password);
        }
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    login(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();
    }

    verifyErrorMessage(expectedMessage) {
        this.elements.errorMessage().should('contain', expectedMessage);
    }

    verifySuccessfulLogin() {
        cy.url().should('include', '/dashboard');
    }
    
    verifyFieldError(fieldName, expectedMessage) {
        cy.get(`[name="${fieldName}"]`)
        .parents('.oxd-input-group')
        .find('.oxd-input-field-error-message')
        .should('have.text', expectedMessage);
    }
}

export default new LoginPage()