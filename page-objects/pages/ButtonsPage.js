import Base from '../Base';

class ButtonsPage extends Base {
    get buttonsPage() {
        return $('//li[@id=\'item-4\']');
    }

    get doubleClickButton() {
        return $('//button[@id=\'doubleClickBtn\']');
    }

    get rightClickButton() {
        return $('//button[@id=\'rightClickBtn\']');
    }

    get dynamicClickButton() {
        return $('//button[. = \'Click Me\']');
    }

    get doubleClicMessage() {
        return $('//p[@id=\'doubleClickMessage\']');
    }

    get rightClickMessage() {
        return $('//p[@id=\'rightClickMessage\']');
    }

    get dynamicClickMessage() {
        return $('//p[@id=\'dynamicClickMessage\']');
    }

    clickButtonsPage() {
        this.buttonsPage.click()
    }

    hitDoubleClickButton() {
        this.doubleClickButton.doubleClick()
    }

    hitRightClickButton() {
        this.rightClickButton.click({button: 2})
    }

    hitClickButton() {
        this.dynamicClickButton.click()
    }

    getDoubleClickMessage() {
        return this.doubleClicMessage
    }

    getRightClickMessage() {
        return this.rightClickMessage
    }

    getDynamicClickMessage() {
        return this.dynamicClickMessage
    }
}

export default new ButtonsPage()