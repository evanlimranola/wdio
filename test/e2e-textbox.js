import App from '../page-objects/App'
import TextBoxPage from '../page-objects/pages/TextBoxPage'

describe('E2E Testing for Textboxes', () => {
    it('Should Reach the Textbox Page for Elements', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openElementsPage()
        expect(browser).toHaveUrl('https://demoqa.com/elements')

        TextBoxPage.clickTextBoxButton()
    })

    it('Should fill up text boxes correctly and Successfully Submit form', () => {
        TextBoxPage.fillTextBoxForm("John Doe", "johndoe@gmail.com", "John Doe Residence", "John Doe Residence")
        TextBoxPage.submitTextBoxForm()

        expect(TextBoxPage.fullNameText).toHaveTextContaining(TextBoxPage.fullNameInput.getText())
        expect(TextBoxPage.emailText).toHaveTextContaining(TextBoxPage.emailInput.getText())
        expect(TextBoxPage.currAddressText).toHaveTextContaining(TextBoxPage.currAddressInput.getText())
        expect(TextBoxPage.permAddressText).toHaveTextContaining(TextBoxPage.permAddressInput.getText())
    })
})