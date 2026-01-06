// Demo message listener (for Salesforce iframe postMessage later)
window.addEventListener("message", (event) => {
  if (event.data?.type === "UPDATE") {
    console.log("Received update from Salesforce:", event.data.payload);
  }
});
