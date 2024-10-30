Randomization in the context of surveys refers to the process of presenting questions or response options in a random order for each respondent. This technique is used to control for the effects of question order bias, where the order in which questions or response options are presented can influence the responses. By randomizing the order, you can ensure that the data collected is not influenced by the sequence of the questions or options.

SurveyCompo allows for randomization at various levels. You can shuffle the sequence of pages in a survey, blocks on a page, and inputs within a block. SurveyCompo gives you control over how much you want to randomize. You can either group certain items together and shuffle them within their groups, or you can shuffle all items individually.

The `randomWithinGroup` key is a powerful tool for adding randomization to your survey. By giving the same `randomWithinGroup` string value to certain items, you can randomize their order while keeping the sequence of other items intact. Let's illustrate this with an example <span style="font-weight: lighter; font-size: smaller">(Hint: Click the 'Close' button to observe the effects of randomization.)</span>

<div class="survey-demo">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/randomization/source.json"
		mode="demo"
	/>
</div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/randomization){:target="\_blank" .small-text}

The `randomWithinGroup` key can be used with Pages, Blocks, and Inputs in the model. In the given example, we have two pages, each with two questions. By using the `randomWithinGroup` key, these two pages are grouped and shuffled together. Similarly, the two blocks within each page are also grouped and shuffled together. The inputs in the blocks titled 'Which of the following features do you use most often?' and 'How did you first learn about our product/service?' are grouped for randomization. However, the 'Other' inputs are not part of the random group, so they always appear last in their respective blocks. Items without the `randomWithinGroup` key retain their original positions.

It's worth noting that the randomization happens when the survey is initialized and stays the same throughout the survey duration. The specific value assigned to the randomWithinGroup key is irrelevant, as long as it's identical for all items that should be shuffled together.
