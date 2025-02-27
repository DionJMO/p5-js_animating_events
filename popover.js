document.addEventListener("DOMContentLoaded", (event) => {
  const popoverTrigger = document.getElementById("popoverBtn");
  if (popoverTrigger) {
    const popover = new bootstrap.Popover(popoverTrigger, {
      trigger: "click",
      content: data,
      title: "Information",
    });
    // popoverTrigger.addEventListener("click", () => {
    //   popover.toggle();
    // });
  }
});
