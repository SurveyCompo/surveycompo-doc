# Introduction

Welcome to SurveyCompo, your tool for creating dynamic and adaptable surveys.

## What is SurveyCompo?

SurveyCompo is a purpose-built web component offering exceptional flexibility, customization, and programmability. Creating a survey with SurveyCompo is straightforward: provide JSON-based data, and it renders your survey design.

SurveyCompo's capabilities extend beyond creation. Its integration into your existing tech stack enables real-time data capture and interactive experiences. Style your surveys to match your brand using themes and CSS, and use event listeners to respond dynamically to user input.

With SurveyCompo, you have full control over every aspect of your surveys. Build tailored data-gathering tools that meet your evolving needs.

## Minimal example

<div class="survey-demo">
	<survey-compo
		src="https://surveycompo.github.io/examples/examples/basic/source.json"
		mode="demo"
	/>
</div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/basic){:target="\_blank" .small-text}

=== "index.html"

    ``` html linenums="1" hl_lines="8 12"
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Basic</title>
      <link rel="stylesheet" href="../common.css">
      <script async src="https://tag.surveycompo.com/v1.js"></script>
    </head>

    <body>
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

## Key Benefits

<div class="grid cards" markdown>

- :fontawesome-solid-sliders:{ .left-icon } **Highly Customizable**

      ---

      Adjust its size, position, and styling to blend with your brand and style using **CSS**. Choose a **theme** or create a unique design that suits your needs.

- :fontawesome-solid-gears:{ .left-icon } **Easy Integration**

      ---

      Leverage **event listeners** for seamless data capture and dynamic interactions. SurveyCompo seamlessly integrates with your existing tech stack, whether it’s **Angular**, **React**, **Vue**, **jQuery**, or **plain JavaScript**.

- :fontawesome-solid-sliders:{ .left-icon } **Exceptional Flexibility**

      ---

      Create **traditional** surveys or opt for engaging **conversational** formats. With SurveyCompo’s intuitive **block-based** layout, you have unmatched flexibility and control over the structure and flow of your questions.

- :fontawesome-solid-sliders:{ .left-icon } **Powerful Survey Tools**

      ---

      SurveyCompo provides a comprehensive toolkit. Create dynamic, intelligent surveys using features like input **validation**, **skip logic**, **branching**, **randomization**, **piping**, and **custom variables**.

- :material-code-block-tags:{ .left-icon } **Programmable**

      ---

      SurveyCompo’s JSON-based design makes your surveys truly adaptable. It allows you to **manage versions**, load content **dynamically**, conduct **A/B testing**, and implement advanced strategies like Survey **Segmentation** and Audience **Retargeting**.

- :material-security:{ .left-icon } **Full Data Control**

      ---

      With the **self-hosting option**, you maintain full control and ownership of your sensitive survey data. Ensure compliance with privacy regulations and meet your specific security needs.

</div>
