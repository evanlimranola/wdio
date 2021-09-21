class App {

    switchWindow(value) {
        browser.switchWindow(value)
    }

    openHomePage() {
        browser.url('https://demoqa.com/')
        browser.maximizeWindow() //Or use Set Window Size
    }

    openElementsPage() {
        const elements = $('//h5[contains(text(), \'Elements\')]')
        elements.waitForExist()
        elements.click()
    }

    openFormsPage() {
        const elements = $('//h5[contains(text(), \'Forms\')]')
        elements.waitForExist()
        elements.click()
    }

    openAlertsPage() {
        const elements = $('//h5[contains(text(), \'Alerts, Frame & Windows\')]')
        elements.waitForExist()
        elements.click()
    }
}

export default new App()