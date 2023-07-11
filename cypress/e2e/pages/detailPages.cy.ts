export class DetailPage {
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addToCart = "#add-to-cart-sauce-labs-backpack"
    btn_removeFromCart = "#remove-sauce-labs-backpack"
    link_cartBadge = 'span[class="shopping_cart_badge"]'
    link_cartLink = ".shopping_cart_link"


  detailAndAddProduct() {
    cy.contains(this.link_sauceLabsBackpack).should("be.visible");
    cy.get(this.btn_addToCart).should("be.visible");
    cy.get(this.btn_addToCart).click();
    cy.get(this.btn_removeFromCart).should("be.visible");
  }

  checkCart() {
    cy.get(this.link_cartBadge).should("exist");
    cy.get(this.link_cartBadge).should("be.visible");
    cy.get(this.link_cartLink).click();
  }
}