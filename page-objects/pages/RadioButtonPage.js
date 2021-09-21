import Base from '../Base';

class RadioButtonPage extends Base {
    get radioButton() {
        return $('//li[@id=\'item-2\']');
    }

    get yes() {
        return $('//label[@for=\'yesRadio\']')
    }

    get impressive() {
        return $('//label[@for=\'impressiveRadio\']')
    }

    get no() {
        return $('//input[@id=\'noRadio\']')
    }

    get result() {
        return $('//span[@class=\'text-success\']')
    }

    clickRadiobutton() {
        this.radioButton.click()
    }

    selectYes() {
        this.yes.click()
    }

    selectImpressive() {
        this.impressive.click()
    }

    getNo() {
        return this.no
    }

    getResult() {
        return this.result
    }

}

export default new RadioButtonPage()