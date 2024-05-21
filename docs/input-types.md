---
weight: 400
---

# Input Types

SurveyCompo supports a variety of input types. Each input type is designed to capture a specific type of data. The following [:material-github:{.right-icon}example survey](https://github.com/SurveyCompo/examples/blob/main/examples/inputs/source.json){:target="\_blank"} demonstrates the different input types that SurveyCompo supports.

<div style="border: 1px solid gray; width: 300px; height: 420px; padding-bottom: 10px" index="1" class="resizable center">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/inputs/source.json"
	/>
</div>

## Checkbox

The `CHECKBOX` input type is designed to capture boolean values. It is depicted as a checkbox that users can either check or uncheck. The value of the checkbox is `true` when checked and `false` when unchecked. The `CHECKBOX` input type is commonly used for multiple-choice questions allowing users to select multiple options. Each `CHECKBOX` input represents a single option.

```json
{
  "type": "CHECKBOX",
  "name": "agree",
  "label": "I agree to the terms and conditions",
  "hint": "Please read the terms and conditions before agreeing"
}
```

![Input - Checkbox](../assets/images/input-checkbox.png){: .small .embedded}

You can also add a `REQUIRED` validation rule for the checkbox input type. If the checkbox is required, the user must check the checkbox to proceed.

```json
{
  "type": "CHECKBOX",
  "name": "agree",
  "label": "I agree to the terms and conditions",
  "hint": "Please read the terms and conditions before agreeing",
  "validations": [
    {
      "type": "REQUIRED",
      "message": "You must agree to the ToC"
    }
  ]
}
```

![Input - Checkbox](../assets/images/input-checkbox-validation.png){: .small .embedded}

## Checkbox Text

The `CHECKBOX_TEXT` input type is designed to capture text values. It is represented as a checkbox that users can select or deselect, accompanied by a text input field for capturing textual data. The `CHECKBOX_TEXT` input type is often used in conjunction with other `CHECKBOX` inputs, typically serving as an 'Other' option that allows users to provide open-ended responses.

!!! info "Info"

    An input of type `CHECKBOX_TEXT` captures the text value from the text input field. If the checkbox is checked, but the text input field is empty, a boolean `true` value will be captured. The `hint` or `label` will be displayed as a placeholder in the text input field.

```json
{
  "type": "CHECKBOX_TEXT",
  "hint": "Other (please specify)"
}
```

![Input - Checkbox Text](../assets/images/input-checkbox-text.png){: .small .embedded}

## Radio

The `RADIO` input type is designed to capture single-choice questions. It is depicted as a radio button that users can select. The value of the checkbox is `true` when checked and `false` when unchecked. The `RADIO` input type is commonly used for single-choice questions where users can only select one option.

```json
{
  "type": "RADIO",
  "label": "Online search"
}
```

![Input - Radio Text](../assets/images/input-radio.png){: .small .embedded}

## Radio Text

The `RADIO_TEXT` input type is designed to capture text values. It is represented as a radio button that users can select or deselect, accompanied by a text input field for capturing textual data. The `RADIO_TEXT` input type is often used in conjunction with other `RADIO` inputs, typically serving as an 'Other' option that allows users to provide open-ended responses.

!!! info "Info"

    An input of type `RADIO_TEXT` captures the text value from the text input field. If the radio button is checked, but the text input field is empty, a boolean `true` value will be captured. The `hint` or `label` will be displayed as a placeholder in the text input field.

```json
{
  "type": "RADIO_TEXT",
  "hint": "Other (please specify)"
}
```

![Input - Radio Text](../assets/images/input-radio-text.png){: .small .embedded}

## Text

The `TEXT` input type is designed to capture short textual data. It is depicted as a text input field that users can type in. The `TEXT` input type is commonly used for capturing short textual data such as names, email addresses, and phone numbers.

```json
{
  "type": "TEXT",
  "hint": "name@example.com",
  "textInputType": "EMAIL"
}
```

![Input - Text](../assets/images/input-text.png){: .small .embedded}

### Text Label

Like other input types, you can specify a `label` field for the text input. This is typically used when a survey question presents multiple inputs:

```json
"inputs": [
  {
    "type": "TEXT",
    "label": "First Name"
  },
  {
    "type": "TEXT",
    "label": "Last Name"
  }
]
```

![Input - Text](../assets/images/input-text-label.png){: .small .embedded}

### Text Types

The `TEXT` input type supports different text input types. You can specify the `textInputType` field to define the type of text input field. The following text input types are supported:

EMAIL, NUMBER, DATE, DATETIME, TIME, TEXT

- `TEXT` - Default text type
- `EMAIL` - Email input text.
- `NUMBER` - Number input text
- `DATE` - Date input text
- `DATETIME` - Date and time input text
- `TIME` - Time input text

!!! info "Info"

    Although assigning a `textInputType` doesn't inherently enforce the validity of entries for the specified type, it does modify the virtual keyboard layout on most mobile browsers and may prompt warnings. For instance, if `EMAIL` is selected, the email keyboard layout, including the '@' symbol, will be displayed. If an invalid email is input, a tooltip containing a warning will be shown. For more rigorous validation of input values, consider adding `validations` rules to the input.

The following example demonstrates the `TEXT` input type with different `textInputType` values:

=== "Preview"

    ![Input - Text](../assets/images/input-text-types.png){: .small .embedded}

=== "JSON"

    ```json
    ...
    "inputs": [
      {
        "type": "TEXT",
        "label": "Age (18 ~ 100)",
        "textInputType": "NUMBER",
        "textInputMax": 100,
        "textInputMin": 18
      },
      {
        "type": "TEXT",
        "label": "Email",
        "textInputType": "EMAIL"
      },
      {
        "type": "TEXT",
        "label": "Member Since",
        "textInputType": "DATE",
        "textInputMin": "2000-01-01",
        "textInputMax": "2025-01-01"
      },
      {
        "type": "TEXT",
        "label": "Booked Time",
        "textInputType": "TIME",
        "textInputMin": "09:00",
        "textInputMax": "17:00"
      }
    ]
    ...
    ```

## Textarea

The `TEXTAREA` input type is designed to capture long textual data. It is depicted as a text area field that users can type in. The `TEXTAREA` input type is commonly used for capturing long textual data such as comments, feedback, and descriptions.

The `textareaInputRows` key can be used to specify the number of rows in the textarea. The default value is 5.

```json
{
  "type": "TEXTAREA",
  "hint": "Please provide your feedback here",
  "textareaInputRows": 4
}
```

![Input - Text](../assets/images/input-textarea.png){: .small .embedded}

## Dropdown

## Number Scale

## Star Rating

## Image

## Toggle

## Likert Rating

## Likert Matrix

```

```

```

```
