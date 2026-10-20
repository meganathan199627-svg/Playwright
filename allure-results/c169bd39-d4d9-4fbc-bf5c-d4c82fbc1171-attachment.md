# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alerts.spec.js >> PromptAlert
- Location: tests\Alerts.spec.js:50:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@onclick="promptbox()"]')
    - locator resolved to <button class="btn btn-info" onclick="promptbox()">click the button to demonstrate the prompt box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    42 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [aria-hidden] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [ref=e50]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - button [ref=e54] [cursor=pointer]: "click the button to display an alert box:"
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - iframe [ref=e61]:
        - generic [ref=f2e1]:
          - generic [ref=f2e6]:
            - link [ref=f2e7] [cursor=pointer]:
              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=9&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
            - generic [ref=f2e10]:
              - generic [ref=f2e11]:
                - link "National Health Authority" [ref=f2e15] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=0&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
                  - text: National HealthAuthority
                - link "Quick \"Scan and Share\" For OPD Registration at ABDM Enabled Hospitals, Clinics, And Labs" [ref=f2e19] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=7&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
                  - text: Quick "Scan and Share"For OPD Registration atABDM EnabledHospitals, Clinics, AndLabs
                - link "Central Bureau of Comm." [ref=f2e23] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=1&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
              - generic [ref=f2e26]:
                - link:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
                - link "Open" [ref=f2e28] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
                - link [ref=f2e29] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CRyTOJxzXav3UOr20vr0Po-7Z8AjTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQmpAkDhzjVmn0Y-qAMByAPLBKoE7wFP0GR9Z0XSZETI90Wr3syoOGdT5Iue0SXzJ6_DRrVt7AMj1zIl-zWtxXaikbD2G-Gud8lZaidsx6Ha0tOKPTWL7AanJ9zkY-mEMxQsduWRB2SMsLQbyelOmWqVL5kgK3OimspbtyGUoysAxBsPC8shhd58E6_tG86c9xtc_UPy1QfLpc3yQI5gzVUK6hsfts0lWHU2V5j1pggmAkM3iQ3M9k9jb3pcx2Xo167SHPLimN4B5qsUIJuLcgd9aVA6iG3lR4aujutYzHw5FZQ-0t_mR7rdoee7cDlEmckxLiG3STAWjP_bwUruhmBurHYHVsAEqayS_uQFiAWexP7gWqAGLoAH-8ea2x-oB6fMsQKoB-LYsQKoB6jtsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwD6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOljtk4GLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAYAMAaIMESoKCgiO37ECleKxAkgBkAEBqg0CSU7IDQHqDRMI2ImDi43IlwMVPZqvAR0jdxaOiA4J2BMDiBQB0BUBmBYByhYhChNuaWMuZ29pLmFhcm9neWFzZXR1MgoxNTA1ODI1MzU3-BYBgBcBshcQGAEqCjY2Mzg2MzM1NDdQBroXAjgBqhgXCQAAAAAAPvdAEgo2NjM4NjMzNTQ3GAGyGAkSAvFsGC4iAQDQGAGyGQE3whkCCAE&gclid=EAIaIQobChMIvYSDi43IlwMVPZqvAR0jdxaOEAEYASAAEgJPb_D_BwE&num=1&cid=CAQSoAIAQM4h3OVtij09Gx-XnsBDaeFA1jyCKABJsE-c42ei3Fk6Tq7WV6ulW3D8aZYTbGiM3vPBYefKcOUcQGbtZ5hRwmAVBcc9VS7Kb_UqUxGgv8OO9DUxmaJqpbSA0KGAV7d-rZFB1-3Rf6qrklcohzjV88iWMohB7fGpvZ0U0YOsltk-AV-AELB6SuCdnCuH3-d-SON0PbSepa5Z9ZXW7Q-iBpnjYUdeNbAbGGXiXCvklgsK0lIrkXPRdyFkFTYRG165RjbX0eRsD83DKGosvtDjJ1NKkfR9jtgE0mm1r7FVFBPmbQ3YD-AySym6OMEAGunpaLDR9uaff77KXuoTtcLfpbdiapXa9W4w5MSqRSt2hDCDecLC4ewImRRua2Se0QwYAQ&sig=AOD64_1sOdX9juwhU7ImZV1_6EPGT6Zvpw&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
          - generic [ref=f2e39] [cursor=pointer]
          - button [ref=f2e44] [cursor=pointer]
          - iframe
    - insertion [ref=e64]:
      - generic [ref=e67]:
        - heading [level=2] [ref=e69]: Discover more
        - link [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: Selenium training
        - link [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: Try Dev Tools
        - link [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: Try Cloud Tools
        - link [ref=e85] [cursor=pointer]:
          - generic [ref=e86]: Automated alert handling
        - link [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: Source Robotics
        - link [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: Web element interaction
        - link [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: Learn to Code
        - link [ref=e105] [cursor=pointer]:
          - generic [ref=e106]: Find Tech Guides
    - insertion [ref=e112]:
      - generic [ref=e115]:
        - heading [level=2] [ref=e117]: Discover more
        - link [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: Automation testing tools
        - link [ref=e123] [cursor=pointer]:
          - generic [ref=e124]: Automation demo site
        - link [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: Web automation services
        - link [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: Software testing courses
        - link [ref=e138] [cursor=pointer]:
          - generic [ref=e139]: Quality assurance consulting
        - link [ref=e143] [cursor=pointer]:
          - generic [ref=e144]: UI testing solutions
        - link [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Automation framework templates
        - link [ref=e153] [cursor=pointer]:
          - generic [ref=e154]: Test case management
    - insertion [ref=e160]:
      - iframe [ref=e162]:
        - generic [ref=f5e1]:
          - generic [ref=f5e7]:
            - generic [ref=f5e8]:
              - generic [ref=f5e9]: CentralBureau ofComm.
              - generic [ref=f5e11]: Central Bureau ofComm.
            - generic [ref=f5e15]:
              - generic "Central Bureau of Comm." [ref=f5e16]:
                - link "National Health Authority" [ref=f5e17] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=0&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
                  - text: NationalHealthAuthority
              - generic [ref=f5e18]:
                - link:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=7&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
              - generic "Central Bureau of Comm." [ref=f5e20]:
                - link "Central Bureau of Comm." [ref=f5e22] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=1&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
            - generic [ref=f5e26]:
              - link "Open" [ref=f5e28] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
              - link [ref=f5e29] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
              - link [ref=f5e32] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfCfZKBzXavrrAZGv9tMP9fadgAnTqsSiigHgzrKGyxahpvjz0B0QASCPvrcvYOWS6IPYDqAB-4_K-0TIAQGpAkDhzjVmn0Y-qAMByAPLBKoE-AFP0NHxypIqQpHm3TAWJZAmh7PTvT_DqxfZLca7N_ZUlg3pUqunvxOEeyF6ILej5B5Zd7TIDtNWE49q2TD1vDIFquxJBBmJP3BbUQFU0RAFUsCI3Rs3nXsFtR8nUH8dHc1dCiUt0ZKI37yI4x8ze-py5vbjRhVW7sVoQ2j1B0myMnKUq5GRfO0NdP5nvXtMpyaJNLNcc_23oyknwJKrftqBgcDfjPFV-KqX8EdC0tLuv3TMllZylPkzd1P0-RHVaLCFxDZ5-AZYaEtyY1Mew1UiISAkT8aAAKxtSyz0x6UZ0y3GnsrsnSapDuqMgaYopsq6iMuAGjDncsAEqayS_uQFiAWexP7gWoAH-8ea2x-oB6nrsQKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB6EBqAetyhuoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwH6BxNuaWMuZ29pLmFhcm9neWFzZXR1uAgB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBhIvf3BOlijr4WLjciXA2ABsQk5W9BnxUtCWIAKAZgLAcgLAaIMDSoGCgSZ7rECSAGQAQGqDQJJTsgNAeoNEwjgo4eLjciXAxWRl30EHXV7B5CIDgnYEwOIFAHQFQGYFgHKFiEKE25pYy5nb2kuYWFyb2d5YXNldHUyCjE1MDU4MjUzNTf4FgGAFwGyFxAYASoKNjYzODYzMzU0N1AGuhcCOAGqGBcJAAAAAAA-90ASCjY2Mzg2MzM1NDcYAbIYCRIC8WwYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI-p-Hi43IlwMVkZd9BB11eweQEAEYASAAEgIsWfD_BwE&num=1&cid=CAQSnwIAQM4h3LsTj0Fyd1B3oFF_SMeOCeWUu5tQOAOHVnDCo29KHrFwdOR9Sh-FsmORDVBuAyqE3-w3geFIpCl1DLZiUaersMS9OwwtC1M484GwWwCSoKxedfyz_NtjNJAQ-6gCr7PMedjMeoXoCruQy0nO-Fw14p-mIOVoWSzN8TlPrNadVyJQBxTg1YcjvJd6jRGau88etL02LWYQG_WbV7L3Vpv1ODxdfqEhhCjhi0FOZIt5QqepE_xvq-JLvU3SCp0TiwOlYRDKJNmggYZ-9pT_LBx4WdhhaRRgGKgJiccDSBS8Bah6xEDtOvMOn-dCdgc4olPiRfu8sroBr1GhOuacEqJ3yxFn3dJWFvDM9f5BQc0XWzLdLAW8v0Wq6-Pl_hgB&sig=AOD64_3ZSmZQDSQ1J20Uu1Ap2EqeHl7TFg&rf=1&nb=8&adurl=https://play.google.com/store/apps/details%3Fid%3Dnic.goi.aarogyasetu%26gad_source%3D5%26gad_campaignid%3D24362590750
          - generic [ref=f5e33] [cursor=pointer]
          - button [ref=f5e38] [cursor=pointer]
          - iframe
    - contentinfo [ref=e164]:
      - generic [ref=e166]:
        - generic [ref=e167]:
          - text: "\"@ 2016\""
          - link [ref=e168]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e169]:
          - link [ref=e170]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e171]: 
          - link [ref=e172]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e173]: 
          - link [ref=e174]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e175]: 
          - link [ref=e176]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e177]: 
          - link [ref=e178]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e179]: 
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
  42 | await page.locator('//button[@onclick="confirmbox()"]').click()
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
> 62 | await page.locator('//button[@onclick="promptbox()"]').click()
     |                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  63 | 
  64 | })
```