export default function OutsideClickClose(arrayElements, callback) {
  const eventStart = ["touchstart", "click"];
  const hmtl = document.documentElement;
  const outside = "data-outside";

  arrayElements.forEach((element) => {
    if (!element.hasAttribute(outside, "")) {
      eventStart.forEach((starter) => {
        setTimeout(() => {
          hmtl.addEventListener(starter, ClickClose);
        });
      });
      element.setAttribute(outside, "");
    }
  });

  function ClickClose(event) {
    const verificador = arrayElements.some((element) => {
      return element.contains(event.target);
    });
    arrayElements.forEach((element) => {
      if (!verificador) {
        element.removeAttribute(outside);
        eventStart.forEach((event) => {
          hmtl.removeEventListener(event, ClickClose);
        });
        callback();
      }
    });
  }
}
