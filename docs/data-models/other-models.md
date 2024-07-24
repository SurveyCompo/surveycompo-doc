### Theme

The `Theme` model allows you to customize the appearance of your survey. You can define colors, fonts, and other visual elements to match your brand or create a specific look and feel for your survey.

| Method               | Type   | Default      | Description                                                                                                   |
| -------------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `fontFamily`         | string | "sans-serif" | The text font family. Accepts CSS font-family values.                                                         |
| `fontSize`           | string | 'inherit'    | The font size. Accepts CSS font size values.                                                                  |
| `primaryColor`       | string | '#0f172a'    | The primary base color using a hexadecimal code.                                                              |
| `backgroundColor`    | string | '#ffffff'    | The background color of the survey using a hexadecimal code.                                                  |
| `baseColor`          | string | '#ffffff'    | The base color for input containers, e.g. textarea background, checkbox container background color.           |
| `textColor`          | string | null         | The text color using a hexadecimal code.                                                                      |
| `errorColor`         | string | '#dc2626'    | The error color using a hexadecimal code.                                                                     |
| `neutralColor`       | string | '#d4d4d8'    | The color of neutral elements using a hexadecimal code.                                                       |
| `warningColor`       | string | '#ea580c'    | The color for warning messages using a hexadecimal code.                                                      |
| `buttonColor`        | string | null         | The color for buttons using a hexadecimal code.                                                               |
| `borderColor`        | string | null         | The color for borders using a hexadecimal code.                                                               |
| `defaultRadius`      | string | '0'          | The default radius for buttons, boxes, and inputs. Accepts CSS radius values (e.g., '0.5em').                 |
| `buttonRadius`       | string | null         | The radius for buttons. If set, it overrides the default radius. Accepts CSS radius values.                   |
| `boxRadius`          | string | null         | The radius for box containers. If set, it overrides the default radius. Accepts CSS radius values.            |
| `inputRadius`        | string | null         | The radius for input elements. If set, it overrides the default radius. Accepts CSS radius values.            |
| `textareaRadius`     | string | null         | The radius for textareas. If set, it overrides the default radius. Accepts CSS radius values.                 |
| `defaultBorderWidth` | string | '1px'        | The default border width for buttons, boxes, and inputs. Accepts CSS width values (e.g., '1px').              |
| `buttonBorderWidth`  | string | null         | The border width for buttons. If set, it overrides the default border width. Accepts CSS width values.        |
| `boxBorderWidth`     | string | null         | The border width for boxes. If set, it overrides the default border width. Accepts CSS width values.          |
| `inputBorderWidth`   | string | null         | The border width for input elements. If set, it overrides the default border width. Accepts CSS width values. |

### Validation

The `Validation` model defines rules to ensure that user input meets specific criteria. You can set requirements for input fields, such as minimum and maximum values, selection limits, and valid formats (e.g., email addresses).

| Method         | Type                                                                             | Default                                    | Description                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`         | [ValidationTypeEnum](#enum-data-types)                                           | n/a (Required)                             | Specifies the type of the validation rule. e.g. EMAIL                                                                                                   |
| `value`        | string, number, boolean                                                          | null                                       | Represents the value that is relevant to the selected validation rule. For example, for a "MIN_LENGTH" rule, this would be the minimum length required. |
| `message`      | string                                                                           | (Default message based on validation type) | Defines the message that will be displayed when the validation rule is not met.                                                                         |
| `applicableIf` | [Condition Expression](/advanced/conditional-logic/#simple-condition-expression) | null                                       | Specifies a condition for the validation rule. If set, the rule will only be applied if the condition is met.                                           |

### Condition

The `Condition` model is used to define conditional logic within your survey. Conditions determine when specific survey elements (e.g., screens, pages, blocks, inputs) are displayed based on user responses or external variables.

Condition expression can be a `string` or an `object` with the following properties:

| Method | Type        | Default | Description                                             |
| ------ | ----------- | ------- | ------------------------------------------------------- |
| `$and` | Condition[] | n/a     | Logical `AND` operator for one or more condition rules. |
| `$or`  | Condition[] | n/a     | Logical `OR` operator for one or more condition rules.  |
| `$not` | Condition[] | n/a     | Logical `NOT` operator for one or more condition rules. |

Conditional logic is a powerful tool for creating dynamic surveys that adapt to user input and external variables. For an in-depth understanding, kindly consult the 'Conditional Logic' section in our documentation.

### Enum Data Types

| Enum Name            | Description               | Values                                                                                                                                     |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `InputTypeEnum`      | Input Types               | CHECKBOX, CHECKBOX_TEXT, RADIO, RADIO_TEXT, STAR_SCALE, NUMBER_SCALE, LIKERT_SCALE, TEXT, TEXTAREA, TOGGLE, DROPDOWN, IMAGE                |
| `LabelPositionEnum`  | Label Positions           | TOP, BOTTOM, LEFT, RIGHT, NONE                                                                                                             |
| `LikertPresetEnum`   | Likert Option Presets     | AGREEMENT, FREQUENCY, SATISFACTION, QUALITY, IMPORTANCE, FAMILIARITY, AWARENESS, LIKELIHOOD, CONCERN                                       |
| `DropdownPresetEnum` | Dropdown Option Presets   | YEARS, MONTHS, MONTHS_SHORT, WEEK_DAYS, WEEK_DAYS_SHORT, MONTH_DAYS, COUNTRIES                                                             |
| `TextInputTypeEnum`  | Text Input Value          | EMAIL, NUMBER, DATE, DATETIME, TIME, TEXT                                                                                                  |
| `ValidationTypeEnum` | Types of Validation Rules | REQUIRED, NUMERIC, INTEGER, MIN_LENGTH, MAX_LENGTH, MIN_VALUE, MAX_VALUE, MIN_SELECTION, MAX_SELECTION, EMAIL, URL, DOMAIN, EQUALS, REGEX. |

!!! tip "Tip"

    As you can see, most of the enum values are in uppercase. Actually these values are case-insensitive in general. However, it is recommended to use them in uppercase for consistency.
