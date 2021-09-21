import App from '../page-objects/App'
import LinksPage from '../page-objects/pages/LinksPage'

describe('E2E Testing for Links', () => {
    it('Should Reach the Links Page for Elements', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openElementsPage()
        expect(browser).toHaveUrl('https://demoqa.com/elements')

        LinksPage.clickLinksPage()
    })

    it('It should Click Simple Link - Home and open a new DemoQA tab', () => {
        let cHandle = browser.getWindowHandle() //Current Window Focus
        LinksPage.clickSimpleLink()
        LinksPage.checkNewTab(cHandle)
    })

    it('It should Click Dynamic Link - Home and open a new DemoQA tab', () => {
        let cHandle = browser.getWindowHandle() //Current Window Focus
        LinksPage.clickDynamicLink()
        LinksPage.checkNewTab(cHandle)
    })

    it('It should Click Created Link and responded with staus 201 and status text Created', () => {
        LinksPage.clickCreatedLink()
        LinksPage.checkLinkResponse('201', 'Created')
    })

    it('It should Click No Content Link and responded with staus 204 and status text No Content', () => {
        LinksPage.clickNoContentLink()
        LinksPage.checkLinkResponse('204', 'No Content')
    })

    it('It should Click Moved Link and responded with staus 301 and status text Moved Permanently', () => {
        LinksPage.clickMovedLink()
        LinksPage.checkLinkResponse('301', 'Moved Permanently')
    })

    it('It should Click Bad Request Link and responded with staus 400 and status text Bad Request', () => {
        LinksPage.clickBadRequestLink()
        LinksPage.checkLinkResponse('400', 'Bad Request')
    })

    it('It should Click Unauthorized Link and responded with staus 401 and status text Unauthorized', () => {
        LinksPage.clickUnauthorizedLink()
        LinksPage.checkLinkResponse('401', 'Unauthorized')
    })

    it('It should Click Forbidden Link and responded with staus 403 and status text Forbidden', () => {
        LinksPage.clicForbiddenLink()
        LinksPage.checkLinkResponse('403', 'Forbidden')
    })

    it('It should Click Not Found Link and responded with staus 404 and status text Not Found', () => {
        LinksPage.clickNotFoundLink()
        LinksPage.checkLinkResponse('404', 'Not Found')
    })

})