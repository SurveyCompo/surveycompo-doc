SurveyCompo supports disqualification logic to exclude participants who do not meet specific criteria. This feature ensures that only eligible participants complete your survey. You can disqualify participants based on their previous input data and variables.

The disqualification feature is built on [Conditional Logic](/advanced/conditional-logic). To define disqualification logic in SurveyCompo, add an abort screen to the `abortScreens` key in the `survey` model. The abort screen must contain a `visibleIf` key to define the disqualification conditions that trigger the abort screen.

```json
{
  "name": "My Survey",
  "pages": [
    /* ... */
  ],
  "abortScreens": [
    {
      "header": "Disqualified",
      "visibleIf": "#age < 18",
      "description": "You are not eligible to participate in this survey.",
      "okButtonLabel": "Close"
    }
  ]
}
```

SurveyCompo allows you to define multiple abort screens with different disqualification conditions. The abort screen that matches the disqualification condition is displayed to the participant. This enables you to customize the abort screen message based on the disqualification criteria. If multiple abort screens match the disqualification condition, the one with the most specific conditional logic is displayed.

!!! warning "Warning"

    An abort screen **must** contain a `visibleIf` key. If the `visibleIf` key is not present, it is deemed 'condition met' and the abort screen will always be displayed.
