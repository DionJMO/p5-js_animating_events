// const { title } = require("process");

document.addEventListener("DOMContentLoaded", (event) => {
  const popoverTrigger = document.getElementById("popoverBtn");
  if (popoverTrigger) {
    const popover = new bootstrap.Popover(popoverTrigger, {
      trigger: "click",
      content: "And here is some amazing content. It is very engaging. Right?",
      title: "Popover Title",
    });
    // popoverTrigger.addEventListener("click", () => {
    //   popover.toggle();
    // });
  }
});
