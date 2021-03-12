const data = require("../fixtures/data.json")
import { loginPage } from '../page_objects/loginPage'



describe("Login", () => {

    before(() => {
        cy.visit('/')
    })


    it('Succesfull login', () => {

        loginPage.fillEmailInput(data.login.email)
        loginPage.fillPasswordInput(data.login.password)
        loginPage.clickLoginButton()
    })
})