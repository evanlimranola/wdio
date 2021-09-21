import Base from '../Base';

class LinksPage extends Base {
    get linksPage() {
        return $('//li[@id=\'item-5\']');
    }

    get simpleLink() {
        return $('//a[@id= \'simpleLink\']')
    }

    get dynamicLink() {
        return $('//a[@id= \'dynamicLink\']')
    }

    get createdLink() {
        return $('//a[@id= \'created\']')
    }

    get noContentLink() {
        return $('//a[@id= \'no-content\']')
    }

    get movedLink() {
        return $('//a[@id= \'moved\']')
    }

    get badRequestLink() {
        return $('//a[@id= \'bad-request\']')
    }

    get unauthorizedLink() {
        return $('//a[@id= \'unauthorized\']')
    }

    get forbiddenLink() {
        return $('//a[@id= \'forbidden\']')
    }

    get notFoundLink() {
        return $('//a[@id= \'invalid-url\']')
    }

    get linkResponse() {
        return $$('//p[@id= \'linkResponse\']/b')
    }

    clickLinksPage() {
        this.linksPage.click()
    }

    clickSimpleLink() {
        this.simpleLink.click()
    }

    clickDynamicLink() {
        this.dynamicLink.click()
    }

    clickCreatedLink() {
        this.createdLink.click()
    }

    clickNoContentLink() {
        this.noContentLink.click()
    }

    clickMovedLink() {
        this.movedLink.click()
    }

    clickBadRequestLink() {
        this.badRequestLink.click()
    }

    clickUnauthorizedLink() {
        this.unauthorizedLink.click()
    }

    clicForbiddenLink() {
        this.forbiddenLink.click()
    }

    clickNotFoundLink() {
        this.notFoundLink.click()
    }

    checkLinkResponse(statusCode, statusText) {
        const expected = [statusCode, statusText]
        let index = 0
        this.linkResponse.filter(element => {
            expect(element).toHaveText(expected[index])
            index++
        })
    }

    checkNewTab(cHandle) {
        var handles = browser.getWindowHandles()
        var nHandle 

        for(var i = 0; i < handles.length; i++) {
            if(handles[i] != cHandle) {
                nHandle = handles[i]
            }
        }

        browser.switchToWindow(nHandle.toString())
        expect(browser).toHaveUrl('https://demoqa.com/')
        browser.closeWindow()
        browser.switchToWindow(cHandle.toString())
    }
}

export default new LinksPage()