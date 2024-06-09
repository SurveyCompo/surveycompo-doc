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

    Adhering to a variable naming convention is highly recommended. It is best to use lowercase letters for variable names and avoid special characters.

The upcoming two sections will cover the usage of variables in the context of piping and condition.

## Piping

## Condition

## Validation

## Templates
