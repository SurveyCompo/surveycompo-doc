# Overview

Welcome to the SurveyCompo documentation! Let's dive into how SurveyCompo can transform the way you collect feedback, conduct research, and engage with your users.


## What is SurveyCompo?

SurveyCompo is a powerful and versatile web component that seamlessly embeds surveys directly into your website.  It empowers you to create engaging, on-brand surveys for various purposes, including:

- Customer Feedback
- Market Research
- User Satisfaction Studies
- And more!

Getting started is simple.  Embed SurveyCompo into your website with a `<script>` tag and provide your JSON survey data – it's ready to go!



## Minimal example [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/basic){:target="\_blank" .small-text}


<div style="resize: both; border: 1px solid gray; width: 320px; height: 460px">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/basic/source.json"
	/>
</div>

=== "index.html"

    ``` html linenums="1"
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

    ``` CSS linenums="1"
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

    ``` JSON linenums="1"
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

## Key Features


<div class="grid cards" markdown>

-   :fontawesome-solid-sliders:{ .left-icon } __Highly Customizable__

    ---

    Tailor your surveys' look and feel to match your brand perfectly – choose from themes or go fully custom.


-   :material-code-block-tags:{ .left-icon } __Programmable__

    ---

    JSON data models give you complete control for versioning, dynamic updates, A/B testing, and advanced use cases.


-   :fontawesome-solid-sliders:{ .left-icon } __Powerful Survey Tools__

    ---

    Likert scales, matrix questions, input validation, logic-based branching, randomization, and more.


-   :fontawesome-solid-sliders:{ .left-icon } __Flexible Design__

    ---

    Craft traditional or conversational surveys with unparalleled control over the layout of screens, pages, blocks, and input fields.



-   :material-security:{ .left-icon } __Secure and Private__

    ---

    Options for self-hosting ensure complete ownership of both survey and response data, ideal for compliance-sensitive scenarios.

-   :fontawesome-solid-gears:{ .left-icon } __Integrates Seamlessly__

    ---

    Works effortlessly with your existing tech stack – Angular, React, Vue, jQuery, or plain JavaScript.

</div>

