---
weight: 100
---

SurveyCompo offers a powerful and versatile way to design surveys using a flexible data model written in JSON. This section introduces you to the key building blocks of a SurveyCompo survey.

### Survey Structure

Imagine your SurveyCompo survey as a journey. Here's a visual breakdown of the key elements:

_Start Screen (Optional)_

: Welcomes users, sets the stage, and provides initial instructions.

_Survey Pages_

: The heart of your survey, where questions are asked and data is collected. Each page is made up of one or more "Blocks". SurveyCompo gives you the freedom to design your surveys in either of these styles:

      - **Single Page**: All questions are displayed on one page.
      - **Multi-Page**: Questions are divided into multiple pages, guiding users through the survey.

_Blocks_

: The fundamental units that hold your questions. They contain input controls where users provide their responses. SurveyCompo offers a variety of input controls, from text boxes to specialized elements like Likert scales.

_End Screen (Optional)_

: Signal the end of the survey.

      SurveyCompo offers two customizable end screens to manage your survey flow.

      - *Completion Screen*: Thanks respondents and may provide further instructions.
      - *Abort Screen*: Informs users if they don't meet survey criteria.

### The User Flow

![user-flow](../assets/images/user-flow.png){: .center}

Imagine a user journey through the survey:

1. **Invitation**: The optional Start Screen introduces the survey.
1. **Questions and Answers**: Users navigate through Survey Pages, providing responses in Blocks.
1. **Outcome**:
   - **Success**: Upon completion, they see the Completion Screen.
   - **Disqualification**: If ineligible, they are directed to the Abort Screen.

### Survey JSON Example

SurveyCompo uses **JSON** (JavaScript Object Notation) to define your survey's structure. Think of JSON as a blueprint, using key-value pairs to describe each survey element and its properties. Here's a simplified example:

```json linenums="1"
{
  "name": "My Survey",
  "startScreens": [
    /* ... */
  ],
  "pages": [
    {
      "blocks": [
        {
          "inputs": [
            /* ... */
          ]
        }
      ]
      /* ... */
    }
    /* ... */
  ],
  "completeScreens": [
    /* ... */
  ],
  "abortScreens": [
    /* ... */
  ]
}
```

### Survey Data Keys

| Method                  | Type                          | Default        | Description                                                                                                                                               |
| ----------------------- | ----------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                  | string                        | n/a (Required) | The name of the survey.                                                                                                                                   |
| `customRef`             | string                        | null           | A custom reference ID for the survey.                                                                                                                     |
| `variables`             | object                        | {}             | A map of external key-value pairs, such as user name, product name, etc. Variables can be used with piping and conditional logic                          |
| `inputValues`           | object                        | {}             | A map of key-value pairs to pre-fill input fields. The key is the input ID (optionally prefixed with '#') and the value is the pre-filled value.          |
| `pageTemplates`         | [Page[]](#page-data-keys)     | []             | An array of Page templates, used to share common key values across multiple pages.                                                                        |
| `blockTemplates`        | [Block[]](#block-data-keys)   | []             | An array of Block templates, used to share common key values across multiple blocks.                                                                      |
| `pages`                 | [Page[]](#page-data-keys)     | []             | Array of survey pages.                                                                                                                                    |
| `startScreens`          | [Screen[]](#screen-data-keys) | []             | An array of Screen models, one of which will be displayed at the start of the survey.                                                                     |
| `abortScreens`          | [Screen[]](#screen-data-keys) | []             | An array of Screen models, one of which will be displayed when the participant is disqualified from the survey.                                           |
| `completeScreens`       | [Screen[]](#screen-data-keys) | []             | An array of Screen models, one of which will be displayed upon the survey's completion.                                                                   |
| `theme`                 | [Theme](#theme)               | null           | The Theme model for customizing the survey's appearance.                                                                                                  |
| `css`                   | string                        | null           | Global custom CSS applicable to custom HTML elements.                                                                                                     |
| `uiShowNavigation`      | boolean                       | true           | Determines if the navigation buttons should be displayed.                                                                                                 |
| `uiShowProgress`        | boolean                       | true           | Determines if the page progress indicator should be displayed.                                                                                            |
| `uiShowCloseButton`     | boolean                       | false          | Determines if a close button should be displayed at the top-right corner.                                                                                 |
| `uiUseAnimation`        | boolean                       | true           | Determines if a sliding animation should be used for page navigation.                                                                                     |
| `uiUseFullWidthButtons` | boolean                       | undefined      | Determines if the page and screen display buttons that span the full width. By default, buttons are set to occupy the full width only on smaller screens. |
| `timeoutSeconds`        | number                        | 1800           | The duration of inactivity, in seconds, before the survey session times out and resets.                                                                   |

!!! info "Info"

    **Why Arrays for Screens?** SurveyCompo supports multiple start, completion, and abort screens. By using conditional logic, these multiple screens enable you to customize the survey experience based on user responses and/or external variables.

---
