import { Selector } from "testcafe";

class LoginPage {
    public get inputCreateEmail() {
        return Selector('#email_create');
    }

    public get btnSubmitCreate() {
        return Selector('#SubmitCreate');
    }

    public get alertCreateAccountError() {
        return Selector('#create_account_error');
    }

    public get inputEmail() {
        return Selector('#email');
    }

    public get inputPassword() {
        return Selector('#passwd');
    }

    public get btnSubmitLogin() {
        return Selector('#SubmitLogin');
    }

    public get alertLoginError() {
        return Selector('div[class="alert alert-danger"]');
    }
}

export default new LoginPage;