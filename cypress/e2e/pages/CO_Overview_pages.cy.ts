export class CheckoutOverview{
    link_overviewCheckout = 'Checkout: Overview'
    btnFinish = '#finish'

    checkOverviewCheckout(){
    cy.contains(this.link_overviewCheckout)
    cy.get(this.btnFinish).click()
    }
    
}