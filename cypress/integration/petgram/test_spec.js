/* global describe, cy, it */

describe('Petgram', function () {
  it('para ver si app funciona', function () {
    cy.visit('/')
  })

  it('navegar categoria y vemos  una foto', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navegar navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('los usuarios no registrados ven el formulario de registro e inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
