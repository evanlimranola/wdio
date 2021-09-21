import Base from '../Base';

class ModalDialogsPage extends Base {
    get modalDialogsPageBtn() {
        return $('//li[@id=\'item-4\']/span[contains(text(), \'Modal Dialogs\')]');
    }

    get smallModalBtn() {
        return $('//button[@id=\'showSmallModal\']');
    }

    get smallModalTitle() {
        return $('//div[@id=\'example-modal-sizes-title-sm\']');
    }

    get smallModalCloseBtn() {
        return $('//button[@id=\'closeSmallModal\']');
    }

    get largeModalBtn() {
        return $('//button[@id=\'showLargeModal\']');
    }

    get largeModalTitle() {
        return $('//div[@id=\'example-modal-sizes-title-lg\']');
    }

    get largeModalCloseBtn() {
        return $('//button[@id=\'closeLargeModal\']');
    }

    getSmallModalTitle() {
        return this.smallModalTitle
    }

    getlargeModalTitle() {
        return this.largeModalTitle
    }

    clickSmallModalBtn() {
        this.smallModalBtn.click()
    }

    clickLargeModalBtn() {
        this.largeModalBtn.click()
    }

    clickCloseSmallModalBtn() {
        this.smallModalCloseBtn.click()
    }

    clickCloseLargeModalBtn() {
        this.largeModalCloseBtn.click()
    }

    clickModalDialogsPageBtn() {
        this.modalDialogsPageBtn.click()
    }

}

export default new ModalDialogsPage()