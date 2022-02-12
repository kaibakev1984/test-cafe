import { Selector, t } from "testcafe";

class LoginPage {
        
        public get inputUsername() {
            return Selector('#username');
        }

        public get inputPassword() {
            return Selector('#password');
        }

        public get btnSubmit() {
            return Selector('button[type="submit"]');
        }

        public get errorFlashAlert() {
            return Selector('#flash');
        }
}

export default new LoginPage();