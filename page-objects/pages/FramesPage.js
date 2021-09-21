import Base from '../Base';

class Framespage extends Base {
    get framesPageBtn() {
        return $('//li[@id=\'item-2\']/span[contains(text(), \'Frames\')]');
    }

    get firstFrame() {
        return $('//iframe[@id=\'frame1\']');
    }

    get secondFrame() {
        return $('//iframe[@id=\'frame2\']');
    }

    get sampleHeading() {
        return $('//h1[@id=\'sampleHeading\']');
    }

    getHeading() {
        return this.sampleHeading
    }

    switchToFirstFrame() {
        browser.switchToFrame(this.firstFrame)
    }

    switchToSecondFrame() {
        browser.switchToFrame(this.secondFrame)
    }

    clickFramesPageBtn() {
        this.framesPageBtn.click()
    }
}

export default new Framespage()