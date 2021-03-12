const data = require("../fixtures/data.json")
import { createProffesor} from '../page_objects/createProffesor'
import { loginPage } from '../page_objects/loginPage'
import { create } from 'domain';

describe("Login", () => {

    before(() => {
        cy.visit('/')
        loginPage.fillEmailInput(data.login.email)
        loginPage.fillPasswordInput(data.login.password)
        loginPage.clickLoginButton()
    })


    it('Create professor', () => {
        cy.get('#navbardrop').click()
        cy.get('a[href="/create-professor"]').click()
        createProffesor.fillFirstNameInput(data.createProfessor.firstName)
        createProffesor.fillLastNameInput(data.createProfessor.lastName)
        createProffesor.clickAddImage()
        createProffesor.fillImageInput(data.createProfessor.image)
        createProffesor.clickSubmitButton()
    })

    it('Create gradebook', () => {
        createProffesor.clickGradebookButton()
        createProffesor.fillTitleInput(data.gradebookPage.title)
        cy.get('select[name="professor"]').select("nikola823547 Tesla")
        cy.get('button').click()
    })
})