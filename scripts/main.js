// @ts-check

const myHeading = document.querySelector("h1");

myHeading.textContent = "Hello world!";

document.querySelector("img").addEventListener("click", function () {
    alert("别戳我，我怕疼！");
});

document.querySelector("h2").addEventListener("click", () => {
    document.querySelector("h2").textContent = "你好？";
})

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
}