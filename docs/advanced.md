---
weight: 600
---

# Advanced Features

SurveyCompo provides a complete set of features for creating surveys. You can make your surveys interactive and smart with features such as input validation, skipping and branching logic, randomization, custom variables and piping.

## Randomization

Randomization in the context of surveys refers to the process of presenting questions or response options in a random order for each respondent. This technique is used to control for the effects of question order bias, where the order in which questions or response options are presented can influence the responses. By randomizing the order, you can ensure that the data collected is not influenced by the sequence of the questions or options.

SurveyCompo allows for randomization at various levels. You can shuffle the sequence of pages in a survey, blocks on a page, and inputs within a block. SurveyCompo gives you control over how much you want to randomize. You can either group certain items together and shuffle them within their groups, or you can shuffle all items individually.

The `randomWithinGroup` key is a powerful tool for adding randomization to your survey. By giving the same `randomWithinGroup` string value to certain items, you can randomize their order while keeping the sequence of other items intact. Let's illustrate this with an example <span style="font-weight: lighter; font-size: smaller">(Hint: Click the 'Close' button to observe the effects of randomization.)</span>

<div style="border: 1px solid gray; width: 320px; height: 400px; padding-bottom: 10px" class="resizable">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/randomization/source.json"
	/>
</div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/randomization){:target="\_blank" .small-text}

The `randomWithinGroup` key can be used with Pages, Blocks, and Inputs in the model. In the given example, we have two pages, each with two questions. By using the `randomWithinGroup` key, these two pages are grouped and shuffled together. Similarly, the two blocks within each page are also grouped and shuffled together. The inputs in the blocks titled 'Which of the following features do you use most often?' and 'How did you first learn about our product/service?' are grouped for randomization. However, the 'Other' inputs are not part of the random group, so they always appear last in their respective blocks. Items without the `randomWithinGroup` key retain their original positions.

It's worth noting that the randomization happens when the survey is initialized and stays the same throughout the survey duration. The specific value assigned to the randomWithinGroup key is irrelevant, as long as it's identical for all items that should be shuffled together.

## Variables

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

## Piping

Piping is a technique that shows the value of a variable or a previously inputted value in a survey. This technique is commonly used to personalize the survey by addressing the respondent by their name or to display any other information that is relevant to the respondent.

### Piping with Variables and Prior Input Values

In SurveyCompo, piping is achieved by using the `{$variableName}` and `{#inputID}` syntax. The variable name or input ID is enclosed within curly braces with `$` and `#` prefixes, respectively.

In the `{$variableName}` syntax, the 'variableName' corresponds to one of the keys in the variables object within the survey model. Similarly, the 'inputID' in `{#inputID}` refers to the id key of one of the Input models. These placeholders can be used in text-based fields of the survey model, like the header, title, description, and options of the inputs. When the survey is displayed, these placeholders are swapped out with the real values of the variables or inputs.

The following example uses piping to display the respondent's name in the start screen:

=== "Preview"

    ![Customization - Theme](assets/images/advanced-piping1.png){: .small .embedded}

=== "JSON"

    ```json
    {
      /* ... */
      "variables": {
    	  "name": "John"
    	},
      "startScreens": [
    			{
    				"header": "We value your insights! ",
    				"description": "Hello {$name}, would you be interested in participating in our survey?",
    				"okButtonLabel": "Start Survey"
    			}
    	]
    }
    ```

But what if you want to have different text based on the value of a variable or input? This is where the piping modifier comes into play.

### Piping Modifiers

A piping modifier is a string added to the variable or input ID inside the curly braces. It's separated from the variable or input ID by a `|`. You can use a piping modifier to change how the variable or input value is displayed.

The following piping modifiers are available in SurveyCompo:

| Modifier  | Example                                               | Description                                                                                                                                                  |
| --------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `upper`   | <code>{#name&#124;upper}</code>                       | Convert the variable or input value to uppercase.                                                                                                            |
| `lower`   | <code>{#name&#124;lower}</code>                       | Convert the variable or input value to lowercase.                                                                                                            |
| `cap`     | <code>{#name&#124;cap}</code>                         | Capitalize the first letter of the variable or input value.                                                                                                  |
| `title`   | <code>{#name&#124;title}</code>                       | Convert the variable or input value to title case.                                                                                                           |
| `default` | <code>{$name&#124;default:user}</code>                | Use the first parameter as the output if the variable or input value is falsy (undefined or empty).                                                          |
| `yesno`   | <code>{#adult&#124;yesno:&#36;20:&#36;0}</code>       | If the variable or input value is truthy (defined and not empty), use the first parameter as the output, otherwise use the second parameter as the output.   |
| `plural`  | <code>{#count&#124;plural&#58;person:people}</code>   | If the variable or input value is not evaluated to 1, use the second parameter as the output, otherwise use the first parameter as the output.               |
| `eq`      | <code>{#hungry&#124;eq:true:eat:rest}</code>          | If the variable or input value is equal to the first parameter, use the third parameter as the output, otherwise use the second parameter as the output.     |
| `gt`      | <code>{#height&#124;gt&#58;100:tall:short}</code>     | If the variable or input value is greater than the first parameter, use the third parameter as the output, otherwise use the second parameter as the output. |
| `lt`      | <code>{#price&#124;lt&#58;100:cheap:expensive}</code> | If the variable or input value is less than the first parameter, use the third parameter as the output, otherwise use the second parameter as the output.    |

!!! tip "Tip"

    Parameters for modifiers are divided by a colon `:`. If a parameter includes a colon within it, you should escape it with an underscores, like this: `_:_`. If a parameter is not provided, it's assumed to be an empty string.

Let's bring it all together with this example:

<div style="border: 1px solid gray; width: 320px; height: 400px; padding-bottom: 10px" class="resizable">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/piping/source.json"
	/>
</div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/piping){:target="\_blank" .small-text}

## Condition

## Validation

## Templates
