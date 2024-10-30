## Event Tracking with SurveyCompo

By default, SurveyCompo automatically captures all survey events to facilitate data collection and analysis. This default behavior ensures that you receive insights into user interactions without additional setup.

if you need to disable the automatic sending of survey events to SurveyCompo, you can do so by modifying the `mode` attribute. Set this attribute to "demo" to disable event tracking. This is useful when you want to test the survey without sending events to SurveyCompo.

The following example demonstrates a survey with Event Tracking **disabled**.

```html linenums="1" hl_lines="7"
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
  </head>
  <body>
    <survey-compo src="[Survey ID or URL]" mode="demo" />
  </body>
</html>
```

## Sending All Events To Your Own Server

If you need to collect all survey events for detailed data reporting or other specific purposes, you can define the 'dataEndpoint' key in your Survey JSON configuration. This key specifies the URL of the server where you want to send the survey events. SurveyCompo then sends all events to this server in real-time.

The following example demonstrates how to send all survey events to a remote data collection server:

```json linenums="1" hl_lines="12"
{
  "name": "test",
  "startScreens": [
    /** ... **/
  ],
  "pages": [
    /** ... **/
  ],
  "completeScreens": [
    /** ... **/
  ],
  "dataEndpoint": "https://my-server.com/survey-data-endpoint"
}
```

SurveyCompo uses the `navigator.sendBeacon()` method to send event data to a server. This method is part of the Beacon API, which allows web pages to send data to a server in the background, independently of the page lifecycle. This ensures the data is sent reliably without blocking the user’s navigation. However, it sends data as a POST request with a content type of `text/plain`, so the server must be able to handle this format and parse the event data from stringified JSON accordingly.

!!! note "Note"

    To send survey responses to your server, a Premium Plan is required. For more information, visit our [Pricing page](https://www.surveycompo.com/pricing).

## Sending Filtered Events to Your Server

To effectively collect survey responses and performance metrics, you can implement event listeners that capture specific survey events, filter out irrelevant ones, and transmit the necessary data to your server. This server can then store the information in a database or forward it to downstream analytics services for further analysis.

The COMPLETE event is triggered when a respondent finishes the survey. The accompanying event detail object includes:

- **Survey Responses**: All answers provided by the respondent.
- **Contextual Information**: Useful data such as start and completion timestamps.

The following example demonstrates how to send survey response data to a remote data collection server upon survey completion:

```html linenums="1" hl_lines="24"
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
    <script>
      window.addEventListener("surveychange", (e) => {
        const eventDetail = e.detail
        if (eventDetail.name === "COMPLETE") {
          fetch("https://your-data-collection-service.com/responses", {
            method: "POST",
            body: eventDetail,
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
        }
      })
    </script>
  </head>
  <body>
    <survey-compo
      id="my-survey"
      src="[Survey ID or URL]"
      onchange="onSurveyChange"
    />
  </body>
</html>
```

The code snippet above sends survey responses to a remote server when the `COMPLETE` event is triggered. This approach ensures that only the filtered events are transmitted from the frontend to your server. Consequently, your server must handle CORS configurations and address other security concerns to securely receive and process the data.

!!! note "Note"

    Access to the `inputs` field in the event context requires a Premium Plan. For details, visit the [Pricing page](https://www.surveycompo.com/pricing).

!!! tip "Tip"

    Every survey event includes a unique session ID and timestamp, which are essential for data validation. The session ID uniquely identifies each survey session, enabling you to track individual responses and performance metrics effectively. Additionally, the event's `context` object contains the session ID along with other valuable information.

## Data Report

If you opt to send data to SurveyCompo, you can view survey responses and performance metrics in real-time in the SurveyCompo App.

![Tutorial - Survey Data](../assets/images/tutorial-survey-data.png){: .center .md}
