import Base from '../Base';

class BrowserWindowsPage extends Base {
    get browserWindowsBtn() {
        return $('//li[@id=\'item-0\']/span[contains(text(), \'Browser Windows\')]');
    }

    get newTabBtn() {
        return $('//button[@id=\'tabButton\']');
    }
    
    get newWindowBtn() {
        return $('//button[@id=\'windowButton\']');
    }
    
    get newWindowMessageBtn() {
        return $('//button[@id=\'messageWindowButton\']');
    }

    clickBrowserWindowsBtn() {
        this.browserWindowsBtn.click()
    }

    clickNewTabBtn() {
        this.newTabBtn.click()
    }

    clickNewWindowBtn() {
        this.newWindowBtn.click()
    }

    clickNewWindowMessageBtn() {
        this.newWindowMessageBtn.click()
    }

}

export default new BrowserWindowsPage()