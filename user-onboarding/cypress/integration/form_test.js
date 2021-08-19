describe('User Onboarding App', () => {
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=agree]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    beforeEach(() => {
        crypto.visit('http://localhost:3000')
    })

    it('sanity check to make sure tests work', () => {
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
})
