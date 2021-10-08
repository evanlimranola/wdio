# DemoQA Webdriver IO Automation
## Overview
This is an automation project to test and automate https://demoqa.com/ website.
The project is using WebdriverIO and shows how to handle different types of web elements, forms, alerts and windows.
## Topics
- Elements
  - Text Boxes
  - Radio Buttons
  - Buttons
  - Check Boxes
  - Links
- Forms
  - Practice Forms
- Alerts, Frame and Windows
  - Frames
  - Nested Frames
  - Browser Windows
  - Modal Dialogs
  - Alerts
## Code
The project uses the Page Object Model design pattern for easy maintenance in the future and code reusability. It will also help with managing 
locators and reduce duplication.

The project is separated into different folders that separates the locator and the actual test cases.
![image](https://user-images.githubusercontent.com/26628386/136510989-498e3a8f-977b-435d-b28b-6a1203c0a1e4.png)
### Page objects
Page objects is divided into two different folders, **components** and **pages**. Components includes all parts of the webpage that are available in different pages. For example, a navbar or a menu that can be accessed throughout the wewbsite. On the other hand, pages are unique to themselves and have different web elements that are only avaiable on  that specific web page. For example, the login page only is the only page where the username and password field is available.
### Tests
In the tests folder, we will see the actual test cases that will run and be executed by the program. Each test file is separated from each other based on what page they are 
working on. For the alerts page, the e2e-alerts.js test file is the one who will run the automated test for it.
## Sample Result
```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 94.0.4606.71 windows #0-0] Running: chrome (v94.0.4606.71) on windows
[chrome 94.0.4606.71 windows #0-0] Session ID: 3b155e2b3311a8e41f0f313276f00667
[chrome 94.0.4606.71 windows #0-0]
[chrome 94.0.4606.71 windows #0-0] » \test\e2e-practiceform.js
[chrome 94.0.4606.71 windows #0-0] E2E Testing for Practice Forms Page
[chrome 94.0.4606.71 windows #0-0]    ✓ Should Reach the Practice Forms Page for Forms
[chrome 94.0.4606.71 windows #0-0]    ✓ Should fill up the practice form successfully
[chrome 94.0.4606.71 windows #0-0]
[chrome 94.0.4606.71 windows #0-0] 2 passing (13.5s)
```
**Will be updating to add more test cases and a reporter for the project**
