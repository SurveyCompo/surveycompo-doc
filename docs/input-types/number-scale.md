---
title: NumberScale
---

The `NUMBER_SCALE` input type is designed to capture numerical data on a scale. It is depicted as a scale with a range of numbers that users can select. The `NUMBER_SCALE` input type is commonly used for capturing numerical data on a scale, such as satisfaction ratings, agreement levels, and likelihood scores.

The `numberScaleInputMin` and `numberScaleInputMax` keys are used to specify the minimum and maximum values of the scale. The default values are 0 and 10, respectively.

The value of `numberScaleInputMin` should be less than `numberScaleInputMax`, and the maximum value that `numberScaleInputMax` can take is 10.

The `numberScaleInputLabels` key assigns labels to the scale. These labels, represented as an array of strings, are evenly distributed across the scale. The `numberScaleInputLabelPosition` key can be used to determine the labels' placement, with `BOTTOM` as the default position.

=== "Preview"

    ![Input - Number Scale](../assets/images/input-number.png){: .small .embedded}

=== "JSON"

    ```json
    "inputs": [
      {
        "type": "NUMBER_SCALE",
        "numberScaleInputMin": 0,
        "numberScaleInputMax": 5,
        "numberScaleInputLabelPosition": "BOTTOM",
        "numberScaleInputLabels": [
          "Not likely",
          "Very Likely"
        ]
      }
    ]
    ```

## Star Rating

The `STAR_RATING` input type is designed to capture ratings on a scale. It is depicted as a set of stars that users can select. The `STAR_RATING` input type is commonly used for capturing ratings on a scale, such as satisfaction ratings, agreement levels, and likelihood scores.

The `starInputCount` key is used to specify the maximum number of stars in the rating scale. The default value is 5. The `starInputColor` determines the color of the stars. The default color is yellow (#f1c40f).

=== "Preview"

    ![Input - Star](../assets/images/input-star.png){: .small .embedded}

=== "JSON"

    ```json
    "inputs": [
      {
        "type": "STAR_SCALE",
        "label": "Ease of Use:",
        "labelPosition": "LEFT",
        "labelWidth": "10em"
      },
      {
        "type": "STAR_SCALE",
        "label": "Value for money:",
        "labelPosition": "LEFT",
        "labelWidth": "10em"
      },
      {
        "type": "STAR_SCALE",
        "label": "Customer support:",
        "labelPosition": "LEFT",
        "labelWidth": "10em"
      }
    ]
    ```

## Image

The `IMAGE` input type is designed for displaying and selecting images within surveys.

By default, the `IMAGE` input behaves similarly to a `RADIO` input, except for the visual representation. Users can select or deselect the image. When an `IMAGE` input is selected, a checkmark icon appears at the top right corner of the image. The position of this checkmark icon can be adjusted by setting the `imageInputCheckmarkPosition` key to `BOTTOM`.

To enable the selection of multiple `IMAGE` inputs within the same block, set the `imageInputMultiple` key to `true`. This setting removes the exclusivity of the selection, allowing users to choose multiple images within the same block.

The `imageInputPadding` key allows you to add additional padding around the image for aesthetic or clarity purposes, while the `imageInputNoBorder` key removes the box border surrounding the image. This is particularly useful when you prefer to display the image without any border.

To adjust the image size and spacing, use the block layout settings. The `layoutColumnWidth` key sets the width of the column containing the image, while the `layoutColumnGap` key defines the spacing between columns.

=== "Preview"

    ![Input - Image](../assets/images/input-image.png){: .small .embedded}

=== "JSON"

    ```json
    {
      "title": "Which of these images best represents your experience with SurveyCompo?",
      "layoutColumnWidth": "80px",
      "layoutColumnGap": "1em",
      "inputs": [
        {
          "type": "IMAGE",
          "imageInputSrc": "https://surveycompo.github.io/examples/images/face-laughing.svg",
          "imageInputNoBorder": true,
          "label": "Excellent"
        },
        {
          "type": "IMAGE",
          "imageInputSrc": "https://surveycompo.github.io/examples/images/face-smile.svg",
          "imageInputNoBorder": true,
          "label": "Good"
        },
        {
          "type": "IMAGE",
          "imageInputSrc": "https://surveycompo.github.io/examples/images/face-neutral.svg",
          "imageInputNoBorder": true,
          "label": "Average"
        },
        {
          "type": "IMAGE",
          "imageInputSrc": "https://surveycompo.github.io/examples/images/face-frown.svg",
          "imageInputNoBorder": true,
          "label": "Bad"
        },
        {
          "type": "IMAGE",
          "imageInputSrc": "https://surveycompo.github.io/examples/images/face-angry.svg",
          "imageInputNoBorder": true,
          "label": "terrible"
        }
      ]
    }
    ```

## Toggle

The `TOGGLE` input type is designed to capture binary data. It is depicted as a toggle switch that users can slide to the left or right. The value of the toggle switch is `true` when slid to the right and `false` when slid to the left. The `TOGGLE` input type is commonly used for capturing binary data such as yes/no questions, true/false statements, and on/off settings.

=== "Preview"

    ![Input - Toggle](../assets/images/input-toggle.png){: .small .embedded}

=== "JSON"

    ```json
    "inputs": [
      {
        "type": "TOGGLE",
        "label": "Promotion",
        "labelPosition": "LEFT",
        "labelWidth": "10em"
      },
      {
        "type": "TOGGLE",
        "label": "Newsletter",
        "labelPosition": "LEFT",
        "labelWidth": "10em"
      }
    ]
    ```

## Likert Rating

The `LIKERT_RATING` input type is designed to capture responses on a Likert scale, a widely used psychometric scale in surveys and questionnaires to gauge the level of agreement or disagreement with a statement. The `LIKERT_RATING` input is depicted as a set of radio inputs that users can select.

The `likertInputOptions` key is used to define the options in the Likert scale. These options can be represented as an array of strings or an object with key-value pairs. If `likertInputOptions` is an array of strings, the value of the selected option matches the displayed text. However, if `likertInputOptions` is an object with key-value pairs, the value that gets recorded when an option is selected is the key associated with that option, not the displayed text.

Like the `DROPDOWN` input type, the `LIKERT_RATING` input type also supports preset options. The `likertInputPreset` key can be used to specify a preset list of options. The following preset options are supported:

- `AGREEMENT` - A 5-point Likert scale for agreement levels. e.g. `Strongly Disagree`, `Disagree`, `Neither agree nor disagree`, `Agree`, `Strongly Agree`.
- `FREQUENCY` - A 5-point Likert scale for frequency levels. e.g. `Never`, `Rarely`, `Sometimes`, `Often`, `Always`.
- `SATISFACTION` - A 5-point Likert scale for satisfaction levels. e.g. `Very Dissatisfied`, `Dissatisfied`, `Neither dissatisfied nor satisfied`, `Satisfied`, `Very Satisfied`.
- `QUALITY` - A 5-point Likert scale for quality levels. e.g. `Very Poor`, `Poor`, `Acceptable`, `Good`, `Very Good`.
- `IMPORTANCE` - A 5-point Likert scale for importance levels. e.g. `Very unimportant`, `Unimportant`, `Neutral`, `Important`, `Very important`.
- `FAMILIARITY` - A 5-point Likert scale for familiarity levels. e.g. `Very unfamiliar`, `Unfamiliar`, `Somewhat familiar`, `Familiar`, `Very familiar`.
- `AWARENESS` - A 5-point Likert scale for awareness levels. e.g. `Very unaware`, `Unaware`, `Neither aware nor unaware`, `aware`, `Very aware`.
- `LIKELIHOOD` - A 5-point Likert scale for likelihood levels. e.g. `Very Unlikely`, `Unlikely`, `Neutral`, `Likely`, `Very Likely`.
- `CONCERN` - A 5-point Likert scale for concern levels. e.g. `Very unconcerned`, `Unconcerned`, `Neither aware nor Neutral`, `Concerned`, `Very concerned`.
- `DIFFICULTY` - A 5-point Likert scale for difficulty levels. e.g. `Very easy`, `Easy`, `Neutral`, `Difficult`, `Very difficult`.

=== "Preview"

    ![Input - Likert](../assets/images/input-likert.png){: .small .embedded}

=== "JSON"

    ```json
    {
      "title": "Overall, how satisfied are you with SurveyCompo?",
      "inputs": [
        {
          "type": "LIKERT_SCALE",
          "likertInputPreset": "SATISFACTION"
        }
      ]
    }
    ```

!!! tip "Tip"

    The `likertInputPresetReverse` key allows you to reverse the order of preset values. By default, this key is set to `false`.

## Likert Matrix

Likert Matrix allow you to combine multiple Likert input with the same options. This is most useful when you need to ask multiple questions that should be rated on the same scale.

SurveyCompo automatically groups adjacent Likert inputs with the same options into a matrix. There's no need to specify the matrix explicitly. Likert Matrix requires at least two Likert inputs with the same options to be present in the survey. If there's only one Likert input with options, it will be displayed as a standalone Likert input.

Since the Likert Matrix comprises multiple Likert inputs, the associated settings are configured at the containing **Block** level. You can adjust the matrix table width using the `layoutLikertMatrixWidth` key (default: '100%'). Additionally, the width of the first column, which contains the labels, can be controlled with the `layoutLikertMatrixLabelWidth` key (default: '25%').

The Likert Matrix, which presents multiple questions in a tabular format, typically requires a larger display area. By default, the block's `layoutLikertMatrixMode` setting is set to `AUTO`. This means that on mobile devices or smaller screens, the Likert Matrix automatically adapts to display as individual Likert inputs for a better user experience. However, you can override this behavior. By setting `layoutLikertMatrixMode` to `LIKERT`, you can ensure that Likert questions are always displayed as individual inputs. If `layoutLikertMatrixMode` is set to `MATRIX`, the Likert Matrix table will be displayed regardless of the screen size. In this case, SurveyCompo will attempt to scale the Likert Matrix table to fit the screen size as needed.

=== "Preview"

    ![Input - Likert Matrix](../assets/images/input-likert-matrix.png){: .small .embedded}

=== "JSON"

    ```json
    {
      "title": "Please rate your satisfaction with the following aspects of SurveyCompo",
      "inputs": [
        {
          "type": "LIKERT_SCALE",
          "label": "User Interface (UI)",
          "likertInputPreset": "SATISFACTION"
        },
        {
          "type": "LIKERT_SCALE",
          "label": "Customization Options",
          "likertInputPreset": "SATISFACTION"
        },
        {
          "type": "LIKERT_SCALE",
          "label": "Customer Support",
          "likertInputPreset": "SATISFACTION"
        },
        {
          "type": "LIKERT_SCALE",
          "label": "Pricing",
          "likertInputPreset": "SATISFACTION"
        }
      ]
    }
    ```
