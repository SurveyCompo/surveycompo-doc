---
weight: 600
---

Templates in SurveyCompo let you reuse survey components across various Pages or Blocks, which helps keep everything consistent. If you notice you're repeating the same settings or keys on different pages or blocks, you can create a template for those keys. Then, you can reuse the template wherever needed. Any changes you make to the template will automatically update all the pages or blocks using it.

To define a template in SurveyCompo, use the `pageTemplates` and `blockTemplates` keys in the survey model. The `pageTemplates` key holds an array of page models that can be used as templates, while the `blockTemplates` key holds an array of block models for the same purpose. Each template is given a unique name using the `templateName` key.

The following example defines an page template with a footer and applied to multiple pages:

```json
{
  "name": "My Survey",
  "pageTemplates": [
    {
      "templateName": "pageWithFooter",
      "htmlFooter": "<p>By submitting this survey, you agree to our <a href='https://www.surveycompo.com/privacy-policy' class='my-link'>Privacy Policy</a></p>"
    }
  ],
  "pages": [
    {
      "header": "About You",
      "templateName": "pageWithFooter",
      "blocks": [
        {
          "title": "What is your preferred method of contact?",
          "inputs": [
            {
              "type": "DROPDOWN",
              "hint": "Please select",
              "id": "methodOfContact",
              "dropdownInputOptions": ["Email", "Phone", "Text Message"],
              "validations": [
                {
                  "type": "REQUIRED",
                  "message": "Please select your preferred method of contact"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "templateName": "pageWithFooter",
      "nextButtonLabel": "Submit",
      "blocks": [
        {
          "title": "Overall, how satisfied are you with our product?",
          "inputs": [
            {
              "type": "LIKERT_SCALE",
              "likertInputPreset": "SATISFACTION",
              "id": "satisfaction"
            }
          ]
        }
      ]
    }
  ]
}
```

Block templates work similarly to page templates, allowing you to define and reuse them across multiple blocks.

!!! note "Note"

    The `inputs` and `blocks` keys in templates are ignored. This means you cannot use templates to repeat the same set of questions across multiple pages or blocks.
