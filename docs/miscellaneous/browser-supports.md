---
title: Browser Support
---

## Supported Browsers

SurveyCompo surveys are compatible with all modern browsers on desktop and mobile devices. Specifically, SurveyCompo surveys have been tested on the following browsers:

- Google Chrome (version 79+)
- Mozilla Firefox (version 65+)
- Apple Safari (version 12+)
- Microsoft Edge (version 79+)
- Opera (version 58+)
- Samsung Internet (version 10+)

SurveyCompo uses modern web technologies to provide a fast and responsive survey experience. Legacy browsers like Internet Explorer and Classic Edge are not supported due to non-standard DOM behavior.

## Detecting Browser Support

To ensure compatibility, use the following feature detection code to check if the browser supports SurveyCompo:

```javascript
// Check if the browser supports SurveyCompo
if (typeof globalThis === 'undefined') {
  // SurveyCompo is not supported
} else {
  // SurveyCompo is supported
}
```