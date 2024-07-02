---
title: Condition Logic
---

Conditional logic, also known as branching logic and skipping logic, involves setting rules that determine whether a question or section of the survey should be shown based on multiple conditions or previous answers. It is used to create a more personalized survey experience for respondents by displaying only the questions that are relevant to them.

SurveyCompo uses Condition Expressions to define conditional logic. `#age > 18` is an example of a Condition Expression. This expression evaluates to a boolean value, which can be used to determine whether a page or a question should be displayed when used with the key `visibleIf`. For example:

```json linenums="1" hl_lines="20"
{
  "name": "My Survey",
  "pages": [
    {
      "blocks": [
        {
          "type": "question",
          "question": "What is your age?",
          "inputs": [
            {
              "id": "age",
              "type": "TEXT",
              "textInputType": "NUMBER"
            }
          ]
        }
      ]
    },
    {
      "visibleIf": "#age > 18",
      "blocks": [
        {
          "type": "question",
          "question": "What is your favorite color?"
        }
      ]
    }
  ]
}
```

In the above example, the page with the question "What is your favorite color?" will only be displayed if the respondent's age is greater than 18. The `visibleIf` key is applicable to Screen, Page, Block, and Input models. You can apply conditional logic to these elements.

### Simple Condition Expression

A simple Condition Expression is a string designed to evaluate to a boolean value, following the syntax `[variable or input reference] [comparison operator] [value]`. For instance, `#age > 18` illustrates how to use this expression:

- Prefix a variable name with `$` to reference a variable, or use `#` to reference a previous input's value.
- Use comparison operators such as `==`, `!=`, `>`, `<`, `>=`, or `<=` for evaluating conditions.
- The value is what you compare against using the operator.

The 'value' part of the Condition Expression does not need to be quoted. For example, `$name == John Smith`. To compare with a boolean value, use 'true' or 'false' for comparison, for example, `$male == true` and `$male == false`. SurveyCompo offers a shortcut syntax for boolean values: `#male` is equivalent to `#male == true`.

When evaluating equality (i.e.,`==` and `!=`), comparisons are performed as string comparisons. This means that both operands in the comparison are converted to the `String` type before comparison. For instance, the Condition Expression `#age == true` (or `#age`) would evaluate to false, as the numeric value (e.g., "18") is compared against the string representation of a boolean value ("true").

In cases involving other types of comparisons, if the 'value' specified is numeric, the comparison is executed numerically. For instance, the expression `#age > 18` returns true if the 'age' input's value exceeds 18. Conversely, if the 'value' is a string, the comparison is conducted as a string comparison. Thus, `$name > H` would be true if the 'name' variable's value alphabetically follows "H", such as in the case of "John".

!!! note "Note"

    An invalid Condition Expression is treated as false. This means any expression that fails to meet the required syntax or reference valid variables or inputs will be evaluated as false. Conversely, an empty expression is considered true, indicating that no condition was specified. Examples of empty expressions include an empty `string`, `null`, or `undefined`.

### Nested Condition Expression

A nested Condition Expression is an object with one or more logical operator as keys. The logical operators are `$and`, `$or`, and `$not`. The value of these keys is an array of other Condition Expressions. For example:

```json
/* ... visible for those male AND 18+ yo */
"visibleIf": {
  "$and": [
    "#age >= 18",
    "#gender == male"
  ]
}
/* ... */
```

The logical operators are evaluated in the following manner:

- `$and`: All conditions must be true for the expression to evaluate to true.
- `$or`: At least one condition must be true for the expression to evaluate to true.
- `$not`: The condition evaluates to true if the nested condition evaluates to false.

Complex expressions can be crafted by combining logical operators in a nested manner. For instance, consider an expression designed to evaluate as true if the respondent is at least 18 years old, resides in New York City, and possesses either a high level of education or a significant income:

```json
/* ... */
"visibleIf": {
  "$and": [
    {
      "$or": ["#edu == high", "#income == high"]
    },
    "#city == NY"
  ],
  "$not": ["#age <  18"]
}
/* ... */
```

!!! note "Note"

    A nested Condition Expression is deemed invalid if it contains any keys other than the three logical operators, or if the value is not an array. In such cases, the expression is evaluated as `false`. Conversely, an empty nested expression `{}` is considered `true`, indicating that no specific condition was set.
