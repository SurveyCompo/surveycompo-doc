---
title: Survey Events and API
---

Survey Events and the API interfaces are pivotal features of the SurveyCompo web component. Survey Events enable listening to various events throughout the survey process, such as initialization, start, completion, or abortion. The API interface offers methods to interact with the survey component, including navigating to the next page, returning to the previous page, or resetting the survey.

## Listen to Survey Events

### Using `addEventListener`

The SurveyCompo web component is a custom HTML element. You can listen to its events using the `addEventListener` method.

```html linenums="1" hl_lines="15"
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
  </head>
  <body>
    <survey-compo
      id="my-survey"
      src="https://example.host.com/survey-source.json"
    />

    <script>
      document
        .getElementById("my-survey")
        .addEventListener("surveychange", (e) => {
          // handles survey events here
          console.log(e)
        })
    </script>
  </body>
</html>
```

Since survey events bubble up the DOM tree by default, you can also add event listeners to the window using the `window.addEventListener` method.

```html
<script>
  window.addEventListener("surveychange", (e) => {
    // handles survey events here
    console.log(e)
  })
</script>
```

### Using the `onChange` callback attribute

The SurveyCompo web component supports the `onChange` callback attribute. Use this attribute to listen to survey events.

```html linenums="1" hl_lines="6-8 15"
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
    <script>
      onSurveyChange = (eventDetail, api) => {
        console.log(eventDetails, api)
      }
    </script>
  </head>
  <body>
    <survey-compo
      id="my-survey"
      src="https://example.host.com/survey-source.json"
      onchange="onSurveyChange"
    />
  </body>
</html>
```

The `onChange` callback attribute accepts a string reference to a callback function at the `window` scope. For example, `onSurveyChange` is a function defined at the `window` and can be referenced as `window.onSurveyChange` or just `onSurveyChange`. It can also be a reference to a method of a nested object, such as `myApp.surveyManager.handleChange`.

The callback function receives two arguments:

- `eventDetail`: An object containing the survey event data, equivalent to the `event.detail` object for a 'surveychange' event.
- `api`: An object containing methods to interact with the survey component.

## `surveychange` Event

The `surveychange` event is a [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) with a `type` of `surveychange`. The event `detail` object contains the following properties:

| Property        | Description                                                                             | Optional |
| --------------- | --------------------------------------------------------------------------------------- | -------- |
| `type`          | Identifies the type of event, fixed to `surveychange`.                                  | No       |
| `name`          | Specifies the name of the event, for example, `INITIALIZE`.                             | No       |
| `time`          | Records the timestamp at which the event occurred, for example, `1719912164458`.        | No       |
| `target.survey` | Provides the survey (`including` `id`, `name`, `customRef`) associated with the event.  | No       |
| `target.screen` | Provides the screen (`including` `id`, `name`, `customRef`) associated with the event.  | Yes      |
| `target.page`   | Provides the page (`including` `id`, `name`, `customRef`) associated with the event.    | Yes      |
| `target.block`  | Provides the block (`including` `id`, `name`, `customRef`) associated with the event.   | Yes      |
| `target.input`  | Provides the input (`including` `id`, `name`, `customRef`, group, value) for the event. | Yes      |
| `context`       | Provides a Context object containing session-specific data.                             | No       |

The event `context` object contains the following properties:

| Property     | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `pageCount`  | Total number of pages in the survey that are visible to the respondent.                                                     |
| `pageIndex`  | Index of the current page within the survey, starting from `0`.                                                             |
| `pageErrors` | An array containing error messages specific to the current page.                                                            |
| `progress`   | Percentage progress increment contributed by the event. Note this is **NOT** the percentage of survey has been completed.   |
| `errorTs`    | Timestamp marking the occurrence of a visible error on the current page, formatted as a Unix timestamp.                     |
| `initTs`     | Timestamp for when the survey was initialized, formatted as a Unix timestamp.                                               |
| `startTs`    | Timestamp for when the survey was started by the respondent, formatted as a Unix timestamp.                                 |
| `completeTs` | Timestamp for when the survey was completed by the respondent, formatted as a Unix timestamp.                               |
| `finalTs`    | Timestamp for when the survey was finalized, indicating the end of the survey process, formatted as a Unix timestamp.       |
| `abortTs`    | Timestamp for when the survey was aborted by the respondent, formatted as a Unix timestamp.                                 |
| `sessionId`  | A unique identifier for the current survey session, useful for tracking and analytics purposes.                             |
| `variables`  | A dictionary of variables that have been passed to the current survey session, allowing for customized survey experiences.  |
| `survey`     | An object containing the `id` and `name` of the current survey, providing context about which survey is being referenced.   |
| `inputs`     | An array of objects representing the responses given by the respondent, including the id, name, and value of each response. |

## Survey Names

The `surveychange` event `name` property is a string that represents the event name. The following are the possible event names:

| Event Name        | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| `INITIALIZE`      | Triggered when the survey initializes, preparing it for the respondent.                                  |
| `START_OK`        | Occurs when the respondent clicks the OK button on the start screen.                                     |
| `START_CANCEL`    | Occurs when the respondent clicks the CANCEL button on the start screen.                                 |
| `START`           | Marks the beginning of the survey, presenting the first page to the respondent.                          |
| `INPUT_CHANGE`    | Fired whenever a respondent changes an input value within the survey.                                    |
| `ERROR`           | Indicates an error has occurred at any point during the survey process.                                  |
| `PAGE_GO`         | Directs the respondent to a new page by ID, an action exclusively triggered via the API.                 |
| `NEXT_PAGE_GO`    | Advances the respondent to the next page in the survey sequence.                                         |
| `PREV_PAGE_GO`    | Takes the respondent back to the previous page in the survey sequence.                                   |
| `COMPLETE`        | Signifies the survey's completion, after the respondent finishes the last page.                          |
| `FINALIZE`        | Occurs when the survey is finalized, typically after clicking a button on the completion screen.         |
| `SURVEY_RESET`    | Resets the survey, starting a new session, an action exclusively triggered via the API.                  |
| `SURVEY_CLOSE`    | Fired when the survey's close button is clicked.                                                         |
| `COMPLETE_OK`     | Occurs when the respondent clicks the OK button on the completion screen.                                |
| `COMPLETE_CANCEL` | Occurs when the respondent clicks the CANCEL button on the completion screen.                            |
| `ABORT`           | Indicates the survey has been aborted, redirecting the respondent to a disqualification or abort screen. |
| `ABORT_OK`        | Occurs when the respondent clicks the OK button on an abort screen.                                      |
| `ABORT_CANCEL`    | Occurs when the respondent clicks the CANCEL button on an abort screen.                                  |

## Survey API

When using the `onChange` callback attribute, we mentioned the `api` interface, which provides methods to interact with the survey component. The available methods include:

| API Method               | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| `goNext()`               | Advances the survey to the next page.                                   |
| `goPrev()`               | Returns the survey to the previous page.                                |
| `goPage(pageId: string)` | Navigates directly to a specified page, identified by its `pageId`.     |
| `reset()`                | Resets the survey, clearing all responses and starting a fresh session. |

You can also obtain the `api` interface from the survey component instance. Here's an example of using the `api` interface to interact with the survey component. It resets the survey when the `SURVEY_CLOSE` event is emitted, allowing users to start a new session by clicking the close button.

=== "HTML (using callback)"

    ```html linenums="1" hl_lines="6-10"
    <html>
      <head>
        <title>My Survey</title>
        <script async src="https://tag.surveycompo.com/v1.js"></script>
        <script>
          onSurveyChange = (eventDetail, api) => {
            if (eventDetail.name === "SURVEY_CLOSE") {
              api.reset()
            }
          }
        </script>
      </head>
      <body>
        <survey-compo
          id="my-survey"
          src="https://example.host.com/survey-source.json"
          onchange="onSurveyChange"
        />
      </body>
    </html>
    ```

=== "HTML (using addEventListener)"

    ```html linenums="1" hl_lines="8-10"
    <html>
      <head>
        <title>My Survey</title>
        <script async src="https://tag.surveycompo.com/v1.js"></script>
        <script>
          window.addEventListener("surveychange", (e) => {
            const eventDetail = e.detail;
            const api = document.getElementById("my-survey").api;
            if (eventDetail.name === "SURVEY_CLOSE") {
              api.reset()
            }
          });
        </script>
      </head>
      <body>
        <survey-compo
          id="my-survey"
          src="https://example.host.com/survey-source.json"
          onchange="onSurveyChange"
        />
      </body>
    </html>
    ```

=== "Preview"

    <div style="border: 1px solid gray; width: 320px; height: 400px; margin-bottom: 10px" class="resizable">
      <survey-compo
        onload="addCloseButton"
        src="https://surveycompo.github.io/examples/examples/basic/source.json"
      />
    </div>
