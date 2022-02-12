import { Selector } from "testcafe";

class RegisterPage {
    public get titleFormPage() {
        return Selector('h3[class="page-subheading"');
    }
}

export default new RegisterPage();