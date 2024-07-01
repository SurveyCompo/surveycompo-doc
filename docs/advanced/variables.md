---
weight: 200
---

Variables are placeholders for values that can be used in the survey. They can be used to display information, or define conditional logic to control the flow of the survey.

For instance, if you wish to personalize your survey by including the respondent's name, a variable can be used. This variable will hold the name and display it throughout the survey. This feature is referred as 'piping'.

Similarly, variables can be used to tailor the survey based on the respondent's age. By passing the age as a variable, you can reference it in the conditional logic that determines which questions are shown. This way, different age groups can be presented with different sets of questions.

To define variables in SurveyCompo, you can use the `variables` key in the model. The `variables` key is an object that contains key-value pairs. The key is the variable name, and the value is the value of the variable. The variable value can be a string, number, or boolean.

```json
{
  "name": "My Survey",
  "pages": [
    /* ... */
  ],
  "variables": {
    "name": "John Doe",
    "age": 25
  }
}
```

!!! tip "Tip"

    Adhering to a variable naming convention is highly recommended. It is best to use lowercase letters for variable names and avoid special characters. Variable names can not contain spaces.

The upcoming two sections will cover the usage of variables in the context of piping and condition.
