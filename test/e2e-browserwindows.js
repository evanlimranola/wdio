import App from '../page-objects/App'
import BrowserWindowsPage from '../page-objects/pages/BrowserWindowsPage'

describe('E2E Testing for Browser Windows', () => {
    it('Should Reach the Browser Windows Page for Alerts, Frames, & Windows', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openAlertsPage()
        expect(browser).toHaveUrl('https://demoqa.com/alertsWindows')

        BrowserWindowsPage.clickBrowserWindowsBtn()
        expect(browser).toHaveUrl('https://demoqa.com/browser-windows')
    })

    it('Should click the New Tab Button and open a New Sample Tab', () => {
        BrowserWindowsPage.clickNewTabBtn()
        App.switchWindow('https://demoqa.com/sample')
        expect(browser).toHaveUrl('https://demoqa.com/sample')
        browser.closeWindow()

        App.switchWindow('https://demoqa.com/browser-windows')
    })

    it('Should click the New Tab Button and open a New Sample Window', () => {
        BrowserWindowsPage.clickNewWindowMessageBtn()
        var currHandle = browser.getWindowHandle()
        var allHandles = browser.getWindowHandles()
        var nHandle = ''
        for(var i = 0; i < allHandles.length; i++) {
            if(allHandles[i] != currHandle) {
               nHandle = allHandles[i] 
            }
        }
        browser.switchToWindow(nHandle)
        expect(allHandles).toHaveLength(2)
    })
})