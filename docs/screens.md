---
weight: 11
---


# Screens

Screens are the visual gateways of your SurveyCompo surveys.  They introduce respondents to the survey, provide closure upon completion,  and inform users of eligibility or termination. Let's explore their key functions:

- **Start Screens**: These screens welcome users, present essential information, and invite them to participate in your survey.
- **Complete Screens**:  These screens thank respondents for their time, signaling that the survey has been successfully completed.
- **Abort Screens**:  These screens inform users that they are ineligible or the survey has been terminated, providing clear reasons as needed.


## Screen Composition

A screen can include the following optional elements:

![screen-anatomy](assets/images/anatomy-screen.png){: .center}

- **Header**: A prominent area for the survey title, section headings, or instructions.

- **Description**: Provides context, additional details, or instructions for the user.

- **Footer**: Use this for additional information, or legal disclaimers.

- **Action Buttons**: Each screen can include up to two customizable action buttons. These buttons determine how users navigate through your survey, allowing them to either proceed or exit the current screen.


## Customizing Screens with HTML

Enhance your screens with the power of HTML:

- **Enhanced Formatting**: Change font size, color, or add emphasis using HTML tags.
- **Embedding Media**: Include images, videos, or audio files to enhance the user experience.
- **Interactive Elements**: Include links to privacy statements or cookie policies.

SurveyCompo uses specific 'html' keys for custom content:

- `htmlHeader`
- `htmlDescription`
- `htmlFooter`

!!! warning "Warning"

    Use valid HTML syntax and prioritize security. Avoid incorporating code from unknown sources or user input, as it could introduce vulnerabilities.


## Multiple Screens and Visibility Condition Logic

SurveyCompo supports multiple start and end screens for flexible survey design. Use the `visibleIf` setting to conditionally show screens based on survey responses or variables.

!!! note "Note"

    Details on visibility logic will be covered in subsequent sections.


## The Screen Data Model

Start, completion, and abort screens share a common data structure within your survey's JSON format.

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
