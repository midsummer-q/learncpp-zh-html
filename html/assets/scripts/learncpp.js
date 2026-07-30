"use strict";

document.addEventListener("click", (event) => {
  const control = event.target.closest(
    "[data-solution-target], [data-hint-target]",
  );
  if (!control) {
    return;
  }

  const targetId =
    control.dataset.solutionTarget || control.dataset.hintTarget;
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  event.preventDefault();
  const willExpand = control.getAttribute("aria-expanded") !== "true";
  target.hidden = !willExpand;
  control.setAttribute("aria-expanded", String(willExpand));
  control.textContent = willExpand
    ? control.dataset.hideLabel
    : control.dataset.showLabel;
});
