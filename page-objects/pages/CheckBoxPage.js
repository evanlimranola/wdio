import Base from '../Base';

class CheckBoxPage extends Base {
    get checkBoxButton() {
        return $('//li[@id=\'item-1\']');
    }

    get homeExpandButton() {
        return $('//label[@for=\'tree-node-home\']/preceding-sibling::button')
    }

    get desktopExpandButton() {
        return $('//label[@for=\'tree-node-desktop\']/preceding-sibling::button')
    }

    get documentsExpandButton() {
        return $('//label[@for=\'tree-node-documents\']/preceding-sibling::button')
    }

    get workspaceExpandButton() {
        return $('//label[@for=\'tree-node-workspace\']/preceding-sibling::button')
    }

    get officeExpandButton() {
        return $('//label[@for=\'tree-node-office\']/preceding-sibling::button')
    }

    get downloadsExpandButton() {
        return $('//label[@for=\'tree-node-downloads\']/preceding-sibling::button')
    }

    get homeCheckBox() {
        return $('//label[@for=\'tree-node-home\']/span[@class=\'rct-checkbox\']')
    }

    get desktopCheckBox() {
        return $('//label[@for=\'tree-node-desktop\']/span[@class=\'rct-checkbox\']')
    }

    get notesCheckBox() {
        return $('//label[@for=\'tree-node-notes\']/span[@class=\'rct-checkbox\']')
    }

    get commandsCheckBox() {
        return $('//label[@for=\'tree-node-commands\']/span[@class=\'rct-checkbox\']')
    }

    get documentsCheckBox() {
        return $('//label[@for=\'tree-node-documents\']/span[@class=\'rct-checkbox\']')
    }

    get workspaceCheckBox() {
        return $('//label[@for=\'tree-node-workspace\']/span[@class=\'rct-checkbox\']')
    }

    get reactCheckBox() {
        return $('//label[@for=\'tree-node-react\']/span[@class=\'rct-checkbox\']')
    }

    get angularCheckBox() {
        return $('//label[@for=\'tree-node-angular\']/span[@class=\'rct-checkbox\']')
    }

    get veuCheckBox() {
        return $('//label[@for=\'tree-node-veu\']/span[@class=\'rct-checkbox\']')
    }

    get officeCheckBox() {
        return $('//label[@for=\'tree-node-office\']/span[@class=\'rct-checkbox\']')
    }

    get publicCheckBox() {
        return $('//label[@for=\'tree-node-public\']/span[@class=\'rct-checkbox\']')
    }

    get privateCheckBox() {
        return $('//label[@for=\'tree-node-private\']/span[@class=\'rct-checkbox\']')
    }

    get classifiedCheckBox() {
        return $('//label[@for=\'tree-node-classified\']/span[@class=\'rct-checkbox\']')
    }

    get generalCheckBox() {
        return $('//label[@for=\'tree-node-general\']/span[@class=\'rct-checkbox\']')
    }

    get downloadsCheckBox() {
        return $('//label[@for=\'tree-node-downloads\']/span[@class=\'rct-checkbox\']')
    }

    get wordfileCheckBox() {
        return $('//label[@for=\'tree-node-wordfile\']/span[@class=\'rct-checkbox\']')
    }

    get excelfileCheckBox() {
        return $('//label[@for=\'tree-node-excelfile\']/span[@class=\'rct-checkbox\']')
    }

    get resultText() {
        return $$('//div[@id=\'result\']/span')
    }

    clickCheckBoxButton() {
        this.checkBoxButton.waitForExist()
        this.checkBoxButton.click()
    }

    expandHome() {
        this.homeExpandButton.click()
    }

    expandDesktop() {
        this.desktopExpandButton.click()
    }

    expandDocuments() {
        this.documentsExpandButton.click()
    }

    expandWorkspace() {
        this.workspaceExpandButton.click()
    }

    expandOffice() {
        this.officeExpandButton.click()
    }

    expandDownloads() {
        this.downloadsExpandButton.click()
    }

    expandAll() {
        this.expandHome()
        this.expandDesktop()
        this.expandDocuments()
        this.expandWorkspace()
        this.expandOffice()
        this.expandDownloads()
    }

    clickHomeCheckBox() {
        this.homeCheckBox.click()
    }

    clickDesktopCheckBox() {
        this.desktopCheckBox.click()
    }

    clickDocumentsCheckBox() {
        this.documentsCheckBox.click()
    }

    clickWorkspaceCheckBox() {
        this.workspaceCheckBox.click()
    }

    clickOfficeCheckBox() {
        this.officeCheckBox.click()
    }

    clickDownloadsCheckBox() {
        this.downloadsCheckBox.click()
    }

    clickNotesCheckBox() {
        this.notesCheckBox.click()
    }

    clickCommandsCheckBox() {
        this.commandsCheckBox.click()
    }

    clickReactCheckBox() {
        this.reactCheckBox.click()
    }

    clickAngularCheckBox() {
        this.angularCheckBox.click()
    }

    clickVeuCheckBox() {
        this.veuCheckBox.click()
    }

    clickPublicCheckBox() {
        this.publicCheckBox.click()
    }

    clickPrivateCheckBox() {
        this.privateCheckBox.click()
    }

    clickClassifiedCheckBox() {
        this.classifiedCheckBox.click()
    }

    clickGeneralCheckBox() {
        this.generalCheckBox.click()
    }

    clickWordfileCheckBox() {
        this.wordfileCheckBox.click()
    }

    clickExcelfileCheckBox() {
        this.excelfileCheckBox.click()
    }

    selectAllCheckboxes() {
        this.clickHomeCheckBox()
        this.clickDesktopCheckBox()
        this.clickNotesCheckBox()
        this.clickCommandsCheckBox()
        this.clickDocumentsCheckBox()
        this.clickWorkspaceCheckBox()
        this.clickReactCheckBox()
        this.clickAngularCheckBox()
        this.clickVeuCheckBox()
        this.clickOfficeCheckBox()
        this.clickPublicCheckBox()
        this.clickPrivateCheckBox()
        this.clickClassifiedCheckBox()
        this.clickGeneralCheckBox()
        this.clickDownloadsCheckBox()
        this.clickWordfileCheckBox()
        this.clickExcelfileCheckBox()
    }

    getResult() {
        return this.resultText
    }

}

export default new CheckBoxPage()