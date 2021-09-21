import Base from '../Base';

class NestedFramesPage extends Base {
    get nestedFramesPageBtn() {
        return $('//li[@id=\'item-3\']/span[contains(text(), \'Nested Frames\')]');
    }

    get parentFrame() {
        return $('//iframe[@id=\'frame1\']');
    }

    get childFrame() {
        return $('//iframe');
    }

    get body() {
        return $('//html/body');
    }

    switchToFirstFrame() {
        browser.switchToFrame(this.parentFrame)
    }

    switchToSecondFrame() {
        browser.switchToFrame(this.childFrame)
    }

    getBody() {
        return this.body
    }

    clickNestedFramesPageBtn() {
        this.nestedFramesPageBtn.click()
    }
}

export default new NestedFramesPage()