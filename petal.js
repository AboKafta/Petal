const dialog = document.getElementById("confirm-dialog");

dialog.addEventListener("close", () => {
  switch (dialog.returnValue) {
    case "Yes":
      log("Omg wait really? I love you too yayyy yipeee");
      break;
    case "No":
      log("Oh its fine... I never loved you back anyway...");
      break;
    default:
      log("Closed with value:", dialog.returnValue);
  }
});