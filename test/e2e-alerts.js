import App from '../page-objects/App'
import AlertsPage from '../page-objects/pages/AlertsPage'

describe('E2E Testing for Alerts', () => {
    it('Should Reach the Alerts Page for Alerts, Frames, & Windows', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openAlertsPage()
        expect(browser).toHaveUrl('https://demoqa.com/alertsWindows')

        AlertsPage.clickAlertsPageBtn()
        expect(browser).toHaveUrl('https://demoqa.com/alerts')
    })

    it('Should Click the alert button and an Alert should pop up', () => {
        AlertsPage.clickAlertBtn()
        AlertsPage.pauseShort()

        if(browser.isAlertOpen()) {
            browser.acceptAlert()
            AlertsPage.pauseShort()
        }
    })
    
    it('Should Click the Timer alert button and an Alert should pop up after 5 seconds', () => {
        AlertsPage.clickTimerAlertBtn()
        AlertsPage.pauseLong()

        if(browser.isAlertOpen()) {
            browser.acceptAlert()
            AlertsPage.pauseShort()
        }
    })

    it('Should Click the Confirm button and an Confirmation Alert should pop up', () => {
        AlertsPage.clickConfirmBtn()
        AlertsPage.pauseShort()
        
        if(browser.isAlertOpen()) {
            browser.acceptAlert()
            AlertsPage.pauseShort()
        }

        expect(AlertsPage.getConfirmResult()).toHaveText('You selected Ok')
    })

    it('Should Click the Prompt button and an Prompt Alert should pop up', () => {
        AlertsPage.clickPromptBtn()
        AlertsPage.pauseShort()
        
        if(browser.isAlertOpen()) {
            browser.sendAlertText('test')
            browser.acceptAlert()
            AlertsPage.pauseShort()
        }

        expect(AlertsPage.getPromptResult()).toHaveText('You entered test')
    })

})