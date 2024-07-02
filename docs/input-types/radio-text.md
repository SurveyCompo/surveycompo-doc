---
title: RadioText
---

The `RADIO_TEXT` input type is designed to capture text values. It is represented as a radio button that users can select or deselect, accompanied by a text input field for capturing textual data. The `RADIO_TEXT` input type is often used in conjunction with other `RADIO` inputs, typically serving as an 'Other' option that allows users to provide open-ended responses.

!!! info "Info"

    An input of type `RADIO_TEXT` captures the text value from the text input field. If the radio button is checked, but the text input field is empty, a boolean `true` value will be captured. The `hint` or `label` will be displayed as a placeholder in the text input field.

```json
{
  "type": "RADIO_TEXT",
  "hint": "Other (please specify)"
}
```

![Input - Radio Text](../assets/images/input-radio-text.png){: .small .embedded}
