## Sending Filtered Events To Your Own Server

To collect survey responses and performance metrics, you can add event listeners to survey events, filter out the ones that are not relevant, and send them to a server. The server can then store the data in a database or send it to a downstream analytics service.

The `COMPLETE` event is fired when respondents finish the survey. The associated event detail object contains the survey responses and useful context, including start and completion timestamps. The following example demonstrates sending survey response data to a remote data collection server upon survey completion.

```html
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
      src="https://example.host.com/survey-source.json"
      onchange="onSurveyChange"
    />
  </body>
</html>
```

The above code snippet sends the survey responses to a remote server when the `COMPLETE` event is fired. With this approach, the frontend code only sends the filtered events to the server, and the server must handle CORS and other security concerns.

!!! tip "Tip"

    All survey events come with a unique session ID and timestamp, useful for data validation. The session ID is unique to each survey session and can be used to track survey responses and performance metrics. The event `context` object contains the session ID and other useful information.

## Sending All Events To Your Own Server

A second approach is to send all survey events to your server and filter out the ones that are not relevant on the server side. This approach is useful when you want to collect all survey events for detailed data reporting or other purposes.

The survey component provides a handy attribute `sendevents` that can be used to specify a URL to send all survey events to. The following example demonstrates sending all survey events to a remote data collection server.

```html
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
  </head>
  <body>
    <survey-compo
      id="my-survey"
      src="https://example.host.com/survey-source.json"
      sendevents="https://your-data-collection-service.com/events"
    />
  </body>
</html>
```

SurveyCompo uses the `navigator.sendBeacon()` method to send event data to a server. This method is part of the Beacon API, which allows web pages to send data to a server in the background, independently of the page lifecycle. This ensures the data is sent reliably without blocking the user’s navigation. However, it sends data as a POST request with a content type of `text/plain`, so the server must be able to handle this format and parse the event data from stringified JSON accordingly.

## Sending All Events To Surveycompo

SurveyCompo provides a built-in feature to capture all survey events for data collection and analysis. This feature is useful when you want to collect survey responses and performance metrics without setting up your own data collection server.

You can enable the `sendevents` attribute to send all survey events to SurveyCompo. The following example demonstrates sending all survey events to SurveyCompo. This is how the SurveyCompo hosted survey page is configured.

```html
<html>
  <head>
    <title>My Survey</title>
    <script async src="https://tag.surveycompo.com/v1.js"></script>
  </head>
  <body>
    <survey-compo
      src="https://example.host.com/survey-source.json"
      sendevents="surveycompo"
    />
  </body>
</html>
```

## Data Report

If you opt to send data to SurveyCompo, you can view survey responses and performance metrics in real-time in the SurveyCompo App.

![Tutorial - Survey Data](../assets/images/tutorial-survey-data.png){: .center .md}
