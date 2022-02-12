import { Selector } from "testcafe";

class HomePage {
    public get btnLogin() {
        return Selector('.login');
    }
}

export default new HomePage();