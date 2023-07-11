import { LoginPage } from "./pages/login_pages.cy";
import { DashboardPage } from "./pages/dashboard_pages.cy";
import { CartPage } from "./pages/cartPages.cy";
import { CheckoutInformation } from "./pages/CO_Info.pages.cy";
import { CheckoutOverview } from "./pages/CO_Overview_pages.cy";
import { CheckoutComplete } from "./pages/CO_Complate_pages.cy";
import { DetailPage } from "./pages/detailPages.cy";

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutInformation = new CheckoutInformation()
let checkoutOverview =  new CheckoutOverview()
let checkoutComplete = new CheckoutComplete()
let detailPage = new DetailPage()

const URL = 'https://www.saucedemo.com/'

describe('Checkout product Saucedemo', () => {
    it('Test case untuk checout produk', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')  
        loginPage.assertLogin()
       dashboardPage.iconCartToClick()
        cartPage.btnCheckout()
        checkoutInformation.formInformationCheckout('Devy Nur Sadiah','Rumahku','12345')
        checkoutOverview.checkOverviewCheckout()
        checkoutComplete.checkOverviewCheckout()
    })
})