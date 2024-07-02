Inputs are the heart of data collection within your SurveyCompo surveys. They provide the interactive elements where users submit their answers, opinions, and feedback. SurveyCompo offers a wide range of input types to accommodate diverse survey needs.

### Key Concepts

- **Inputs within Blocks**: Blocks act as containers for one or more input controls. SurveyCompo gives you the flexibility to combine different input types within a single Block.

- **Labels and Hints**: Most inputs can have an optional label (the question or instruction) and a hint (additional guidance for the user). Both support HTML for customization.

- **Input Ids**: Each input can be assigned an identifier (`id`). This is useful for implementing piping, validation, and conditional logic. To gather responses, it's crucial to assign an `id` to inputs. This is because when responses are collected, they are associated with their respective `id`.

- **Input Values**: Each input type collects data differently. Some have boolean values (true/false), others text values, numerical values, or selections from a list.

- **Input Randomization**: You can randomize the order in which inputs appear within a block to prevent response bias.

- **Branching Logic**: Utilize the `visibleIf` property for inputs to show or hide them based on specific survey responses or variables. This creates dynamic surveys that adapt to user input.

- **Input Validation**: Define validation rules to ensure users provide data in the expected format (e.g., valid email addresses, numeric values within a range). This improves data quality and the user experience.

### Input ids

In SurveyCompo, survey response data is gathered by individual inputs, not at the block level. This data is then associated with the respective input `id`. So, to collect response data, it's crucial to assign an `id` to each input that's intended to gather user responses.

IDs don't have to be unique in SurveyCompo, if several inputs have the same `id`, only the value from the last interacted input will be recorded. This is useful when you want to group several inputs together but only need a single value from them. Here's an example:

```json linenums="1" hl_lines="14 20 26"
{
  "name": "Product Satisfaction Survey",
  "startScreens": [
    /* ... */
  ],
  "pages": [
    {
      "blocks": [
        {
          "title": "What is your current employment status?",
          "inputs": [
            {
              "type": "RADIO",
              "id": "employment",
              "label": "Employed",
              "checkedValue": "employed"
            },
            {
              "type": "RADIO",
              "id": "employment",
              "label": "Retired",
              "checkedValue": "retired"
            },
            {
              "type": "RADIO",
              "id": "employment",
              "label": "Other",
              "checkedValue": "other"
            }
          ]
        }
        /* ... other blocks ... */
      ]
    }
    /* ... other pages ... */
  ]
}
```

In this example, the identifier `employment` is assigned to three radio inputs. However, only the value from the radio button that the respondent last interacted with (i.e., the selected option) will be recorded. The checkedValue key is used to define the value that will be recorded when an input is selected. Without this, the input's recorded value would simply be a boolean (true/false), which may not be meaningful in this context.

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

### Input JSON Example

The following code example demonstrates how inputs integrate into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)

```json linenums="1" hl_lines="14-31 36-48"
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

### Input Data Keys

| Method                          | Type                                   | Default               | Description                                                                                                                                                                                            |
| ------------------------------- | -------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                            | string                                 | null                  | ID of this input. IDs are used to identify inputs within a survey and are used to support features such as piping and conditional logic. Ids can not contain spaces.                                   |
| `name`                          | string                                 | null                  | Name of the input.                                                                                                                                                                                     |
| `group`                         | string                                 | null                  | The group name for the input. Inputs with the same group name are treated as a single selection group. Applicable to RADIO, RADIO_TEXT AND IMAGE (with `imageInputAllowMultiple` = false ) input type. |
| `customRef`                     | string                                 | null                  | Custom reference associated with the input.                                                                                                                                                            |
| `type`                          | [InputTypeEnum](#enum-data-types)      | null                  | The type of the input, such as 'CHECKBOX' or 'RADIO'.                                                                                                                                                  |
| `label`                         | string                                 | null                  | The text label for the input field.                                                                                                                                                                    |
| `htmlLabel`                     | string                                 | null                  | The HTML formatted label for the input field.                                                                                                                                                          |
| `hint`                          | string                                 | null                  | A hint or guidance for the input field.                                                                                                                                                                |
| `htmlHint`                      | string                                 | null                  | The HTML formatted hint for the input field.                                                                                                                                                           |
| `defaultValue`                  | number, string, boolean                | null                  | The default value for the input field.                                                                                                                                                                 |
| `checkedValue`                  | number, string, boolean                | null                  | This value is used when the input is selected or checked. The default value is `true`. This key is ONLY applicable to the input types RADIO, RADIO_TEXT, TOGGLE, and IMAGE. field.                     |
| `visibleIf`                     | [Condition](#condition)                | null                  | The condition for input visibility. The input field is displayed only if this condition is satisfied.                                                                                                  |
| `labelPosition`                 | [LabelPositionEnum](#enum-data-types)  | Depends on input type | The position of the input labels.                                                                                                                                                                      |
| `labelWidth`                    | string                                 | '100%'                | The width of the input label column. Accepts CSS width values (e.g., 200px, 50%).                                                                                                                      |
| `validations`                   | [Validation[]](#validation)            | []                    | An array of validation rules applicable for the input field.                                                                                                                                           |
| `randomWithinGroup`             | string                                 | null                  | If set, the display order of inputs within the same group is randomized in the parent block.                                                                                                           |
| `imageInputSrc`                 | string                                 | null                  | The source URL for the image, applicable only for IMAGE type inputs.                                                                                                                                   |
| `imageInputAllowMultiple`       | boolean                                | false                 | Determines whether multiple images can be selected. Applicable only for IMAGE type inputs.                                                                                                             |
| `imageInputPadding`             | string                                 | '0px'                 | The padding around the image. Applicable only for IMAGE type inputs. Accepts CSS width values (e.g., 200px, 50%).                                                                                      |
| `imageInputNoBorder`            | boolean                                | false                 | Specifies if the image should be displayed with a box border. This is only applicable for inputs of the IMAGE type.                                                                                    |
| `imageInputCheckMarkPosition`   | 'TOP', 'BOTTOM'                        | 'TOP'                 | Determines the location of the check mark when an image is selected. This setting is only relevant for inputs of the IMAGE type.                                                                       |
| `likertInputPreset`             | [LikertPresetEnum](#enum-data-types)   | null                  | The name of a predefined set of likert options. Applicable only for LIKERT type inputs.                                                                                                                |
| `likertInputPresetReverse`      | boolean                                | false                 | Reverse the display order of likert preset.inputs.                                                                                                                                                     |
| `likertInputOptions`            | string[] or Object                     | []                    | A list of labels, or a map of value-label pairs as likert options.                                                                                                                                     |
| `numberScaleInputMin`           | number                                 | 1                     | The minimum value of selectable numbers. Applicable only for NUMBER_SCALE type inputs.                                                                                                                 |
| `numberScaleInputMax`           | number                                 | 10                    | The maximum value of selectable numbers. Applicable only for NUMBER_SCALE type inputs.                                                                                                                 |
| `numberScaleInputLabels`        | string[]                               | []                    | A list of labels for selectable numbers. Applicable only for NUMBER_SCALE type inputs.                                                                                                                 |
| `numberScaleInputLabelPosition` | 'TOP', 'BOTTOM'                        | 'BOTTOM'              | The position of labels. Applicable only for NUMBER_SCALE type inputs.                                                                                                                                  |
| `dropdownInputPreset`           | [DropdownPresetEnum](#enum-data-types) | null                  | The name of a predefined set of dropdown options. Applicable only for DROPDOWN type inputs.                                                                                                            |
| `dropdownInputPresetReverse`    | boolean                                | false                 | Reverse the display order of dropdown preset. inputs.                                                                                                                                                  |
| `dropdownInputOptions`          | string[] or Object                     | []                    | A list of labels, or a map of value-label pairs as dropdown options. Applicable only for DROPDOWN type inputs.                                                                                         |
| `starInputCount`                | number                                 | 5                     | The number of stars. Allows values from 2 to 11. Applicable only for STAR_SCALE type inputs.                                                                                                           |
| `starInputColor`                | string                                 | '#f1c40f'             | The color of stars in hex string format. Applicable only for STAR_SCALE type inputs.                                                                                                                   |
| `textInputType`                 | [TextInputTypeEnum](#enum-data-types)  | TEXT                  | The type of the text input. Applicable only for Text input.                                                                                                                                            |
| `textInputMin`                  | string, number                         | null                  | The minimum value allowed. Applicable only for Text Input Type of Date, DateTime and Number.                                                                                                           |
| `textInputMax`                  | string, number                         | null                  | The maximum value allowed. Applicable only for Text Input Type of Date, DateTime and Number.                                                                                                           |
| `textareaInputRows`             | number                                 | 5                     | The height of the textarea input in terms of number of rows. Applicable only for TEXTAREA inputs.                                                                                                      |
