# Introduction

Welcome to the SurveyCompo documentation.


## What is SurveyCompo?

SurveyCompo is an embeddable web component designed to seamlessly integrate surveys into your website. Whether you’re gathering customer feedback, conducting market research, or evaluating user satisfaction, SurveyCompo simplifies the process.


To get started, simply embed into your website with a `<script>` tag and the SurveyCompo web component. The web component will then be ready to render surveys based on the JSON data you provide.



## Minimal example [:material-github:{.right-icon}](https://github.com/SurveyCompo/examples/tree/main/examples/basic){:target="\_blank"}


<div style="resize: both; border: 1px solid gray; width: 320px; height: 460px">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/basic/source.json"
	/>
</div>

=== "index.html"

    ``` html
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic</title>
    <link rel="stylesheet" href="../common.css">
    </head>

    <body>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
    <survey-compo src="./source.json" />
    </body>

    </html>
    ```

=== "common.css"

    ``` CSS
    html, body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
    ```

=== "source.json"

    ``` JSON
	{
		"name": "Basic",
		"startScreens": [
			{
				"header": "Welcome to Our Survey!",
				"description": "Thank you for participating.",
				"okButtonLabel": "Start Survey"
			}
		],
		"pages": [
			{
				"blocks": [
					{
						"title": "What’s your favorite type of weather?",
						"inputs": [
							{
								"type": "RADIO",
								"label": "Sunny and warm"
							},
							{
								"type": "RADIO",
								"label": "Cozy and rainy"
							},
							{
								"type": "RADIO",
								"label": "Snowy and magical"
							}
						]
					}
				],
				"nextButtonLabel": "Submit"
			}
		],
		"completeScreens": [
			{
				"header": "Thank You!",
				"description": "Your responses have been recorded.",
				"okButtonLabel": "Close"
			}
		]
	}
  	```

## Features


<div class="grid cards" markdown>

-   :fontawesome-solid-sliders:{ .left-icon } __Customizable__

    ---

    Customize your surveys to align with your brand and style. Select from the predefined themes or unleash your creativity to craft a unique design that precisely meets your requirements.


-   :material-code-block-tags:{ .left-icon } __Programmable__

    ---

    Powered by JSON-based survey data models, SurveyCompo empowers you with survey source control, dynamic loading, updates, user retargeting, A/B testing, and beyond.


-   :fontawesome-solid-sliders:{ .left-icon } __Capable__

    ---

    SurveyCompo supports a variety of common input types, including Likert scales and matrix questions. Additionally, it offers a rich set of survey features such as input validation, skip logic, branching, disqualification, randomization, piping, and custom variables.


-   :fontawesome-solid-sliders:{ .left-icon } __Flexible__

    ---

    SurveyCompo is designed to support both traditional and conversational surveys, featuring a robust layout system that provides unparalleled flexibility in the presentation of survey screens, pages, blocks, and input fields.



-   :material-security:{ .left-icon } __Data Control and Ownership__

    ---

    SurveyCompo’s self-hosting options allow users to host survey source and response data on their own infrastructure, providing full control over their data for regulatory compliance and ownership.

-   :fontawesome-solid-gears:{ .left-icon } __Easy Integration__

    ---

    As a web component, SurveyCompo works with Angular, React, Vue, jQuery, or vanilla JavaScript, ensuring easy integration with your web tech stack through its event system and reactive API.

</div>

