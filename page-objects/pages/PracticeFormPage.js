import Base from '../Base';

const path = require('path')

class PracticeFormPage extends Base {
    get formsButton() {
        return $('//li[@id=\'item-0\']/span[contains(text(), \'Practice Form\')]');
    }

    get fName() {
        return $('//input[@id=\'firstName\']');
    }

    get lName() {
        return $('//input[@id=\'lastName\']');
    }

    get email() {
        return $('//input[@id=\'userEmail\']');
    }

    get genderMale() {
        return $('//input[@value=\'Male\']/following-sibling::label');
    }

    get genderFemale() {
        return $('//input[@value=\'Female\']/following-sibling::label');
    }

    get genderOther() {
        return $('//input[@value=\'Other\']/following-sibling::label');
    }

    get mobile() {
        return $('//input[@id=\'userNumber\']');
    }

    get dob() {
        return $('//input[@id=\'dateOfBirthInput\']');
    }

    get month() {
        return $('//select[@class=\'react-datepicker__month-select\']');
    }

    get year() {
        return $('//select[@class=\'react-datepicker__year-select\']');
    }

    get day() {
        return $('//div[@class=\'react-datepicker__week\']/div[contains(text(), \'20\')]')
    }

    get subjects() {
        return $('//input[@id=\'subjectsInput\']');
    }

    get sportsCheckBox() {
        return $('//input[@id=\'hobbies-checkbox-1\']/following-sibling::label');
    }

    get readingCheckBox() {
        return $('//input[@id=\'hobbies-checkbox-2\']/following-sibling::label');
    }

    get musicCheckBox() {
        return $('//input[@id=\'hobbies-checkbox-3\']/following-sibling::label');
    }

    get currAddress() {
        return $('//textarea[@id=\'currentAddress\']');
    }

    get state() {
        return $('//div[@id=\'state\']/div');
    }

    get stateDropdown() {
        return $('//div[@id=\'state\']/div/following-sibling::div/div/div[contains(text(), \'Haryana\')]');
    }

    get city() {
        return $('//div[@id=\'city\']/div/div/div');
    }

    get cityDropdown() {
        return $('//div[@id=\'city\']/div/following-sibling::div/div/div[contains(text(), \'Karnal\')]');
    }

    get uploadFileBtn() {
        return $('//input[@id=\'uploadPicture\']');
    }

    get submitButton() {
        return $('//button[@id=\'submit\']');
    }

    get modalName() {
        return $('//td[contains(text(), \'Student Name\')]/following-sibling::td')
    }

    get modalEmail() {
        return $('//td[contains(text(), \'Student Email\')]/following-sibling::td')
    }

    get modalGender() {
        return $('//td[contains(text(), \'Gender\')]/following-sibling::td')
    }

    get modalMobile() {
        return $('//td[contains(text(), \'Mobile\')]/following-sibling::td')
    }

    get modalDOB() {
        return $('//td[contains(text(), \'Date of Birth\')]/following-sibling::td')
    }

    get modalSubjects() {
        return $('//td[contains(text(), \'Subjects\')]/following-sibling::td')
    }

    get modalHobbies() {
        return $('//td[contains(text(), \'Hobbies\')]/following-sibling::td')
    }

    get modalPicture() {
        return $('//td[contains(text(), \'Picture\')]/following-sibling::td')
    }

    get modalAddress() {
        return $('//td[contains(text(), \'Address\')]/following-sibling::td')
    }

    get modalStateCity() {
        return $('//td[contains(text(), \'State and City\')]/following-sibling::td')
    }

    getSubjectOption(position) {
        return '//div[@class=\'subjects-auto-complete__menu-list subjects-auto-complete__menu-list--is-multi css-11unzgr\']/div[position()='+ position + ']'
    }

    setFName(value) {
        this.fName.setValue(value)
    }

    setLName(value) {
        this.lName.setValue(value)
    }

    setEmail(value) {
        this.email.setValue(value)
    }

    setGenderMale(value) {
        this.genderMale.click()
    }

    setGenderFemale(value) {
        this.genderFemale.click()
    }

    setGenderOthers(value) {
        this.genderOther.click()
    }

    setDOB() {
        this.dob.click()
        this.month.selectByVisibleText('October')
        this.year.selectByVisibleText('1995')
        this.day.click()
    }

    setNumber(value) {
        this.mobile.setValue(value)
    }

    selectAccounting(value){
        this.subjects.click()
        this.subjects.setValue('Accoun')
        $(this.getSubjectOption(value)).click()
    }

    selectMaths(value){
        this.subjects.click()
        this.subjects.setValue('Mat')
        $(this.getSubjectOption(value)).click()
    }

    selectSports() {
        this.sportsCheckBox.click()
    }

    selectReading() {
        this.readingCheckBox.click()
    }

    selectMusic() {
        this.musicCheckBox.click()
    }

    setCurrentAddress(value) {
        this.currAddress.setValue('Test Address')
    }

    setState() {
        this.state.click()
        this.stateDropdown.click()
    }

    setCity() {
        this.city.click()
        this.cityDropdown.click()
    }

    uploadPhoto() {
        const filePath = path.join(__dirname, '../../data/SamplePhoto.jpg')
        const remoteFilePath = browser.uploadFile(filePath)

        this.uploadFileBtn.setValue(remoteFilePath)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }

    clickFormsButton() {
        this.formsButton.click()
    }

    validateForm() {
        expect(this.modalName).toHaveText('Test Test')
        expect(this.modalEmail).toHaveText('Test@Test.com')
        expect(this.modalGender).toHaveText('Other')
        expect(this.modalMobile).toHaveText('1234567890')
        expect(this.modalDOB).toHaveText('20 October,1995')
        expect(this.modalSubjects).toHaveText('Maths, Accounting')
        expect(this.modalHobbies).toHaveText('Sports, Reading, Music')
        expect(this.modalPicture).toHaveText('SamplePhoto.jpg')
        expect(this.modalAddress).toHaveText('Test Address')
        expect(this.modalStateCity).toHaveText('Haryana Karnal')
    }
}

export default new PracticeFormPage()