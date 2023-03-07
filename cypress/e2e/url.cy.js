describe('Idea Box', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: "urls.json"}) 
    cy.visit('http://localhost:3000/')
})

it('Should display all of the urls and titles on the page', () => {
  cy.get('h1').should('be.visible').contains('URL Shortener')
  cy.get('[placeholder="Title..."]').should('be.visible')
  cy.get('[placeholder="URL..."]').should('be.visible')
  cy.get('.submit-button').should('be.visible').contains('Shorten Please!')
  cy.get('section > :nth-child(1)').should('be.visible')
  cy.get(':nth-child(1) > h3').should('be.visible').contains('Awesome photo')
  cy.get(':nth-child(1) > a').should('be.visible').contains('http://localhost:3001/useshorturl/1')
  cy.get(':nth-child(1) > p').should('be.visible').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  cy.get('section > :nth-child(2)').should('be.visible')
  cy.get(':nth-child(2) > h3').should('be.visible').contains('hello')
  cy.get(':nth-child(2) > a').should('be.visible').contains('http://localhost:3001/useshorturl/2')
  cy.get(':nth-child(2) > p').should('be.visible').contains('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.planetware.com%2Fwpimages%2F2020%2F02%2Ffrance-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg&imgrefurl=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&tbnid=YXgcNflll9kS8M&vet=12ahUKEwiXwv3Trcr9AhUewckDHYrDCqIQMygAegUIARDIAQ..i&docid=0N6qTt3P-PlepM&w=730&h=487&q=pictures&ved=2ahUKEwiXwv3Trcr9AhUewckDHYrDCqIQMygAegUIARDIAQ')
  })

it('Should be able to add a title and url to create a shortened url', () => {
  cy.get('[placeholder="Title..."]')
    .type('So fun')
    .should('have.value', 'So fun')
  cy.get('[placeholder="URL..."]')
    .type('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature&psig=AOvVaw0du32m8MiO_ckkbQ6nAwna&ust=1678303068739000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiq_qPEyv0CFQAAAAAdAAAAABAD')
    .should('have.value', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature&psig=AOvVaw0du32m8MiO_ckkbQ6nAwna&ust=1678303068739000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiq_qPEyv0CFQAAAAAdAAAAABAD')
  cy.get('.submit-button').click()
  cy.get('section > :nth-child(3)').should('be.visible')
  cy.get(':nth-child(3) > h3').should('be.visible').contains('So fun')
  cy.get(':nth-child(3) > p').should('be.visible').contains('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fnature&psig=AOvVaw0du32m8MiO_ckkbQ6nAwna&ust=1678303068739000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiq_qPEyv0CFQAAAAAdAAAAABAD')
  })
})