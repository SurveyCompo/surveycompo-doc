---
weight: 300
---

# Data Model

## Survey

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

### The Survey Data Model

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

| Method              | Type     | Default        | Description                                                                                                                      |
| ------------------- | -------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | string   | n/a (Required) | Describes the name of the survey.                                                                                                |
| `customRef`         | string   | null           | A custom reference ID for your survey.                                                                                           |
| `uiShowNavigation`  | boolean  | true           | you want to show the navigation buttons.                                                                                         |
| `uiShowProgress`    | boolean  | true           | If you want to show the page progress indicator.                                                                                 |
| `uiShowCloseButton` | boolean  | false          | If you want to show a close button at the top-right corner.indicator.                                                            |
| `uiUseAnimation`    | boolean  | true           | If you prefer to use a sliding animation for page navigation.                                                                    |
| `timeoutSeconds`    | number   | 1800           | The duration of inactivity, in seconds, before the survey session times out and the survey resets.                               |
| `pageTemplates`     | Page[]   | []             | An array of Page models used to share common key values across pages.                                                            |
| `blockTemplates`    | Block[]  | []             | An array of Block models used to share common key values across blocks.                                                          |
| `pages`             | Page[]   | []             | An array of Page models in the survey.                                                                                           |
| `theme`             | Theme    | null           | The Theme model for customizing the survey look and feel.                                                                        |
| `css`               | string   | null           | Global custom CSS applicable to custom HTML elements.                                                                            |
| `startScreens`      | Screen[] | []             | An array of Screen models, one of which will be displayed at the start of the survey.                                            |
| `abortScreens`      | Screen[] | []             | An array of Screen models, one of which will be displayed when the participant is disqualified from the survey.                  |
| `completeScreens`   | Screen[] | []             | An array of Screen models, one of which will be shown upon the survey's completion.                                              |
| `variables`         | object   | {}             | A map of external key-value pairs, such as user name, product name, etc. Variables can be used with piping and conditional logic |

!!! info "Info"

    **Why Arrays for Screens?** SurveyCompo supports multiple start, completion, and abort screens. By using conditional logic, these multiple screens enable you to customize the survey experience based on user responses and/or external variables.

---

## Screen

Screens are the visual gateways of your SurveyCompo surveys. They introduce respondents to the survey, provide closure upon completion, and inform users of eligibility or termination. Let's explore their key functions:

- **Start Screens**: These screens welcome users, present essential information, and invite them to participate in your survey.
- **Complete Screens**: These screens thank respondents for their time, signaling that the survey has been successfully completed.
- **Abort Screens**: These screens inform users that they are ineligible or the survey has been terminated, providing clear reasons as needed.

### Screen Composition

A screen can include the following optional elements:

![screen-anatomy](../assets/images/anatomy-screen.png){: .center .md}

- **Header**: A prominent area for the survey title, section headings, or instructions.

- **Description**: Provides context, additional details, or instructions for the user.

- **Footer**: Use this for additional information, or legal disclaimers.

- **Action Buttons**: Each screen can include up to two customizable action buttons. These buttons determine how users navigate through your survey, allowing them to either proceed or exit the current screen.

### Customizing Screens with HTML

Enhance your screens with the power of HTML:

- **Enhanced Formatting**: Change font size, color, or add emphasis using HTML tags.
- **Embedding Media**: Include images, videos, or audio files to enhance the user experience.
- **Interactive Elements**: Include links to privacy statements or cookie policies.

SurveyCompo uses specific 'html' keys for custom content:

- `htmlHeader`
- `htmlDescription`
- `htmlFooter`

!!! warning "Warning"

    Use valid HTML syntax and prioritize security. Avoid incorporating code from unknown sources or user input, as it could introduce vulnerabilities.

### Multiple Screens and Visibility Conditional Logic

SurveyCompo supports multiple start and end screens for flexible survey design. Use the `visibleIf` setting to conditionally show screens based on survey responses or variables.

!!! note "Note"

    Details on conditional logic will be covered in subsequent sections.

### The Screen Data Model

Start, completion, and abort screens share a common data structure within your survey's JSON format.

The following code example demonstrates how a screen integrates into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)

```json linenums="1" hl_lines="4-10"
{
  "name": "My Survey",
  "startScreens": [
    {
      "header": "We value your opinion!",
      "description": "Please take a moment to participate in our brief survey.",
      "htmlFooter": "<p class='footnote'><a href=''>privacy</a> & <a href=''>cookie policy<a></p>",
      "okButtonLabel": "Start Survey",
      "cancelButtonLabel": "Skip"
    }
  ],
  "pages": [
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

| Method              | Type      | Default | Description                                                                            |
| ------------------- | --------- | ------- | -------------------------------------------------------------------------------------- |
| `name`              | string    | null    | Describes the name of the screen.                                                      |
| `customRef`         | string    | null    | A custom reference ID for the screen.                                                  |
| `header`            | string    | null    | Screen header text.                                                                    |
| `htmlHeader`        | string    | null    | Screen header in HTML format.                                                          |
| `footer`            | string    | null    | Screen footer text.                                                                    |
| `htmlFooter`        | string    | null    | Screen footer in HTML format.                                                          |
| `description`       | string    | null    | Screen description text.                                                               |
| `htmlDescription`   | string    | null    | Screen description in HTML format.                                                     |
| `okButtonLabel`     | string    | null    | Label on the screen's OK button.                                                       |
| `okButtonURL`       | string    | null    | URL to redirect to when the OK button is clicked.                                      |
| `cancelButtonLabel` | string    | null    | Label on the screen's Cancel button.                                                   |
| `cancelButtonURL`   | string    | null    | URL to redirect to when the Cancel button is clicked.                                  |
| `hCentered`         | boolean   | true    | If true, center screen content horizontally.                                           |
| `vCentered`         | boolean   | true    | If true, center screen content vertically.                                             |
| `visibleIf`         | Condition | true    | Screen visibility condition. The screen is visible only if the condition is satisfied. |

---

## Page

Pages are the backbone of your SurveyCompo surveys. They contain your survey questions, guide user progress, and offer versatile customization options. Let's explore their structure and features.

### Page Structure

A page can include the following optional elements:

![page-anatomy](../assets/images/anatomy-page.png){: .center .md}

- **Header**: A dedicated area at the top for titles or instructions.

- **Description**: Provides more context about the page's purpose or offers additional instructions for the user.

- **Blocks**: The fundamental building blocks of your survey questions. A page can contain multiple blocks, each typically representing one question. (See the 'Blocks' section for a detailed breakdown.)

- **Footer**: Use this for additional information, navigation, or legal statements.

- **Next Button**: Allows users to progress to the following page. Clicking "Next" also triggers validation of the inputs on the current page.

### Page Layout

To customize the arrangement of your page elements, SurveyCompo offers the following settings:

- `vCentered`: Vertically center elements. The default is `true`.
- `hCentered`: Horizontally center elements. The default is `false`.

### Customization with HTML

Enhance headers, descriptions, and footers with custom HTML syntax for:

- **Rich Formatting**: Control fonts, colors, text size, emphasis (bold, italics), and more.
- **Embed Media**: Integrate images, videos, or audio clips to enhance your questions.
- **Interactive Elements**: Add buttons, links, or other interactive components directly within a page.

SurveyCompo uses specific 'html' keys for custom content:

- `htmlHeader`
- `htmlDescription`
- `htmlFooter`

### Branching/Skipping Logic

Use the `visibleIf` setting to conditionally show or hide pages based on survey responses. This is key for creating adaptive surveys that tailor the experience to the user's input.

!!! note "Note"

    Details on conditional logic will be covered in subsequent sections.

### Page Randomization

Prevent response bias by shuffling the order of pages. SurveyCompo's `randomizedWithinGroup` setting allows for randomization of all or selected pages. (More on randomization in the following section.)

### The Page Data Model

The following code example demonstrates how a page integrates into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)

```json linenums="1" hl_lines="7-15"
{
  "name": "My Survey",
  "startScreens": [
    /* ... */
  ],
  "pages": [
    {
      "header": "Basic Information",
      "htmlDescription": "<p>Let’s begin by gathering some essential details. <br />We assure you that we will not share personal information.</p>",
      "htmlFooter": "<p class='footnote'><a href=''>privacy</a> & <a href=''>cookie policy<a></p>",
      "blocks": [
        /* ... */
      ],
      "nextButtonLabel": "Next"
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

| Method                  | Type      | Default | Description                                                                                     |
| ----------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------- |
| `name`                  | string    | null    | Describes the name of the page.                                                                 |
| `customRef`             | string    | null    | Custom reference associated with the page.                                                      |
| `templateName`          | string    | null    | Name of the page template. The current page inherits properties from the matched page template. |
| `header`                | string    | null    | Page header text.                                                                               |
| `htmlHeader`            | string    | null    | Page header in HTML format.                                                                     |
| `description`           | string    | null    | Page description text.                                                                          |
| `htmlDescription`       | string    | null    | Page description in HTML format.                                                                |
| `footer`                | string    | null    | Page footer text.                                                                               |
| `htmlFooter`            | string    | null    | Page footer in HTML format.                                                                     |
| `nextButtonLabel`       | string    | null    | Label on the page's next button.                                                                |
| `nextButtonURL`         | string    | null    | URL to redirect to when the next button is clicked.                                             |
| `nextButtonHidden`      | boolean   | false   | If true, the next button is hidden.                                                             |
| `hCentered`             | boolean   | false   | If true, center page content horizontally.                                                      |
| `vCentered`             | boolean   | false   | If true, center page content vertically.                                                        |
| `autoAdvancePage`       | boolean   | false   | If true, advance to the next page automatically when applicable.                                |
| `randomWithinGroup`     | string    | false   | If set, randomize the display order amongst peer pages that share the same set group name.      |
| `visibleIf`             | Condition | false   | Page conditional logic. If set, the page displays only if the condition is satisfied.           |
| `requiresVisibleBlocks` | boolean   | false   | If true, the page is displayed only if there are visible blocks on the page.                    |
| `blocks`                | Block[]   | []      | Array of blocks on the page.                                                                    |

---

## Block

A ‘Block’ in SurveyCompo is a section of content on a survey page - it’s the building block of your survey. It can serve as a container for a survey question, housing both the question itself and its corresponding input controls for answers, and it offers a high degree of flexibility in how you present information and gather responses. It can also be utilized to provide instructions or explanations, guiding your respondents through the survey.

### Block Structure

Blocks can contain the following optional elements:

![block-anatomy](../assets/images/anatomy-block.png){: .center .md}

- **Index**: A numerical indicator to help organize and order questions.
- **Title**: The primary text of your survey question.
- **Subtitle**: Provides hints, instructions, or additional context for the question.
- **Description**: Offers further detailed instructions or explanations related to the question.
- **Footnote**: Use this to include references, links to legal information, or other relevant details.
- **Inputs**: The interactive elements where users provide their responses (e.g., text boxes, dropdowns, checkboxes, and more).

### Inputs within Block

SurveyCompo stands out by allowing you to combine **multiple input types** within a single block. This gives you significant flexibility in question design.

For example, a block titled "Tell us about yourself" could include a text input for the user's name, a dropdown for age range, and a checkbox list for areas of interest.

When a Block is used to provide instructions or explanations rather than to collect user inputs, it will have an empty list of inputs. This is a common practice in survey design to guide respondents through the survey flow. For example, a block titled "Instructions" may contain only a description and footnote, with no input controls. This is a powerful feature that allows you to create dynamic and engaging surveys tailored to your specific needs. SurveyCompo gives you the flexibility to design your survey in a way that best suits your goals and audience.

### Advanced Customization with HTML

All text elements within a block (title, subtitle, description, footnote) support custom HTML, enabling a wide range of customization:

- **Rich Formatting**: Control fonts, colors, text size, emphasis (bold, italics), and more.
- **Embed Media**: Integrate images, videos, or audio clips to enhance your questions.
- **Interactive Elements**: Add buttons, links, or other interactive components directly within a block.

### Branching/Skipping Logic

The `visibleIf` setting lets you control a block's display based on specific survey responses. This is essential for creating dynamic surveys with branching paths that adapt to user input.

!!! note "Note"

    Details about conditional logic will be covered in subsequent sections.

### Question Randomization

Prevent response bias by shuffling the order in which blocks appear on a page. SurveyCompo allows you to randomize all blocks or select specific ones for randomization.

### Responsive Grid Layout

Blocks feature a powerful grid layout engine to arrange input elements:

- Column Layout: Organize inputs into multiple columns for efficient use of space.
- Input Direction: Control whether inputs are stacked vertically or displayed side-by-side.

!!! note "Note"

    Block layout customization will be covered in subsequent sections.

### The Block Data Model

The following code example demonstrates how blocks integrate into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)

```json linenums="1" hl_lines="10-17"
{
  "name": "My Survey",
  "startScreens": [
    /* ... */
  ],
  "pages": [
    {
      /* ... */
      "blocks": [
        {
          "title": "Gender",
          "layoutColumnCount": 2,
          "layoutColumnWidth": "50%",
          "inputs": [
            /* ... */
          ]
        },
        {
          "title": "Age",
          "inputs": [
            /* ... */
          ]
        }
      ]
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

| Method                         | Type         | Default | Description                                                                                      |
| ------------------------------ | ------------ | ------- | ------------------------------------------------------------------------------------------------ |
| `name`                         | string       | null    | Describes the name of the block.                                                                 |
| `customRef`                    | string       | null    | Custom reference associated with the block.                                                      |
| `templateName`                 | string       | null    | Name of the block template. The current block inherits properties from the matched template.     |
| `title`                        | string       | null    | Title of the block.                                                                              |
| `htmlTitle`                    | string       | null    | Title of the block in HTML format.                                                               |
| `subtitle`                     | string       | null    | Subtitle of the block.                                                                           |
| `htmlSubtitle`                 | string       | null    | Subtitle of the block in HTML format.                                                            |
| `description`                  | string       | null    | Description of the block.                                                                        |
| `htmlDescription`              | string       | null    | Description of the block in HTML format.                                                         |
| `footnote`                     | string       | null    | Footnote of the block.                                                                           |
| `htmlFootnote`                 | string       | null    | Footnote of the block in HTML format.                                                            |
| `showIndexNumber`              | boolean      | true    | If true, display index numbers for inputs in the block.                                          |
| `validations`                  | Validation[] | []      | Array of validation rules for the block.                                                         |
| `visibleIf`                    | Condition    | null    | Block visibility condition. If set, the block displays only if the condition is satisfied.       |
| `randomWithinGroup`            | string       | null    | If set, randomize the display order amongst peer blocks that share the same group name.          |
| `inputs`                       | Input[]      | []      | Array of inputs within the block.                                                                |
| `requiresVisibleInputs`        | boolean      | false   | If true, the block is displayed only if there are visible inputs in the block.                   |
| `layoutColumnCount`            | number       | 1       | Column count of the block layout.                                                                |
| `layoutColumnWidth`            | string       | '100%'  | Column width of the block layout. Takes css width values. e.g. 200px, 50%                        |
| `layoutColumnGap`              | string       | '0'     | Column gap of the block layout. Takes css width values. e.g. 5px, 1em                            |
| `layoutRowGap`                 | string       | '1em'   | Row gap of the block layout. Takes css width values. e.g. 5px, 1em                               |
| `layoutCenterAligned`          | boolean      | false   | Column gap of the block layout. Takes css width values. e.g. 5px, 1em                            |
| `layoutLikertMatrixWidth`      | string       | '100%'  | Width of the Likert Matrix table. Only applicable to Likert input types. Takes css width values. |
| `layoutLikertMatrixLabelWidth` | string       | '25%'   | Width of the label column in a Likert Matrix. Only applicable to Likert input types.             |

---

## Input

Inputs are the heart of data collection within your SurveyCompo surveys. They provide the interactive elements where users submit their answers, opinions, and feedback. SurveyCompo offers a wide range of input types to accommodate diverse survey needs.

### Key Concepts

- **Inputs within Blocks**: Remember, Blocks act as containers for one or more input controls. SurveyCompo gives you the flexibility to combine different input types within a single Block.

- **Labels and Hints**: Most inputs can have an optional label (the question or instruction) and a hint (additional guidance for the user). Both support HTML for customization.

- **Input Values**: Each input type collects data differently. Some have boolean values (true/false), others text values, numerical values, or selections from a list.

- **Input Randomization**: You can randomize the order in which inputs appear within a block to prevent response bias.

- **Branching Logic**: Utilize the `visibleIf` property for inputs to show or hide them based on specific survey responses or variables. This creates dynamic surveys that adapt to user input.

- **Input Validation**: Define validation rules to ensure users provide data in the expected format (e.g., valid email addresses, numeric values within a range). This improves data quality and the user experience.

### Input Types

Here's a quick overview of the input types currently supported. We'll dive into each in-depth in subsequent sections.

**Checkboxes and Radios**

- **CHECKBOX**: Multiple selections from a list (boolean values).
- **CHECKBOX_TEXT**: A "checkbox + text" combination to capture an 'Other' option.
- **RADIO**: Single selection from a list (boolean value).
- **RADIO_TEXT**: A "radio + text" combination for an 'Other' option.

**Rating Scales**

- **STAR_SCALE**: Familiar star-based rating (integer value)
- **NUMBER_SCALE**: Numeric scale rating (integer value)

**Text-Based Inputs**

- **TEXT**: Single-line text input (text value).
- **TEXTAREA**: Multi-line text input (text value).

**Specialized Inputs**

- **LIKERT_SCALE**: Opinion scale presented in a visually appealing format (text value of the chosen option).
- **TOGGLE**: On/off switch (boolean value).
- **DROPDOWN**: A dropdown list for selecting one option (text value).
- **IMAGE**: Images as selectable options (text values of selected images).
- **MATRIX**: A grid-based question format for collecting responses to multiple related questions using a consistent scale.

### The Input Data Model

The following code example demonstrates how inputs integrate into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)

```json linenums="1" hl_lines="13-28 34-38"
{
  "name": "My Survey",
  "startScreens": [
    /* ... */
  ],
  "pages": [
    {
      /* ... */
      "blocks": [
        {
          "title": "Gender",
          "layoutColumnCount": 2,
          "layoutColumnWidth": "50%",
          "inputs": [
            {
              "type": "RADIO",
              "label": "Male"
            },
            {
              "type": "RADIO",
              "label": "Female"
            },
            {
              "type": "RADIO",
              "label": "Non-binary"
            },
            {
              "type": "RADIO",
              "label": "Prefer not to say"
            }
          ]
        },
        {
          "title": "Age",
          "inputs": [
            {
              "type": "DROPDOWN",
              "hint": "Please select ...",
              "dropdownInputOptions": [
                "Under 18",
                "18-24",
                "25-34",
                "35-44",
                "45-54",
                "55-64",
                "65 or over"
              ]
            }
          ]
        }
      ]
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
