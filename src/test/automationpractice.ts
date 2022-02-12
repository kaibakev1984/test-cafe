import { Selector, t } from "testcafe";
import HomePage from "../pages/automationpractice/home.page";
import LoginPage from '../pages/automationpractice/login.page';
import RegisterPage from '../pages/automationpractice/register.page';

fixture `Automation Practice`
    .page `http://automationpractice.com/index.php`;

test('Go to sign in page and get register account error', async t => {
    await t 
        .click(HomePage.btnLogin)
        .typeText(LoginPage.inputCreateEmail, 'test@test.com')
        .click(LoginPage.btnSubmitCreate)
        .expect(LoginPage.alertCreateAccountError.innerText).contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
});

test('Go to register account page', async t => {
    await t 
        .click(HomePage.btnLogin)
        .typeText(LoginPage.inputCreateEmail, 'karma@test.com')
        .click(LoginPage.btnSubmitCreate)
        .expect(RegisterPage.titleFormPage.innerText).contains('YOUR PERSONAL INFORMATION')
});

test('Go to sign in page and get autentication error', async t => {
    await t
        .click(HomePage.btnLogin)
        .typeText(LoginPage.inputEmail, 'test@test.com')
        .typeText(LoginPage.inputPassword, 'password123')
        .click(LoginPage.btnSubmitLogin)
        .expect(LoginPage.alertLoginError.innerText).contains('Authentication failed.')
});