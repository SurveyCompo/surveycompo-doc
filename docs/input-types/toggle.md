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
