export default function OutsideClickClose(element) {
  const eventStart = ["touchstart", "click"];
  const hmtl = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside, "")) {
    eventStart.forEach((event) => {
      hmtl.addEventListener(event, ClickClose);
      element.setAttribute(outside, "");
    });
  }
  function ClickClose(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      eventStart.forEach((event) => {
        element.classList.remove("active");
        hmtl.removeEventListener(event, ClickClose);
      });
    }
  }
}
