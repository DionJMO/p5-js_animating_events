function showToast(message) {
  var toastMessageEl = document.getElementById("toast-message");
  toastMessageEl.innerHTML = message;
  var toastEl = document.getElementById("toast");
  var toast = new bootstrap.Toast.getOrCreateInstance(toastEl, {
    autohide: false,
    delay: Infinity,
  });
  toast.show();
}

function loadMessageAndShowToast() {
  fetch("message.md")
    .then((response) => response.text())
    .then((text) => {
      // Convert Markdown to HTML (simple conversion)
      const html = marked.parse(text);
      showToast(html);
    })
    .catch((error) => {
      console.error("Error loading message:", error);
      showToast("Error loading message.");
    });
}
// Event Listener für den Close-Button
document.addEventListener("DOMContentLoaded", (event) => {
  const toastCloseButton = document.getElementById("closeToast");
  if (toastCloseButton) {
    toastCloseButton.addEventListener("click", function () {
      var toastEl = document.getElementById("toast");
      var toast = bootstrap.Toast(toastEl);
      if (toast) {
        toast.hide();
      }
    });
  }
});
