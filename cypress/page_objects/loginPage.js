class LoginPage {
    get emailInput() {
        return cy.get('input[name="email"]')
    }

    get passwordInput() {
        return cy.get('.form-control.mt-3')
    }

    get loginButton() {
        return cy.get('button')
    }
    
    fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }

    clickLoginButton() {
        this.loginButton.click()
    }
}





export const loginPage = new LoginPage ()