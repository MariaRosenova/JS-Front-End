function toggle() {

  const eventButton = document.querySelector(".button");
  const extraInfo = document.querySelector("#extra");
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    eventButton.textContent = "Less";
  } else {
    extraInfo.style.display = "none";
    eventButton.textContent = "More";
  }
}
