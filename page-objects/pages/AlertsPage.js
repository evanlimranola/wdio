import Base from '../Base';

class AlertsPage extends Base {
    get alertsPageBtn() {
        return $('//li[@id=\'item-1\']/span[contains(text(), \'Alerts\')]');
    }

    get alertBtn() {
        return $('//button[@id=\'alertButton\']');
    }

    get timerAlertBtn() {
        return $('//button[@id=\'timerAlertButton\']');
    }

    get confirmBtn() {
        return $('//button[@id=\'confirmButton\']');
    }

    get promptBtn() {
        return $('//button[@id=\'promtButton\']');
    }

    get confirmBtnMessage() {
        return $('//span[@id=\'confirmResult\']');
    }

    get promptBtnMessage() {
        return $('//span[@id=\'promptResult\']');
    }

    getConfirmResult() {
        return this.confirmBtnMessage
    }

    getPromptResult() {
        return this.promptBtnMessage
    }
    
    clickAlertBtn() {
        this.alertBtn.click()
    }

    clickTimerAlertBtn() {
        this.timerAlertBtn.click()
    }

    clickConfirmBtn() {
        this.confirmBtn.click()
    }

    clickPromptBtn() {
        this.promptBtn.click()
    }

    clickAlertsPageBtn() {
        this.alertsPageBtn.click()
    }
}

export default new AlertsPage()