export default function outsideClickClose(arrayElements, callback) {
  const eventStart = ["touchstart", "click"];
  const hmtl = document.documentElement;
  const outside = "data-outside";

  function clickClose(event) {
    const verificador = arrayElements.some((element) => element.contains(event.target));
    arrayElements.forEach((element) => {
      if (!verificador) {
        element.removeAttribute(outside);
        eventStart.forEach(() => {
          hmtl.removeEventListener(event, clickClose);
        });
        callback();
      }
    });
  }

  arrayElements.forEach((element) => {
    if (!element.hasAttribute(outside, "")) {
      eventStart.forEach((starter) => {
        setTimeout(() => {
          hmtl.addEventListener(starter, clickClose);
        });
      });
      element.setAttribute(outside, "");
    }
  });
}
