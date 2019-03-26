$(document).ready(function() {
  setInterval(function() {
    $.ajax({
      url: "score.json",
      success: function(data) {
        $("#score").text(data.score);
      }
    });
  }, 5000);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then(function() {
    console.log("Service Worker is registered!");
  });
}
