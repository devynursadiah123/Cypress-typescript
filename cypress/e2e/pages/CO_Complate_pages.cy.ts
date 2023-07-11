export class CheckoutComplete{
    link_completeCheckout_1 = 'Thank you for your order!'
    link_completeCheckout_2 = 'Checkout: Complete!'
    btnbackHome= '#back-to-products'

    checkOverviewCheckout(){
    cy.contains(this.link_completeCheckout_1)
    cy.contains(this.link_completeCheckout_2)
    cy.get(this.btnbackHome).click()
    }
    
}