import App from '../page-objects/App'
import ButtonsPage from '../page-objects/pages/ButtonsPage'

describe('E2E Testing for Buttons', () => {
    it('Should Reach the Buttons Page for Elements', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openElementsPage()
        expect(browser).toHaveUrl('https://demoqa.com/elements')

        ButtonsPage.clickButtonsPage()
    })

    it('It should perform double click on the Double Click button', () => {
        ButtonsPage.hitDoubleClickButton()
        expect(ButtonsPage.getDoubleClickMessage()).toBeExisting()
    })

    it('It should perform right click on the Right Click button', () => {
        ButtonsPage.hitRightClickButton()
        expect(ButtonsPage.getRightClickMessage()).toBeExisting()
    })

    it('It should perform Single click on the Single Click button', () => {
        ButtonsPage.hitClickButton()
        expect(ButtonsPage.getDynamicClickMessage()).toBeExisting()
    })
})