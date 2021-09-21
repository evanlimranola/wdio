import App from '../page-objects/App'
import CheckBoxPage from '../page-objects/pages/CheckBoxPage'

describe('E2E Testing for Checkboxes', () => {
    it('Should Reach the CheckBox Page for Elements', () => {
        App.openHomePage();
        expect(browser).toHaveUrl('https://demoqa.com/')

        App.openElementsPage()
        expect(browser).toHaveUrl('https://demoqa.com/elements')

        CheckBoxPage.clickCheckBoxButton()
    })

    it('It should expand all and select all checkboxes', () => {
        const expected = ['home', 'desktop', 'notes', 'commands',
            'documents', 'workspace', 'react', 'angular',
            'veu', 'office', 'public', 'private',
            'classified',  'general', 'downloads',  'wordFile', 'excelFile'
            ]
        
        CheckBoxPage.expandAll()
        CheckBoxPage.clickHomeCheckBox()
         
        let index = -1
        CheckBoxPage.getResult().filter(element => {
            if(index > -1){
                expect(element).toHaveText(expected[index])
            }
            index++
        }) //Iterate on List of elements
    })
})