import { Selector, t } from "testcafe";
import HomePage from "../pages/automationpractice/home.page";
import LoginPage from '../pages/automationpractice/login.page';
import RegisterPage from '../pages/automationpractice/register.page';

fixture `Automation Practice`
    .page `http://automationpractice.com/index.php`
    .beforeEach(
        async t => {
            await t 
                .maximizeWindow();
        }
    );

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

test('Search clothe and get error message', async t => {
    await t
        .typeText('#search_query_top', 'clothe')
        .click('button[type="submit"]')
        .expect(Selector('h1[class="page-heading  product-listing"]').innerText).contains('SEARCH')
        .expect(Selector('span[class="heading-counter"]').innerText).contains('0 results have been found.')
});

test('Search printed and get results', async t => {
    await t
        .typeText('#search_query_top', 'printed')
        .click('button[type="submit"]')
        .expect(Selector('h1[class="page-heading  product-listing"]').innerText).contains('SEARCH')
        .expect(Selector('span[class="lighter"]').innerText).contains('PRINTED')
        .expect(Selector('span[class="heading-counter"]').innerText).contains('5 results have been found.')
});