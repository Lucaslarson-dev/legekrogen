function validate() {
  let form = document.forms["formm"];
  let errorbos = document.querySelector(".error-message");

  const errorMessages = [];

  if (form["navn"].value == "") {
    errorMessages.push("Name is required");
  }

  if (form["E-mail"].value == "") {
    errorMessages.push("Email is required");
  }

  if (form["textarea"].value == "") {
    errorMessages.push("Tekst is required");
  } else if (form["textarea"].value.length > 250) {
    errorMessages.push("Max limit is 250");
  }

  console.log(errorMessages);
  console.log(errorMessages.length);
  if (errorMessages.length != 0) {
    errorbos.classList.add("show");
    errorbos.innerText = errorMessages.toString();

    return false;
  }
  return true;
}

function burgermenu() {
  document.querySelector("nav").classList.toggle("active");
}
