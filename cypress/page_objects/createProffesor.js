class CreateProffesor {
    get proffesorsButton() {
        return cy.get('#navbardrop') 
    }
    get createProffesorButton() {
        return cy.get('a[href="/create-professor"]')
    }
    get firstName() {
        return cy.get('#firstName')
    }
    get lastName() {
        return cy.get('#lastName')
    }
    get addImageButton() {
        return cy.get('.mb-2 > .btn')
    }
    get submitButton() {
        return cy.get('[name="submit"]')
    }
    get imageInput() {
        return cy.get('input[placeholder="Image URL"]')
    }

    get gradeBookButton() {
        return cy.get('[href="/create-gradebook"]')
    }
    get title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get("#professor")
    }
    

    clickProfessorsButton() {
        this.proffesorsButton.click()
    }
    clickCreateProfessorButton() {
        this.createProffesorButton.click()
    }

    fillFirstNameInput(name) {
        this.firstName.type(name)
    }
    
    fillLastNameInput(surname) {
        this.lastName.type(surname)
    }

    clickAddImage() {
        this.addImageButton.click()
    }

    fillImageInput(image) {
        this.imageInput.type(image)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

    clickGradebookButton() {
        this.gradeBookButton.click()
    }

    fillTitleInput(title) {
        this.title.type(title)
    }

    clickProfessorInput() {
        this.professor.select()
    }

}




export const createProffesor = new CreateProffesor ()