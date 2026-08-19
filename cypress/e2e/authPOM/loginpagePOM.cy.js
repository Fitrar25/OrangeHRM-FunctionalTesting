import LoginPage from '../../pages/LoginPage';
import loginData from '../../fixtures/LoginData.json';

describe('Scenario 1: Verify User Login Functionality on OrangeHRM', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('TC-01 - Login with valid username and valid password', () => {
        LoginPage.login(loginData.validUsername, loginData.validPassword);
        LoginPage.verifySuccessfulLogin();
    });

    it('TC-02 - Login with empty username and valid password', () => {
        LoginPage.fillUsername(loginData.empty);
        LoginPage.fillPassword(loginData.validPassword);
        LoginPage.clickLoginButton();
        LoginPage.verifyFieldError('username', loginData.requiredFieldMessage);
    });

    it('TC-03 - Login with valid username and empty password', () => {
        LoginPage.fillUsername(loginData.validUsername);
        LoginPage.fillPassword(loginData.empty);
        LoginPage.clickLoginButton();
        LoginPage.verifyFieldError('password', loginData.requiredFieldMessage);
    });

    it('TC-04 - Login with both fields empty', () => {
        LoginPage.fillUsername(loginData.empty);
        LoginPage.fillPassword(loginData.empty);
        LoginPage.clickLoginButton();
        LoginPage.verifyFieldError('username', loginData.requiredFieldMessage);
        LoginPage.verifyFieldError('password', loginData.requiredFieldMessage);
    });

    it('TC-05 - Login with valid username and invalid password', () => {
        LoginPage.login(loginData.validUsername, loginData.invalidPassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-06 - Login with invalid username and valid password', () => {
        LoginPage.login(loginData.invalidUsername, loginData.validPassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-07 - Login with invalid username and invalid password', () => {
        LoginPage.login(loginData.invalidUsername, loginData.invalidPassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-08 - Login with username containing leading spaces', () => {
        LoginPage.login(loginData.usernameLeadingSpace, loginData.validPassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-09 - Login with password containing trailing spaces', () => {
        LoginPage.login(loginData.validUsername, loginData.passwordTrailingSpace);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-10 - Case sensitivity on username field', () => {
        LoginPage.login(loginData.caseSensitiveUsername, loginData.validPassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

    it('TC-11 - Case sensitivity on password field', () => {
        LoginPage.login(loginData.validUsername, loginData.caseSensitivePassword);
        LoginPage.verifyErrorMessage(loginData.errorMessage);
    });

});