# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alerts.spec.js >> ConfirmationAlert
- Location: tests\Alerts.spec.js:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@onclick="confirmbox()"]')
    - locator resolved to <button onclick="confirmbox()" class="btn btn-primary">click the button to display a confirm box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    25 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [aria-hidden] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16] [cursor=pointer]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18] [cursor=pointer]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [ref=e50] [cursor=pointer]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52] [cursor=pointer]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - button [ref=e54] [cursor=pointer]: "click the button to display an alert box:"
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - generic [ref=e62]:
        - heading [level=2] [ref=e64]: Discover more
        - link [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: Automation testing tools
        - link [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: Automation demo site
        - link [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: Web automation services
        - link [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: Software testing courses
        - link [ref=e85] [cursor=pointer]:
          - generic [ref=e86]: Quality assurance consulting
        - link [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: UI testing solutions
        - link [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: Automation framework templates
        - link [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: Test case management
    - insertion [ref=e107]:
      - generic [ref=e110]:
        - heading [level=2] [ref=e112]: Discover more
        - link [ref=e113] [cursor=pointer]:
          - generic [ref=e114]: Test Keyboards
        - link [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: DevOps automation services
        - link [ref=e123] [cursor=pointer]:
          - generic [ref=e124]: Book Play Tickets
        - link [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: Read Showbiz News
        - link [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: Automation testing tools
        - link [ref=e138] [cursor=pointer]:
          - generic [ref=e139]: Automation demo site
        - link [ref=e143] [cursor=pointer]:
          - generic [ref=e144]: Web automation services
        - link [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Software testing courses
    - insertion [ref=e155]:
      - generic [ref=e158]:
        - heading [level=2] [ref=e160]: Discover more
        - link [ref=e161] [cursor=pointer]:
          - generic [ref=e162]: Selenium training
        - link [ref=e166] [cursor=pointer]:
          - generic [ref=e167]: Try Dev Tools
        - link [ref=e171] [cursor=pointer]:
          - generic [ref=e172]: Try Cloud Tools
        - link [ref=e176] [cursor=pointer]:
          - generic [ref=e177]: Automated alert handling
        - link [ref=e181] [cursor=pointer]:
          - generic [ref=e182]: Source Robotics
        - link [ref=e186] [cursor=pointer]:
          - generic [ref=e187]: Web element interaction
        - link [ref=e191] [cursor=pointer]:
          - generic [ref=e192]: Learn to Code
        - link [ref=e196] [cursor=pointer]:
          - generic [ref=e197]: Find Tech Guides
    - insertion [ref=e203]:
      - generic [ref=e206]:
        - heading [level=2] [ref=e208]: Discover more
        - link [ref=e209] [cursor=pointer]:
          - generic [ref=e210]: Cross browser testing
        - link [ref=e214] [cursor=pointer]:
          - generic [ref=e215]: Test script development
        - link [ref=e219] [cursor=pointer]:
          - generic [ref=e220]: Performance testing tools
        - link [ref=e224] [cursor=pointer]:
          - generic [ref=e225]: Load testing services
        - link [ref=e229] [cursor=pointer]:
          - generic [ref=e230]: Compare Broadband
        - link [ref=e234] [cursor=pointer]:
          - generic [ref=e235]: API testing software
        - link [ref=e239] [cursor=pointer]:
          - generic [ref=e240]: Mobile app automation
        - link [ref=e244] [cursor=pointer]:
          - generic [ref=e245]: Continuous integration tools
    - contentinfo [ref=e250]:
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link [ref=e254] [cursor=pointer]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link [ref=e256] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e257]: 
          - link [ref=e258] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e259]: 
          - link [ref=e260] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e261]: 
          - link [ref=e262] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e263]: 
          - link [ref=e264] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e265]: 
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | 
  4  | //Types ===> Simple Alert, Confirmation Alert, Prompt Alert
  5  | 
  6  | //Simple Alert ----> only OK button in the Alert
  7  | 
  8  | test ('SimpleAlert', async ({page}) => {
  9  | 
  10 | await page.goto ("https://demo.automationtesting.in/Alerts.html");
  11 | 
  12 | //Syntax code for Alert Handling ---> should be before the click action in the test code
  13 | 
  14 |  page.once('dialog', async dialog => {
  15 | dialog.accept() //------> Handle OK button 
  16 | console.log(dialog.message())
  17 | console.log(dialog.type())
  18 | 
  19 |  } )
  20 | 
  21 | await page.locator('//button[@onclick="alertbox()"]').click() 
  22 | 
  23 | })
  24 | 
  25 | 
  26 | 
  27 | 
  28 | // Confirmation Alert Handling --->  OK or Cancel ----> dialog.accept()  or dialog.dismiss()
  29 | 
  30 | test ('ConfirmationAlert', async ({page}) => {
  31 | 
  32 | await page.goto ("https://demo.automationtesting.in/Alerts.html");
  33 | 
  34 | //Syntax code for Alert Handling 
  35 |  page.once('dialog', async dialog => {
  36 | dialog.accept() //------> Handle OK button
  37 | // dialog.dismiss() //------> Handle Cancel button
  38 | console.log(dialog.message())
  39 | console.log(dialog.type())
  40 |  } )
  41 | await page.locator('//a[@href="#CancelTab"]').click()
> 42 | await page.locator('//button[@onclick="confirmbox()"]').click()
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 | 
  44 | })
  45 | 
  46 | 
  47 | 
  48 | //Prompt Based Alert Handling
  49 | 
  50 | test ('PromptAlert', async ({page}) => {
  51 | 
  52 | await page.goto ("https://demo.automationtesting.in/Alerts.html");
  53 | //Syntax code for Alert Handling
  54 |  page.once('dialog', async dialog => {
  55 | await dialog.accept("Hi Devaraj") //------> in Prompt Alert we can pass the Text in the Prompt box into the .accept("gggggg") or .dismiss("ggggg")
  56 | // dialog.dismiss()
  57 | console.log(dialog.message())
  58 | console.log(dialog.type())
  59 | console.log(dialog.defaultValue()) //-----> used to print default text in the Prompt command box
  60 |  } )
  61 | await page.locator('//a[@href="#Textbox"]').click()
  62 | await page.locator('//button[@onclick="promptbox()"]').click()
  63 | 
  64 | })
```