import App from '../page-objects/App'
import RadioButtonPage from '../page-objects/pages/RadioButtonPage'

describe('E2E Testing for Radio Button', () => {
    it('Should Reach the Radio Button Page for Elements', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openElementsPage()
        expect(browser).toHaveUrl('https://demoqa.com/elements')

        RadioButtonPage.clickRadiobutton()
        RadioButtonPage.pauseShort()
    })

    it('It should select the Yes Radio Button', () => {
        RadioButtonPage.selectYes()

        expect(RadioButtonPage.result).toHaveText('Yes')
    })

    it('It should select the impressive Radio Button', () => {
        RadioButtonPage.selectImpressive()

        expect(RadioButtonPage.result).toHaveText('Impressive')
    })

    it('It should Expect that the No Radio button is disabled', () => {
        expect(RadioButtonPage.getNo()).toBeDisabled()
    })
})