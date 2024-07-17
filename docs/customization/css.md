While themes provide a simple way to modify your survey's appearance, you might require more granular customizations.

SurveyCompo allows you to refine your survey's look using CSS. This enables you to adjust the size, position, and style of survey elements to align with your brand's aesthetic. With CSS, you can make more precise changes to the survey's appearance, such as tweaking the font, color, and layout.

### CSS Rules in the Survey JSON

To apply CSS to your survey, you can utilize the `css` key in the survey's JSON model. The `css` attribute accepts a string containing CSS rules that will be applied to the survey. Here's an example of how you can use the `css` attribute to alter the background color for checkbox inputs:

=== "JSON"

    ```json
    {
      /* ... */
       "css": ".sc-survey { background-image: url('https://surveycompo.github.io/examples/images/background.jpg'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;}",
    }
    ```

=== "Preview"

    <div class="survey-demo">
      <survey-compo
        src="https://surveycompo.github.io/examples/examples/style/source.json"
      />
    </div>

[:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/tree/main/examples/style){:target="\_blank" .small-text}

### CSS Rules from the Hosting Page

While embedding CSS rules directly into the survey JSON data is possible, it is not a good approach for complex or lengthy CSS rules. To address this, SurveyCompo allows you to reference a CSS style tag from the hosting page. This way, you can keep your CSS rules separate from the survey data, making them easier to manage and maintain.

To reference a CSS style tag, add a `<style>` tag to the hosting page's HTML with an `id` value of `surveycompo`. It's recommended to place this `<style>` tag in the `<head>` section of the HTML document. Here's an example of how you can reference a CSS style tag from the hosting page:

```html
<html>
  <head>
    <script src="https://tag.surveycompo.com/v1.js"></script>
    <style id="surveycompo" media="not all">
      .sc-checkbox,
      .sc-checkbox-text {
        background-color: white;
      }
    </style>
  </head>
  <body>
    <survey-compo
      src="https://your-domain.com/survey-source.json"
    ></survey-compo>
  </body>
</html>
```

In this example, the CSS rules for changing the background color of checkbox inputs are placed inside the `<style>` tag with an **`id`** value of **`surveycompo`**. SurveyCompo will automatically apply these CSS rules to the survey when it is rendered.

!!! tip "Tip"

    Adding `media="not all"` to the style tag ensures that the CSS rules are not applied to the hosting page. This way, the CSS rules are only applied to the survey and do not interfere with the rest of the webpage.

!!! note "Note"

    CSS rules specified in the survey JSON `css` key have higher priority than the CSS rules defined in the `<style>` tag. Furthermore, CSS rules in the `<style>` tag override the theme styles of the survey. This hierarchy allows you to override specific styles for individual surveys while maintaining a consistent appearance across multiple surveys.

Below are the CSS class names that you can utilize to customize the survey. These class names allow you to apply CSS rules to specific elements within the survey:

| Selector CSS Class                 | Description                                                               |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `:host`                            | SurveyCompo component. Useful for setting `font-*` style.                 |
| `sc-spinner`                       | Loading spinner icon. Useful for adjusting spinner size and color.        |
| `sc-survey`                        | Wrapper for the whole survey component. Useful for Customized background. |
| `sc-survey__close-btn`             | Survey close button. Useful for customizing location and style.           |
| `sc-btn`                           | Buttons on Page and Screen                                                |
| `sc-btn--primary`                  | Primary button.                                                           |
| `sc-btn--disabled`                 | Disabled button.                                                          |
| `sc-btn--secondary`                | Secondary button.                                                         |
| `sc-screen`                        | Survey screen.                                                            |
| `sc-screen__btn-container`         | Screen button container.                                                  |
| `sc-screen__btn`                   | Screen button.                                                            |
| `sc-screen__btn--ok`               | Screen OK button.                                                         |
| `sc-screen__btn--cancel`           | Screen cancel button.                                                     |
| `sc-screen__btn--start`            | Start screen button.                                                      |
| `sc-screen__btn--abort`            | Abort screen button.                                                      |
| `sc-screen__btn--complete`         | Complete screen button.                                                   |
| `sc-screen__header`                | Screen header.                                                            |
| `sc-screen__header--start`         | Start screen header.                                                      |
| `sc-screen__header--abort`         | Abort screen header.                                                      |
| `sc-screen__header--complete`      | Complete screen header.                                                   |
| `sc-screen__description`           | Screen description.                                                       |
| `sc-screen__description--start`    | Start screen description.                                                 |
| `sc-screen__description--abort`    | Abort screen description.                                                 |
| `sc-screen__description--complete` | Complete screen description.                                              |
| `sc-screen__footer`                | Screen footer.                                                            |
| `sc-screen__footer--start`         | Start screen footer.                                                      |
| `sc-screen__footer--abort`         | Abort screen footer.                                                      |
| `sc-screen__footer--complete`      | Complete screen footer.                                                   |
| `sc-nav`                           | Navigator.                                                                |
| `sc-nav__btn-container`            | Navigation button container.                                              |
| `sc-nav__btn`                      | Navigation button.                                                        |
| `sc-nav__btn--disabled`            | Navigation button (disabled).                                             |
| `sc-nav__btn--prev`                | Navigation previous page button.                                          |
| `sc-nav__btn--next`                | Navigation next page button.                                              |
| `sc-nav__progress`                 | Navigation progress label.                                                |
| `sc-page-container`                | Survey page container. Adjust page animation.                             |
| `sc-page`                          | Survey page. Adjust padding, width, alignment etc.                        |
| `sc-page__header`                  | Survey page header.                                                       |
| `sc-page__description`             | Survey page description.                                                  |
| `sc-page__footer`                  | Survey page footer.                                                       |
| `sc-page__btn`                     | Survey page button.                                                       |
| `sc-block`                         | Survey block container.                                                   |
| `sc-block__index`                  | Survey block index.                                                       |
| `sc-block__title`                  | Survey block title.                                                       |
| `sc-block__subtitle`               | Survey block subtitle.                                                    |
| `sc-block__description`            | Survey block description.                                                 |
| `sc-block__error`                  | Survey block error text.                                                  |
| `sc-block__footnote`               | Survey block footnote.                                                    |
| `sc-input__label`                  | Input label.                                                              |
| `sc-input__hint`                   | Input hint.                                                               |
| `sc-input__error`                  | Input error.                                                              |
| `sc-matrix`                        | Likert Matrix container.                                                  |
| `sc-matrix__label`                 | Likert Matrix input label.                                                |
| `sc-matrix__scale`                 | Likert Matrix scale label.                                                |
| `sc-matrix__input`                 | Likert Matrix input control (radio button).                               |
| `sc-checkbox`                      | Checkbox input container.                                                 |
| `sc-checkbox__label`               | Checkbox input label.                                                     |
| `sc-checkbox__input`               | Checkbox input control (checkbox button).                                 |
| `sc-checkbox-text`                 | CheckboxText input container.                                             |
| `sc-checkbox-text__text`           | CheckboxText input text box control                                       |
| `sc-checkbox-text__input`          | CheckboxText input checkbox control                                       |
| `sc-radio`                         | Radio input container.                                                    |
| `sc-radio__label`                  | Radio input label.                                                        |
| `sc-radio__input`                  | Radio input control (radio button).                                       |
| `sc-radio-text`                    | RadioText input container.                                                |
| `sc-radio-text__text`              | RadioText input text box control                                          |
| `sc-radio-text__input`             | RadioText input radio control                                             |
| `sc-star`                          | Star rating input container.                                              |
| `sc-star__label`                   | Star rating input label.                                                  |
| `sc-star__input`                   | Star rating input control (star buttons).                                 |
| `sc-star__icon`                    | Star rating star icon.                                                    |
| `sc-number`                        | Number scale input container.                                             |
| `sc-number__label`                 | Number scale input label.                                                 |
| `sc-number__scale`                 | Number scale input scale label.                                           |
| `sc-number__input`                 | Number scale input control (number button).                               |
| `sc-likert`                        | Likert input container                                                    |
| `sc-likert__label`                 | Likert input label                                                        |
| `sc-likert__option`                | Likert option label                                                       |
| `sc-likert__input`                 | Likert input control (radio button).                                      |
| `sc-text`                          | Text input container.                                                     |
| `sc-text__label`                   | Text input label.                                                         |
| `sc-text__input`                   | Text input control (text box).                                            |
| `sc-textarea`                      | Textarea input container.                                                 |
| `sc-textarea__label`               | Textarea input label.                                                     |
| `sc-textarea__input`               | Textarea input control (textarea box).                                    |
| `sc-toggle`                        | Toggle input container.                                                   |
| `sc-toggle__label`                 | Toggle input label.                                                       |
| `sc-toggle__input`                 | Toggle input control (toggle button).                                     |
| `sc-dropdown`                      | Dropdown input container.                                                 |
| `sc-dropdown__label`               | Dropdown input label.                                                     |
| `sc-dropdown__input`               | Dropdown input control.                                                   |
| `sc-image`                         | Image input container.                                                    |
| `sc-image__label`                  | Image input label.                                                        |
| `sc-image__input`                  | Image input control (image).                                              |
| `sc-image__check-mark`             | Image input check mark.                                                   |

!!! tip "Tip"

    The `:host` CSS selector is primarily used for setting global font styles and base font size. For other global styles such as background color and spacing, use the `.sc-survey` CSS selector.

!!! tip "Tip"

    When customizing with CSS rules, it's recommended to use `em` units for spacing, sizing and positioning. This ensures that the survey elements retain their relative proportions when SurveyCompo adjusts the UI to fit different screen sizes.

### CSS Limitation

There are a few limitations to be aware of when using CSS with SurveyCompo:

- Does not support stylesheets from external URLs.
- Supports applying CSS rules from only one static `style` HTML tag.
- CSS rules do not apply to the SurveyCompo branding icon.
