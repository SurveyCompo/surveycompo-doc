---
title: The Survey Component
---

The Survey Component is a web component that allows you to create surveys with a JSON configuration. It is designed to be easy to use and customizable.

## Using the Survey Component

To use the Survey Component, create a JSON file that defines the survey structure and questions. The JSON file is then used by the Survey Component to render the survey. For more details, see the documentation on [Survey Models](/data-models/survey/).

To render the survey, include the Survey Component in your HTML file and specify the source of the survey JSON file:

```html
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
  </head>
  <body>
    <survey-compo
      src="Survey ID or URL"
      cache="localhost"
      onchange="console.log"
    />
  </body>
</html>
```

## Survey Component Attributes

The `survey-compo` element accepts the following attributes:

| Attribute  | Description                                                                                                                                    | Example Value                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `src`      | Survey ID, or the URL of the survey JSON file or a JSON string itself.                                                                         | `IIYzdICTFtJhQHgmLCzY` or `https://example.host.com/survey-source.json` |
| `cache`    | Defines the caching strategy or location. Using `localstorage` enables persisting the current survey session data after a page refresh.        | `localstorage` or `memory`, default: `localstorage`                     |
| `onchange` | The JavaScript function to be called on a survey change event. This should be a string referring to a function name in the `window` scope.     | `console.log`                                                           |
| `mode`     | By default, survey events are sent to SurveyCompo for analysis and reporting. You can turn this off by setting the `mode` attribute to `demo`. | `live` or `demo`                                                        |
