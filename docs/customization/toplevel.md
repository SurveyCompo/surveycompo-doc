---
weight: 100
title: Top Level Style
---

Let's look at how to customize the top-level SurveyCompo component using CSS rules.

### Position and Size

You can set the size and position of the SurveyCompo component using standard CSS rules. The following examples set some top-level styles of the survey component, one using inline CSS rules and the other using a style tag:

=== "Inline Style"

    ``` html linenums="1"
    <!DOCTYPE html>
    <html lang="en">
        <script async src="https://tag.surveycompo.com/v1.js"></script>
    </head>
    <body>
        <survey-compo src="./source.json" style="width: 400px; height:100%; margin: auto; font-size: 14px" />
    </body>
    </html>
    ```

=== "Style tag"

    ``` html linenums="1"
    <!DOCTYPE html>
    <html lang="en">
        <script async src="https://tag.surveycompo.com/v1.js"></script>
    </head>
    <body>
        <style>
            survey-compo {
                width: 400px;
                height: 100%;
                margin: auto;
                font-size: 14px;
            }
        </style>
        <survey-compo src="./source.json"  />
    </body>
    </html>
    ```

!!! note "Note"

    By default, a SurveyCompo survey has both the width and height set to 100%. This means that the survey will take up the full width and height of its parent container. You can adjust the width and height of the survey itself or its container to change the size of the survey.

### Font Size

You can set the font size of the survey using the `font-size` CSS rule. It worth noting that font-size has more than just setting the default size of the fonts in the survey. It also affects the spacing between elements and the overall layout of the survey.

SurveyCompo is designed to be responsive and adapt to various screen sizes. Internally it uses the css 'em' unit for spacing, which is relative to the font size of the root element. This allows the survey to scale proportionally with the font size, and the survey elements maintain their relative size and spacing.

To adjust the spacing between elements, you can modify the font-size property of the :host CSS selector. This will change the spacing between elements while maintaining the relative proportions of the survey components. The default font-size value is 14px, which corresponds to 1em.

You can change the base font size in the Theme model and the CSS rules. The following examples demonstrate how changing the font-size property affects the spacing between elements:

You can set the font size of the survey using the `font-size` CSS rule. It is worth noting that `font-size` does more than just setting the default size of the fonts in the survey. It also affects the spacing between elements and the overall layout of the survey.

SurveyCompo is designed to be responsive and adapt to various screen sizes. Internally, it uses the CSS 'em' unit for spacing, which is relative to the font size of the root element. This allows the survey to scale proportionally with the font size, ensuring that survey elements maintain their relative size and spacing. The default `font-size` in most browsers is 16px, which corresponds to 1em.

The following examples demonstrate how changing the `font-size` property affects the spacing between elements:

=== "font-size: 10px"

    ![Customization - FontSize 10](../assets/images/customize-spacing10.png){: .small .embedded}

=== "font-size: 14px (default)"

    ![Customization - FontSize 14](../assets/images/customize-spacing14.png){: .small .embedded}

=== "font-size: 16px"

    ![Customization - FontSize 16](../assets/images/customize-spacing16.png){: .small .embedded}

### Font Family

By default, SurveyCompo surveys use a cross-browser **sans-serif** font family. This default works for most use cases and is good for maintaining visual consistency regardless of where the survey is embedded. However, you can change the `fontFamily` either using a Theme object or a CSS stylesheet. We will cover Theme and CSS stylesheet in the following sections.

To allow the survey to inherit the `font-family` style from the hosting page, or to set the `font-family` as a top-level style, you first need to disable the default font family by setting the `uiUseDefaultFont` key of the survey model to `false`.

=== "HTML"

    ``` html linenums="1" hl_lines="7"
    <!DOCTYPE html>
    <html lang="en">
        <script async src="https://tag.surveycompo.com/v1.js"></script>
    </head>
    <body>
        <survey-compo src="./source.json"
                      style="font-family: monospace" />
    </body>
    </html>
    ```

=== "Survey JSON"

    ```json linenums="1" hl_lines="3"
    {
        "name": "My Survey",
        "uiUseDefaultFont": false,
        "pages": [
            /* ... */
        ]
    }
    ```

### Background Styles

SurveyCompo surveys have a **transparent** background by default. This means you can customize the background color or add a background image for the survey using top-level css style rules. You can apply this style to the survey component itself or its container.

=== "HTML"

    ``` html linenums="1"  hl_lines="6"
    <!DOCTYPE html>
    <html lang="en">
        <script async src="https://tag.surveycompo.com/v1.js"></script>
        <style>
            survey-compo {
                background-image: url('http://doc.surveycompo.com/images/background.jpg');
            }
        </style>
    </head>
    <body>
        <survey-compo src="./source.json"   />
    </body>
    </html>
    ```

=== "Preview"

    ![Customization - Background](../assets/images/customize-style.png){: .small .embedded}
