---
weight: 12
---


# Pages

Pages form the core structure of your SurveyCompo surveys. They act as containers for survey questions and input fields, guiding the user's progress with a "Next" button.  Let's break down their key components and customization options:


## Page Structure

A page can include the following elements. All page elements (header, description, footer, and action buttons) are optional.

![page-anatomy](assets/images/anatomy-page.png){: .center}

- **Header**: An optional area at the top of the page for titles or instructions.

- **Description**: The description area provides more details about the page's purpose or any instructions for the user.

- **Blocks**: These are the fundamental building blocks of your survey questions. A page can contain multiple blocks, each typically representing one question. (The 'Blocks' section will cover these in detail). Pages without blocks can function as dedicated sections to provide instructions or context for upcoming survey sections.

- **Footer**: The footer can be used for additional information or legal statements.

- **Next Button**:  This button allows users to progress to the following page in the survey. Clicking "Next" also triggers validation of the inputs on the current page.


## Page Layout

You can Customize your page layout with these settings:

- `vCentered`: Vertically center elements. The default is `true`.
- `hCentered`: Horizontally center elements. The default is `false`.

## Customization with HTML


Like screens, page headers, descriptions and footers support custom HTML syntax. This allows for

- **Enhanced Formatting**: Change font size, color, or add emphasis using HTML tags.
- **Embedding Media**: Include images, videos, or audio files to enhance the user experience.
- **Interactive Elements**: Include links to privacy statements or cookie policies.

To leverage HTML within these elements, SurveyCompo utilizes specific keys with an html prefix.  For example, to incorporate a custom HTML header, you would use the htmlHeader field within your JSON code. Here's a breakdown of the relevant keys:

- `htmlHeader`: For custom HTML content in the page header.
- `htmlDescription`: For custom HTML content in the page description.
- `htmlFooter`: For custom HTML content in the page footer.

## Conditional Visibility (Branching Logic)

The `visibleIf` setting allows you to show or hide pages based on specific survey responses or variables. This is essential for creating surveys with branching paths that adapt to the user's input.

!!! note "Note"

    The visibility condition logic will be covered in subsequent sections.


## Page Randomization

SurveyCompo lets you shuffle the display order of pages in a survey. You can randomize either all pages or a selected subset.
This is achieved using the `randomizedWithinGroup` setting  . More details about randomization will be covered in the following section.

## The Page Data Model

The following code example demonstrates how a page integrates into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)


```json linenums="1" hl_lines="7-15"
{
    "name": "My Survey",
    "startScreens": [
        ...
    ],
    "pages": [
      {
        "header": "Basic Information",
        "htmlDescription": "<p>Let’s begin by gathering some essential details. <br />We assure you that we will not share personal information.</p>",
        "htmlFooter": "<p class='footnote'><a href=''>privacy</a> & <a href=''>cookie policy<a></p>",
        "blocks": [
          ...
        ],
        "nextButtonLabel": "Next"
      },
       ...
    ],
    "completeScreens": [
       ...
    ],
    "abortScreens": [
       ...
    ]
}
```