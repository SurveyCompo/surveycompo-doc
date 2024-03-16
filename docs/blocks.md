---
weight: 13
---


# Blocks

Blocks are the fundamental building blocks of your SurveyCompo surveys, housing questions and collecting user input. Each block typically represents one survey question, and they offer a high degree of flexibility in how you present information and gather responses.

## Block Structure

Blocks can contain the following optional elements:

![block-anatomy](assets/images/anatomy-block.png){: .center}

- **Index**:  A numerical indicator to help organize and order questions.
- **Title**: The primary text of your survey question.
- **Subtitle**: Provides hints, instructions, or additional context for the question.
- **Description**: Offers further detailed instructions or explanations related to the question.
- **Footnote**:  Use this to include references, links to legal information, or other relevant details.
- **Inputs**: The interactive elements where users provide their responses (e.g., text boxes, dropdowns, checkboxes, and more).


## Inputs within Block

SurveyCompo stands out by allowing you to combine **multiple input types** within a single block. This gives you significant flexibility in question design.

For example, a block titled "Tell us about yourself" could include a text input for the user's name, a dropdown for age range, and a checkbox list for areas of interest.

<!-- Here's a list of the available input types:

- **TEXT**: A single-line text input.
- **TEXTAREA**: A multi-line text input.
- **RADIO**: A single-choice radio button.
- **CHECKBOX**: A multi-choice checkbox.
- **SELECT**: A dropdown selection.
- **LIKERT**: A Likert scale input.
- **MATRIX**: A matrix question input.
- **RANK**: A ranking input.
- **RATING**: A rating input.
- **DATE**: A date picker input.
- **TIME**: A time picker input.
- **EMAIL**: An email input.
- **URL**: A URL input.
- **NUMBER**: A number input.
- **PHONE**: A phone number input. -->
<!-- - **FILE**: A file upload input. -->
<!-- - **HTML**: A custom HTML input. -->

Blocks without input elements have two primary uses:

- Conditional Display: Use the `requiresVisibleInputs` settings to hide the empty block.
- Section Markers: Disable the question index and use these blocks to visually divide your survey into sections, improving organization.

## Advanced Customization with HTML

All text elements within a block (title, subtitle, description, footnote) support custom HTML, enabling a wide range of customization:

- **Rich Formatting**: Control fonts, colors, text size, emphasis (bold, italics), and more.
- **Embed Media**: Integrate images, videos, or audio clips to enhance your questions.
- **Interactive Elements**:  Add buttons, links, or other interactive components directly within a block.

## Branching/Skipping Logic

The `visibleIf` setting lets you control a block's display based on specific survey responses. This is essential for creating dynamic surveys with branching paths that adapt to user input.

!!! note "Note"

    Details about visibility logic will be covered in subsequent sections.


## Question Randomization

Prevent response bias by shuffling the order in which blocks appear on a page. SurveyCompo allows you to randomize all blocks or select specific ones for randomization.

## Responsive Grid Layout

Blocks feature a powerful grid layout engine to arrange input elements:

- Column Layout: Organize inputs into multiple columns for efficient use of space.
- Input Direction: Control whether inputs are stacked vertically or displayed side-by-side.

!!! note "Note"

    Block layout customization will be covered in subsequent sections.