import Base from '../Base';

class TextBoxPage extends Base {
    get textBoxButton() {
        return $('//li[@id=\'item-0\']');
    }

    get fullNameInput() {
        return $('//input[@id=\'userName\']')
    }

    get emailInput() {
        return $('//input[@id=\'userEmail\']')
    }

    get currAddressInput() {
        return $('//textarea[@id=\'currentAddress\']')
    }

    get permAddressInput() {
        return $('//textarea[@id=\'permanentAddress\']')
    }

    get submitButton() {
        return $('//button[@id=\'submit\']')
    }

    get fullNameText() {
        return $('//p[@id=\'name\']')
    }

    get emailText() {
        return $('//p[@id=\'email\']')
    }

    get currAddressText() {
        return $('//p[@id=\'currentAddress\']')
    }

    get permAddressText() {
        return $('//p[@id=\'permanentAddress\']')
    }

    clickTextBoxButton() {
        this.textBoxButton.click()
    }

    fillTextBoxForm(fullName, email, currentAdress, permanentAddress) {
        this.fullNameInput.setValue(fullName)
        this.emailInput.setValue(email)
        this.currAddressInput.setValue(currentAdress)
        this.permAddressInput.setValue(permanentAddress)
    }

    submitTextBoxForm() {
        this.submitButton.click()
    }


}

export default new TextBoxPage()