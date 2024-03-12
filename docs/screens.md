---
weight: 11
---


# Screens

Screens are one of the building blocks for displaying information and capturing user intent within your SurveyCompo survey. Each screen can be customized to provide a clear and engaging experience for respondents.

## Screen Composition

A screen can include the following elements. All screen elements (header, description, footer, and action buttons) are optional.

- **Header**: This section grabs the user's attention and typically displays the survey title or current section.

- **Description**: The description area provides more details about the screen's purpose or any instructions for the user

- **Footer**: The footer can be used for additional information or legal statements.

- **Action Buttons**: Each screen can include up to two customizable action buttons. These buttons determine how users navigate through your survey, allowing them to either proceed or exit the current screen.


## Customizing Screens with HTML

SurveyCompo empowers you to personalize the header, description, and footer elements using custom HTML syntax. This allows for:

- **Enhanced Formatting**: Change font size, color, or add emphasis using HTML tags.
- **Embedding Media**: Include images, videos, or audio files to enhance the user experience.
- **Interactive Elements**: Include links to privacy statements or cookie policies.

!!! warning "Warning"

    While HTML customization offers flexibility, ensure you use valid syntax to avoid unexpected results. Always prioritize safety when using HTML. Avoid incorporating code from unknown sources or user input, as it could pose security risks.


## Multiple Screens and Visibility Condition Logic

SurveyCompo allows for multiple start and end screens in a single survey. You can configure each screen using the `visibleIf` setting to display it based on specific conditions within the survey logic. If multiple screens meet the current conditions, the first matching screen will be shown.

!!! note "Note"

    The visibility condition logic will be covered in subsequent sections.

## The Screen data model