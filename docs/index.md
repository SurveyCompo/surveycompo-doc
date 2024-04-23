---
weight: 100
---

# Introduction

Welcome to SurveyCompo, the ultimate tool for creating dynamic and adaptable surveys.


## What is SurveyCompo?

SurveyCompo is a purpose-built web component, it offers exceptional flexibility, customization, and programmability. Crafting a survey is effortless: simply provide SurveyCompo with JSON-based data, and it seamlessly renders your survey design.

SurveyCompo's power extends far beyond creation. Its seamless integration into your existing tech stack enables real-time data capture and interactive experiences. Style your surveys to match your brand using themes and CSS, and leverage event listeners to respond dynamically to user input.

With SurveyCompo, you gain full control over every aspect of your surveys. Unleash its potential to build surveys that are not just forms, but tailored data-gathering tools that meet your ever-evolving needs.


## Minimal example


<div style="resize: both; border: 1px solid gray; width: 320px; height: 460px">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/basic/source.json"
	/>
</div>


[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/basic){:target="\_blank" .small-text}

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


-   :material-security:{ .left-icon } __Full Data Control__

    ---

    With the **self-hosting option**, you maintain full control and ownership of your sensitive survey data. Ensure compliance with privacy regulations and meet your specific security needs.


-   :fontawesome-solid-sliders:{ .left-icon } __Highly Customizable__

    ---

    Adjust its size, position, and styling to seamlessly blend with your brand and style using **CSS**. Choose a **theme** or create a unique design that perfectly suits your needs.


-   :fontawesome-solid-gears:{ .left-icon } __Easy Integration__

    ---

    Leverage **event listeners** for seamless data capture and dynamic interactions. SurveyCompo seamlessly integrates with your existing tech stack, whether it’s **Angular**, **React**, **Vue**, **jQuery**, or **plain JavaScript**.


-   :fontawesome-solid-sliders:{ .left-icon } __Exceptional Flexibility__

    ---

    Craft **traditional** surveys or opt for engaging **conversational** formats. With SurveyCompo‘s intuitive **block-based** layout, you have unmatched flexibility and control over the structure and flow of your questions.

-   :fontawesome-solid-sliders:{ .left-icon } __Powerful Survey Tools__

    ---

    SurveyCompo puts a comprehensive toolkit at your fingertips. Craft dynamic, intelligent surveys using features like input **validation**, **skip logic**, **branching**, **randomization**, **piping**, and **custom variables**.


-   :material-code-block-tags:{ .left-icon } __Programmable__

    ---

    SurveyCompo‘s JSON-based design makes your surveys truly adaptable. Effortlessly manage versions, **load content dynamically, conduct A/B testing**, and unlock advanced strategies like Survey **Segmentation** and Audient **Retargeting**.


</div>

