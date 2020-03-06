var A1 = document.body.getElementById("A1");
var A2 = document.body.getElementById("A2");
var A3 = document.body.getElementById("A3");
var B1 = document.body.getElementById("B1");
var B2 = document.body.getElementById("B2");
var B3 = document.body.getElementById("B3");
var C1 = document.body.getElementById("C1");
var C2 = document.body.getElementById("C2");
var C3 = document.body.getElementById("C3");

A1.addEventListener('click', (event) => {
    makeX(event);
});

A2.addEventListener('click', (event) => {
    makeX(event);
});

A3.addEventListener('click', (event) => {
    makeX(event);
});

B1.addEventListener('click', (event) => {
    makeX(event);
});

B2.addEventListener('click', (event) => {
    makeX(event);
});

B3.addEventListener('click', (event) => {
    makeX(event);
});

C1.addEventListener('click', (event) => {
    makeX(event);
});

C2.addEventListener('click', (event) => {
    makeX(event);
});

C3.addEventListener('click', (event) => {
    makeX(event);
});

A1.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

A2.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

A3.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

B1.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

B2.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

B3.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

C1.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

C2.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});

C3.addEventListener('click', (event.shiftKey) => {
    makeO(event);
});




function makeX(event) {
    let xBox = event.target;
    let color = xBox.style.backgroundColor;
    if (color == "white" || color == "red") {
        box.style.background = "red";
    } else if (color = "blue")
        box.style.background = "blue"
}
}

function makeO(event) {
    let oBox = event.target;
    let color = xBox.style.backgroundColor;
    if (color == "white" && color == "blue") {
        box.style.background = "blue";
    } else if (color = "red") {
        box.style.background = "red"
    }
}
