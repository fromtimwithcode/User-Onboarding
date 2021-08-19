describe('User Onboarding App', () => {
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=agree]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    beforeEach(() => {
        crypto.visit('http://localhost:3000')
    })

    it('Sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
      })

    it('Check if form elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    })

    it("Get user input and type name in it",() => {
        nameInput().pause()
          .should("have.value","")
          .type("Tim")
          .should("have.value","Tim")
    })

    it("Get email input and type address in it",() => {
        emailInput()
          .should("have.value","")
          .type("tim@marchant.io")
          .should("have.value","tim@marchant.io")
    })

    it("Get password input and type password in it",() => {
        passwordInput()
          .should("have.value","")
          .type("secretpw")
          .should("have.value","secretpw")
    })

    it("Check if terms clickable",() => {
        termsInput().click()
    })

    it("Check if user can submit the form",() => {
        nameInput().type("Tim")
        emailInput().type("tim@marchant.io")
        passwordInput().type("secretpw")
        termsInput().click().pause()
        submitBtn().click()
        nameInput().should("have.value","")
        emailInput().should("have.value","")
        passwordInput().should("have.value","")
    })

    it("Check form validation if an input is empty",() => {
        nameInput().should("have.value","")
        emailInput().should("have.value","")
        passwordInput().should("have.value","")
        submitBtn().click()
    })
})
