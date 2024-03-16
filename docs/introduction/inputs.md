---
weight: 20
---

# Inputs

Inputs are the heart of data collection within your SurveyCompo surveys.  They provide the interactive elements where users submit their answers, opinions, and feedback. SurveyCompo offers a wide range of input types to accommodate diverse survey needs.


## Key Concepts


- **Inputs within Blocks**:  Remember, Blocks act as containers for one or more input controls. SurveyCompo gives you the flexibility to combine different input types within a single Block.

- **Labels and Hints**:  Most inputs can have an optional label (the question or instruction) and a hint (additional guidance for the user). Both support HTML for customization.

- **Input Values**:  Each input type collects data differently. Some have boolean values (true/false), others text values, numerical values, or selections from a list.

- **Input Randomization**:  You can randomize the order in which inputs appear within a block to prevent response bias.

- **Branching Logic**:  Utilize the `visibleIf` property for inputs to show or hide them based on specific survey responses or variables. This creates dynamic surveys that adapt to user input.

- **Input Validation**:  Define validation rules to ensure users provide data in the expected format (e.g., valid email addresses, numeric values within a range). This improves data quality and the user experience.


## Input Types

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


## The Input Data Model

The following code example demonstrates how inputs integrate into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)


```json linenums="1" hl_lines="13-28 34-38"
{
    "name": "My Survey",
    "startScreens": [ /* ... */ ],
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
                "dropdownInputOptions": ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or over"]
              }
            ]
          }
        ]
      },
      /* ... */
    ],
    "completeScreens": [ /* ... */ ],
    "abortScreens": [ /* ... */ ]
}
```