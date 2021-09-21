import uploadFile from 'webdriverio/build/commands/browser/uploadFile';
import App from '../page-objects/App'
import PracticeFormPage from '../page-objects/pages/PracticeFormPage'

describe('E2E Testing for Practice Forms Page', () => {
    it('Should Reach the Practice Forms Page for Forms', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openFormsPage()
        expect(browser).toHaveUrl('https://demoqa.com/forms')

        PracticeFormPage.clickFormsButton()
        PracticeFormPage.pauseShort()
    })

    it('Should fill up the practice form successfully', () => {
        PracticeFormPage.setFName('Test')
        PracticeFormPage.setLName('Test')
        PracticeFormPage.setEmail('Test@Test.com')
        PracticeFormPage.setNumber(1234567890)
        PracticeFormPage.setGenderMale()
        PracticeFormPage.setGenderFemale()
        PracticeFormPage.setGenderOthers()
        PracticeFormPage.setDOB()
        PracticeFormPage.selectMaths(1)
        PracticeFormPage.selectAccounting(1)
        PracticeFormPage.uploadPhoto()
        PracticeFormPage.selectSports()
        PracticeFormPage.selectReading()
        PracticeFormPage.selectMusic()
        PracticeFormPage.setCurrentAddress('Test Address')
        PracticeFormPage.setState()
        PracticeFormPage.setCity()
        PracticeFormPage.clickSubmitButton()
        PracticeFormPage.validateForm()
    })
})