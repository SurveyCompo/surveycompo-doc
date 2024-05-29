---
weight: 500
---

# Customizations

As a web component, SurveyCompo provides a plethora of customization options, enabling it to integrate flawlessly into your website or application. You can modify its size, position, and styling to align with your brand and style using CSS. Additionally, you can customize the survey's appearance by changing its theme, layout, and HTML structure.

Before delving into the specifics, let's explore a key feature that sets SurveyCompo apart in terms of style customization: Style Encapsulation.

## Style Encapsulation

SurveyCompo utilizes Shadow DOM to keep its styles separate. This means that the appearance of SurveyCompo surveys is independent from the rest of the webpage, ensuring that the webpage's styles don't interfere with the survey's look. This feature is particularly useful when embedding surveys in websites with complex styles.

Style Encapsulation also allows you to customize the survey's appearance without affecting the rest of the webpage. You can modify the survey's appearance using CSS, themes, and custom HTML without worrying about the rest of the webpage's styles.

With that in mind, let's explore the various customization options available in SurveyCompo.

## Theme

SurveyCompo provides a configurable [theme model](/data-model/#theme){:target="\_blank"} that makes it easy for you to customize the look of your survey. This model includes a variety of color options, radius settings, and font settings that you can apply to your survey.

As demonstrated in previous examples, SurveyCompo defaults to a light and minimalist theme. If you wish to alter the theme of your survey, you can do so by using the `theme` key in the survey's JSON model.

The following example creates a 'Dark' theme for the survey with just 4 lines:

=== "JSON"

    ```json
    {
      /* ... */
      "theme": {
        "primaryColor": "#6875ff",
        "backgroundColor": "#1B2025",
        "neutralColor": "#393939",
        "defaultRadius": "0.5em"
      }
    }
    ```

=== "Preview"

    ![Customization - Theme](../assets/images/customize-theme.png){: .small .embedded}

The next example creates a theme with customized background:

=== "JSON"

    ```json
    {
      /* ... */
      "theme": {
        "primaryColor": "#0b703f",
        "textColor": "#213029",
        "backgroundColor": "#ead971",
        "defaultRadius": "2em",
        "textareaRadius": "1em"
      }
    }
    ```

=== "Preview"

    ![Customization - Theme2](../assets/images/customize-theme2.png){: .small .embedded}

Here are some common steps to customize your theme:

- `primaryColor`: Define the primary color for buttons and inputs.
- `backgroundColor`: Set the background color of the survey.
- `textColor`: Adjust the text color throughout the survey.
- `neutralColor`: Customize the color of borders, boxes, disabled elements, and secondary buttons.
- `defaultRadius`: Modify the default border radius for inputs and buttons.
- `defaultBorderWidth`: Change or remove (by setting to 0px) the border widths for inputs and buttons.
- Lastly, tweak specific settings that override the default ones for certain elements, like `textareaRadius` for textareas.

All theme model keys are optional, giving you the flexibility to customize the theme as you see fit. SurveyCompo will automatically adjust other default values based on the ones you provide. For instance, if you specify a `backgroundColor` without a `textColor`, SurveyCompo will automatically adjust the text color to ensure readability. For detailed information on the JSON keys and values used in a theme model, refer to the [Themes](/data-model/#theme){:target="\_blank"} section in the documentation.

## CSS

## CSS Limitation

## Space

## Custom HTML

## Block Layout

## Input layout

```

```
