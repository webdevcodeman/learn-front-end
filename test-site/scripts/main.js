const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mars-rover.jpg") {
    myImage.setAttribute("src", "images/curiosity-rover.jpg");
  } else {
    myImage.setAttribute("src", "images/mars-rover.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Curiosity is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Curiosity is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
