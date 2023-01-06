describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://google.com')
    })

    it('search results from google', () => {
        cy.intercept('GET', '**/search?q=*').as('searchQ')
        cy.get('[name="q"]')
            .type('example').should('have.value', 'example')
            .type('{enter}')
        cy.wait('@searchQ').its('response.statusCode').should('equal', 200)
    })
})