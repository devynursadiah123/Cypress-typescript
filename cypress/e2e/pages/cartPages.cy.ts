// cypress/pageobjects/cart.page.ts

export class CartPage {
    link_listCart = 'div[class="cart_list"]'
    link_chekcoutBtn = '#checkout'


    cartList(){
        cy.get(this.link_listCart).should('exist')
        cy.get('div[class="cart_list"]').should('be.visible')
    }

    btnCheckout(){
        cy.get(this.link_chekcoutBtn).should('be.visible')
        cy.get(this.link_chekcoutBtn).click()
    }
  }
  