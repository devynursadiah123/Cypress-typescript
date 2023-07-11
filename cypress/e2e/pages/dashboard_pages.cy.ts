export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    link_cartIcon = '.shopping_cart_link'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
    }

    iconCartToClick(){
        cy.get(this.link_cartIcon).click()
    }
}