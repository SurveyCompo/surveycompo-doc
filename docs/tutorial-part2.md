---
weight: 210
title: Tutorial 2 - Collect Data
---

# Tutorial - Collect Data

In our previous tutorial, we built a simple Product Satisfaction survey. In this tutorial, we will learn how to publish and share the survey, collect responses, and analyze the data.

## Publishing Survey

Once your survey is complete, you can publish it to finalize the survey JSON model. SurveyCompo provides a one-click button for this purpose. During the publishing process, SurveyCompo consolidates all pending edits since the last publish and generates a new version of the survey JSON model. It also assigns a unique survey ID and a signature hash that are used internally to ensure the integrity of the survey JSON model.

For users with a paid subscription plan, there's an option to remove SurveyCompo branding from the survey. This option can be enabled during the publishing process.

![Tutorial - Publishing](../assets/images/tutorial-publish.png){: .center .embedded}

## Self-hosting the Survey

The published survey JSON model is the only thing you need to host the survey on your website. You can download the survey JSON model from the SurveyCompo app and host it on your website. SurveyCompo provides a simple JavaScript library that you can include in your website to render the survey. The library will fetch the survey JSON model from your website and render the survey on the page.

![Tutorial - Self-hosting](../assets/images/tutorial-selfhosting.png){: .center .md}

If you opt to host the survey yourself, the responsibility of managing data collection and storage falls on you. SurveyCompo does not collect or store any survey data in this scenario. For more information on how to collect survey responses using survey Events, refer to the [Survey Events](/advanced/#event) section in our documentation.

When you host both the survey model and JavaScript library on your own website and manage the data collection, you gain total control over the survey data. This control enables you to comply with privacy regulations and meet your specific security needs.

Nevertheless, in this tutorial, we will explore the SurveyCompo hosted options, as described in the following section.

## Hosted Options

### Hosted JSON model

By default, SurveyCompo hosts the JavaScript library, and you also have the option to let SurveyCompo host your survey JSON model data. When SurveyCompo hosts the survey JSON model, you can embed the survey component into your website. For instance:

```html
<survey-compo src="https://app.surveycompo.com/src/OJqcevPh0qoDNcO0mRau.json" sendevents />
```

The `sendevents` option instructs SurveyCompo to transmit survey events to the SurveyCompo data server. This feature is beneficial when you want SurveyCompo to host the survey JSON model and collect survey responses, while you embed the survey into one of your existing web pages.


### Hosted Survey Page

In this tutorial, we will utilize the SurveyCompo hosted survey page. When this option is enabled, SurveyCompo generates a unique URL for the survey that you can share with your audience. The survey is displayed on a SurveyCompo-hosted page, and the responses are collected and stored on SurveyCompo servers.

![Tutorial - Hosted Survey](../assets/images/tutorial-hosted.png){: .center .md}

This option is ideal for users who either do not have a website or prefer not to host the survey themselves. SurveyCompo provides a unique URL for each survey that you can share with your audience. The survey is displayed on a SurveyCompo-hosted page, and the responses are collected and stored on SurveyCompo servers.

Now, let's have a look at the hosted page for the survey we created in the previous tutorial:

[https://app.surveycompo.com/page/OJqcevPh0qoDNcO0mRau.html](https://app.surveycompo.com/page/OJqcevPh0qoDNcO0mRau.html){:target="_blank"}

## Survey data



## Conclusion