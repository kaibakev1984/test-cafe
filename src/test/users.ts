import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';

const dataSet = require('../../data/loginData.json');

fixture `Login`
    .page `https://the-internet.herokuapp.com/login`;
   
test('As a user, I can log into the secure area', async t => {
    await t
        .typeText('#username', 'tomsmith')
        .typeText('#password', 'SuperSecretPassword!')
        .click('button[type="submit"]');
});

test('As a user, I can log into the secure area - pom', async t => {
    await t
        .expect(LoginPage.inputUsername.value).eql('', 'Username is empty')
        .typeText(LoginPage.inputUsername, 'tomsmith')
        .expect(LoginPage.inputUsername.value).eql('tomsmith', 'Username is correct')
        .expect(LoginPage.inputPassword.value).eql('', 'Password is empty')
        .typeText(LoginPage.inputPassword, 'SuperSecretPassword!')
        .click(LoginPage.btnSubmit)
        .expect(SecurePage.flashAlert.innerText).contains('You logged into a secure area!');
});

test('As a user, I can get error flash alert - pom', async t => {
    await t
        .expect(LoginPage.inputUsername.value).eql('', 'Username is empty')
        .typeText(LoginPage.inputUsername, 'sarasa')
        .typeText(LoginPage.inputPassword, 'sarasa')
        .click(LoginPage.btnSubmit)
        .expect(LoginPage.errorFlashAlert.innerText).contains('Your username is invalid!');
});

dataSet.forEach((data: any) => {
    test(`As '${data.username}', I can log into the secure area - using data file`, async t => {
        await t
            .expect(LoginPage.inputUsername.value).eql('', 'Username is empty')
            .typeText(LoginPage.inputUsername, data.username)
            .expect(LoginPage.inputUsername.value).eql(data.username, 'Username is correct')
            .expect(LoginPage.inputPassword.value).eql('', 'Password is empty')
            .typeText(LoginPage.inputPassword, data.password)
            .click(LoginPage.btnSubmit)
            .expect(SecurePage.flashAlert.innerText).contains(data.message);
    });
});