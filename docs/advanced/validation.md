---
weight: 500
---

Validation is a crucial aspect of survey design. It ensures that the data collected is accurate and reliable. SurveyCompo provides a range of validation options to ensure that respondents provide the correct type of input.

### Input Validation

Input validation is the process of ensuring that the data entered by the respondent meets specific criteria. SurveyCompo offers various validation options for different input types. These options include:

| Type         | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| `REQUIRED`   | Ensures that the input field is not left blank.                                          |
| `NUMERIC`    | Ensures that the input field contains only numeric characters.                           |
| `INTEGER`    | Ensures that the input field contains only integer values.                               |
| `EMAIL`      | Ensures that the input field contains a valid email address.                             |
| `URL`        | Ensures that the input field contains a valid URL.                                       |
| `DOMAIN`     | Ensures that the input field contains a valid domain name.                               |
| `MAX_LENGTH` | Enables you to specify the maximum number of characters allowed in the input field.      |
| `MIN_LENGTH` | Enables you to specify the minimum number of characters allowed in the input field.      |
| `MAX_VALUE`  | Enables you to specify the maximum numeric value that can be entered in the input field. |
| `MIN_VALUE`  | Enables you to specify the minimum numeric value that can be entered in the input field. |
| `REGEX`      | Enables you to validate the input against a regular expression pattern.                  |
| `EQUALS`     | Enables you to validate the input against a specific value.                              |

To apply validation to an input, you can use the `validations` key in the Input model. The `validations` key is an array that contains one or more validation rules for the input.

```json linenums="1" hl_lines="14-24 30-40"
{
  "name": "My Survey",
  "pages": [
    {
      "blocks": [
        {
          "title": "Create a password:",
          "inputs": [
            {
              "id": "pwd",
              "type": "TEXT",
              "textInputType": "PASSWORD",
              "label": "New Password",
              "validations": [
                {
                  "type": "REQUIRED",
                  "message": "A password is required."
                },
                {
                  "type": "REGEX",
                  "value": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$",
                  "message": "Your password must include at least one uppercase letter, one lowercase letter, and one digit."
                }
              ]
            },
            {
              "type": "TEXT",
              "textInputType": "PASSWORD",
              "label": "Confirm Password",
              "validations": [
                {
                  "type": "REQUIRED",
                  "message": "Confirming your password is required."
                },
                {
                  "type": "EQUALS",
                  "value": "#pwd",
                  "message": "The passwords do not match."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

In the above example, the first input field requires the respondent to create a password. The input field is validated to ensure that it is not left blank and that it meets the specified regular expression pattern. The second input field is used to confirm the password. It is also validated to ensure that it is not left blank and that it matches the value entered in the first input field.

!!! tip "Tip"

    The `message` key is optional and can be used to provide a custom error message that will be displayed to the respondent if the validation fails. If the `message` key is not provided, a default error message will be displayed.

The `EQUALS` validation rule is used to compare the value of the input field with the value of another input field. The value of the other input field is referenced using the `#` prefix followed by the input ID. You can also reference the value of a variable using the `$` prefix. Additionally, you can enforce that users provide a specific value by specifying the value directly. For instance, to ensure a user's agreement, a checkbox labeled 'Agree' can be configured to require a value of `true`.

### Block Validation

Block validation is a feature that allows you to validate multiple inputs within a block. This feature is useful when you want to ensure that a group of inputs is filled out correctly before proceeding to the next block or page. You can define block validation rules in the Block model using the `validations` key.

The `validations` key holds an array comprising [validation models](/data-models/other-models/#validation) applicable to the block. Below are the available validation rules:

| Type            | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `REQUIRED`      | Ensures at least one input in the block is not left blank. |
| `MIN_SELECTION` | The minimum number of inputs that must be selected.        |
| `MAX_SELECTION` | The maximum number of inputs that must be selected.        |

```json linenums="1" hl_lines="10-19 57-62"
{
  "name": "My Survey",
  "pages": [
    {
      "blocks": [
        {
          "blocks": [
            {
              "title": "Please select 2 to 3 of your favorite hobbies:",
              "validations": [
                {
                  "type": "MIN_SELECTION",
                  "value": 2
                },
                {
                  "type": "MAX_SELECTION",
                  "value": 3
                }
              ],
              "inputs": [
                {
                  "type": "CHECKBOX",
                  "label": "Reading"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Traveling"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Cooking"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Sports"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Music"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Movies"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Others"
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "title": "Preferred Contact Method:",
              "validations": [
                {
                  "type": "REQUIRED",
                  "message": "Please select at least one method"
                }
              ],
              "inputs": [
                {
                  "type": "CHECKBOX",
                  "label": "Email"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Phone"
                },
                {
                  "type": "CHECKBOX",
                  "label": "Postage Male"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

### Conditional Validation

The [Validation model](/data-models/other-models/#validation) supports the `applicableIf` key. This key enables you to specify a condition under which a validation rule becomes applicable. If this condition is met, the rule is applied. This feature is useful when you want to apply validation rules based on specific conditions.

The `applicableIf` key works exactly like the `visibleIf` key; it accepts [Condition Expressions](/advanced/condition-logic/) as values.

### Validation Example

Let's look at the following example that demonstrates the use of input and block validation:

<div style="border: 1px solid gray; width: 320px; height: 400px; margin-bottom: 10px" class="resizable">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/validation/source.json"
	/>
</div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/validation){:target="\_blank" .small-text}
