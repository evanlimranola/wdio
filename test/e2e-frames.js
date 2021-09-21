import App from '../page-objects/App'
import FramesPage from '../page-objects/pages/FramesPage'

describe('E2E Testing for Frames', () => {
    it('Should Reach the Frames Page for Alerts, Frames, & Windows', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openAlertsPage()
        expect(browser).toHaveUrl('https://demoqa.com/alertsWindows')

        FramesPage.clickFramesPageBtn()
        expect(browser).toHaveUrl('https://demoqa.com/frames')
    })

    it('Should switch between two frams and check both Headings', () => {
        FramesPage.switchToFirstFrame()
        expect(FramesPage.getHeading()).toBeExisting()

        browser.switchToParentFrame()

        FramesPage.switchToSecondFrame()
        expect(FramesPage.getHeading()).toBeExisting()
    })
})