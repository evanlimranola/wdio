import App from '../page-objects/App'
import NestedFramesPage from '../page-objects/pages/NestedFramesPage'

describe('E2E Testing for Nested Frames', () => {
    it('Should Reach the Nested Frames Page for Alerts, Frames, & Windows', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openAlertsPage()
        expect(browser).toHaveUrl('https://demoqa.com/alertsWindows')

        NestedFramesPage.clickNestedFramesPageBtn()
        expect(browser).toHaveUrl('https://demoqa.com/nestedframes')
    })

    it('Should switch between two frams and check both Headings', () => {
        NestedFramesPage.switchToFirstFrame()
        expect(NestedFramesPage.getBody()).toHaveText('Parent frame')

        NestedFramesPage.switchToSecondFrame()
        expect(NestedFramesPage.getBody()).toHaveText('Child Iframe')
    })
})