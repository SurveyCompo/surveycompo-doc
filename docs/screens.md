---
weight: 11
---


# Screens

Screens are one of the building blocks for displaying information and capturing user intent within your SurveyCompo survey. Each screen can be customized to provide a clear and engaging experience for respondents.

## Screen Composition

A screen can include the following elements. All screen elements (header, description, footer, and action buttons) are optional.

![screen-anatomy](assets/images/anatomy-screen.png){: .center}

- **Header**: This section grabs the user's attention and typically displays the survey title or current section.

- **Description**: The description area provides more details about the screen's purpose or any instructions for the user

- **Footer**: The footer can be used for additional information or legal statements.

- **Action Buttons**: Each screen can include up to two customizable action buttons. These buttons determine how users navigate through your survey, allowing them to either proceed or exit the current screen.


## Customizing Screens with HTML

SurveyCompo empowers you to personalize the header, description, and footer elements using custom HTML syntax. This allows for:

- **Enhanced Formatting**: Change font size, color, or add emphasis using HTML tags.
- **Embedding Media**: Include images, videos, or audio files to enhance the user experience.
- **Interactive Elements**: Include links to privacy statements or cookie policies.

To leverage HTML within these elements, SurveyCompo utilizes specific keys with an html prefix.  For example, to incorporate a custom HTML header, you would use the htmlHeader field within your JSON code. Here's a breakdown of the relevant keys:

- `htmlHeader`: For custom HTML content in the screen header.
- `htmlDescription`: For custom HTML content in the screen description.
- `htmlFooter`: For custom HTML content in the screen footer.

!!! warning "Warning"

    While HTML customization offers flexibility, ensure you use valid syntax to avoid unexpected results. Always prioritize safety when using HTML. Avoid incorporating code from unknown sources or user input, as it could pose security risks.


## Multiple Screens and Visibility Condition Logic

SurveyCompo allows for multiple start and end screens in a single survey. You can configure each screen using the `visibleIf` setting to display it based on specific conditions within the survey logic. If multiple screens meet the current conditions, the first matching screen will be shown.

!!! note "Note"

    The visibility condition logic will be covered in subsequent sections.

## The Screen data model

Start, completion, and abort screens, despite their different roles, share a common data structure within the survey's JSON format.

The following code example demonstrates how a screen integrates into the survey JSON data model. [:material-github:{.right-icon} view source](https://github.com/SurveyCompo/examples/blob/main/examples/anatomy/source.json)


```json linenums="1" hl_lines="4-10"
{
    "name": "My Survey",
    "startScreens": [
        {
        "header": "We value your opinion!",
        "description": "Please take a moment to participate in our brief survey.",
        "htmlFooter": "<p class='footnote'><a href=''>privacy</a> & <a href=''>cookie policy<a></p>",
        "okButtonLabel": "Start Survey",
        "cancelButtonLabel": "Skip"
        }
    ],
    "pages": [
       {
         "blocks": [
            {
                "inputs": [...]
            },
            ...
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
