export class CheckoutInformation {
    fillTextFirstName = '#first-name'
    fillTextLastName = '#last-name'
    fillPostalCode = '#postal-code'

formInformationCheckout(firstName : string, lastName : string, postalCode : string){
    cy.get(this.fillTextFirstName).type(firstName)
    cy.get(this.fillTextLastName).type(lastName)
    cy.get(this.fillPostalCode).type(postalCode)
    cy.get('#continue').click()
}
}