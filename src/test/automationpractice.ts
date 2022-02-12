import { Selector, t } from "testcafe";

fixture `Automation Practice`
    .page `http://automationpractice.com/index.php`;

test('Go to sign in page and get register account error', async t => {
    await t 
        .click('.login')
        .typeText('#email_create', 'test@test.com')
        .click('#SubmitCreate')
        .expect(Selector('#create_account_error').innerText).contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
});

test('Go to register account page', async t => {
    await t 
        .click('.login')
        .typeText('#email_create', 'karma@test.com')
        .click('#SubmitCreate')
        .expect(Selector('h3[class="page-subheading"]').innerText).contains('YOUR PERSONAL INFORMATION')
});

test('Go to sign in page and get autentication error', async t => {
    await t
        .click('.login')
        .typeText('#email', 'test@test.com')
        .typeText('#passwd', 'password123')
        .click('#SubmitLogin')
        .expect(Selector('div[class="alert alert-danger"]').innerText).contains('Authentication failed.')
});