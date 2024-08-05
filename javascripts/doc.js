window.addEventListener("surveychange", (e) => {
  if (e.detail.name === "COMPLETE_OK" || e.detail.name === "SURVEY_CLOSE") {
    e.target.api.reset();
  }
});

window.addCloseButton = (data) => {
  return Object.assign(data, { uiShowCloseButton: true });
};

// stop mkdocs search shortcut
document.addEventListener("keydown", (ev) => {
  // prevent search shortcut with key: S and F
  if (ev.key === "s" || ev.key === "f" || ev.key === "/") {
    ev.stopPropagation();
  }
});
