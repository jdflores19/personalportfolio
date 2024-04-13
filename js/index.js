const buttons = document.querySelectorAll(".navbutton");

const mainContainer = document.querySelector(".maincontainer");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.textContent !== "Home") {
      event.preventDefault();
    }

    buttons.forEach((otherButton) => {
      otherButton.style.color = "black";
    });

    button.style.color = "white";

    let fileToLoad;
    switch (button.textContent) {
      case "About":
        fileToLoad = "about.html";
        break;
      case "Works":
        fileToLoad = "works.html";
        break;

      case "Say Hi!":
        fileToLoad = "contact.html";
        break;
    }

    if (fileToLoad) {
      fetch(fileToLoad)
        .then((response) => response.text())
        .then((data) => {
          mainContainer.innerHTML = data;
        });
    }
  });
});
