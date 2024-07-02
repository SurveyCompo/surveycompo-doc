---
title: Style Overview
---

As a web component, SurveyCompo offers many customization options. This section covers the available customization options in SurveyCompo, including themes, CSS, spacing, custom HTML, and block layout. You'll learn how to use these options to create visually appealing and user-friendly surveys that suit your audience.

### Style Encapsulation

SurveyCompo uses [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM){target="\_blank"} to keep its internal styles separate. This keeps the appearance of SurveyCompo surveys independent from the rest of the webpage and prevents the webpage's styles from interfering with the survey's look. This is particularly useful when embedding surveys in websites with complex styles.

You might wonder how to customize the appearance of the survey if the styles are encapsulated.

You can still apply CSS styles to the top-level SurveyCompo component as if it were a standard HTML element. You can set the size and position of the component, add borders to the survey, and set the font family and size.

SurveyCompo also allows applying a special CSS stylesheet to the survey. This stylesheet can contain custom styles for the survey components, such as changing the color of the buttons or the background color of the survey. Additionally, the survey JSON model supports a theme object that allows customization of the survey's appearance using predefined theme properties.

### Where To Put The Custom Styles

There are two ways to apply custom styles to the survey:

1. **On the hosting page**: You can apply custom styles to the survey component or its container using CSS. This allows you to customize the appearance of the survey to match the design of the hosting page.

2. **In the survey JSON model**: You can define custom styles in the JSON model of the survey. This allows you to define the survey's appearance and behavior in a portable way that can be shared and reused across different platforms.

### Custom Style On The Hosting Page

SurveyCompo surveys are represented as a single HTML element that can be easily added to a webpage. You can apply CSS styles to this element to customize the size, position, background, and fonts of the survey.

```html
<!DOCTYPE html>
<html lang="en">
    <script async src="https://tag.surveycompo.com/v1.js"></script>
</head>
<body>
    <survey-compo src="./source.json" style="width: 400px; height: 100%; margin: auto; font-size: 14px;"></survey-compo>
</body>
</html>
```

Since surveys take up 100% width and height with a transparent background by default, you can also apply styles to the container of the survey component to change the position and size of the survey.

To customize the **inner elements** of the survey, you can define a special style tag with an id of `surveycompo` in the hosting page. This style tag will be applied to the survey component and its children.

```html
<!DOCTYPE html>
<html lang="en">
    <script async src="https://tag.surveycompo.com/v1.js"></script>
    <style id="surveycompo" media="not all">
        :host {
            font-family: monospace;
            font-size: 14px;
        }
        .sc-checkbox,
        .sc-checkbox-text {
            background-color: white;
        }
    </style>
</head>
<body>
    <survey-compo src="./source.json" style="width: 400px; height:100%;" />
</body>
</html>
```

In the above example, the `:host` selector is used to apply styles to the survey component itself. The `.sc-checkbox` and `.sc-checkbox-text` selectors are used to apply styles to the Checkbox input and CheckboxText input.

### Custom Style With The JSON Model

SurveyCompo surveys are designed with portability in mind. A survey can be embedded in different web pages and is expected to look and behave the same way across different hosting environments. Therefore, the JSON model is designed to be the source of truth for the survey's appearance and behavior.

You can define custom styles in the JSON model of the survey in two ways: using the `theme` object and the `css` key. The `theme` object allows you to define the survey's appearance using predefined theme properties. The `css` key allows you to define custom styles for the survey.

```json
{
  "name": "My Survey",
  "css": ".sc-checkbox,.sc-checkbox-text { background-color: white; }",
  "theme": {
    "primaryColor": "#000099"
  },
  "pages": [
    /* ... */
  ]
}
```

!!! note "Note"

    Don't worry if the examples above do not make much sense to you. We will explain all these options in detail in the following sections.

### Style Precedence

If you have conflicting styles applied to the same survey element, the precedence of the styles is as follows:

1. The `css` key in the Survey JSON model takes the highest precedence.
2. The CSS styles defined with the special style tag (with `id` of `surveycompo`) take precedence over the styles from a `theme` in the Survey JSON model.
3. The styles defined with the `theme` object take precedence over the default styles of SurveyCompo.
