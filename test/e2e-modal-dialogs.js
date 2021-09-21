import App from '../page-objects/App'
import ModalDialogsPage from '../page-objects/pages/ModalDialogsPage'

describe('E2E Testing for Modal Dialogs', () => {
    it('Should Reach the Modal Dialogs Page for Alerts, Frames, & Windows', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openAlertsPage()
        expect(browser).toHaveUrl('https://demoqa.com/alertsWindows')

        ModalDialogsPage.clickModalDialogsPageBtn()
        expect(browser).toHaveUrl('https://demoqa.com/modal-dialogs')
    })

    it('Should click the small Modal Button and Open the Small Modal Dialog', () => {
        ModalDialogsPage.clickSmallModalBtn()
        expect(ModalDialogsPage.getSmallModalTitle()).toBeExisting()
        ModalDialogsPage.clickCloseSmallModalBtn()
    })

    it('Should click the large Modal Button and Open the large Modal Dialog', () => {
        ModalDialogsPage.clickLargeModalBtn()
        expect(ModalDialogsPage.getlargeModalTitle()).toBeExisting()
        ModalDialogsPage.clickCloseLargeModalBtn()
    })
})