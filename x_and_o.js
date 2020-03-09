var A1 = document.getElementById("A1");
var A2 = document.getElementById("A2");
var A3 = document.getElementById("A3");
var B1 = document.getElementById("B1");
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var C1 = document.getElementById("C1");
var C2 = document.getElementById("C2");
var C3 = document.getElementById("C3");

A1.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

A2.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

A3.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

B1.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

B2.addEventListener('click', (event) => {
    console.log("clicked B2")
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

B3.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

C1.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

C2.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

C3.addEventListener('click', (event) => {
    if (event.shiftKey == true) {
        makeO(event);
    } else {
        makeX(event);
    }
});

function makeX(event) {
    let xBox = event.target;
    let color = xBox.style.backgroundColor;
    console.log(color)
    if (color == "white" || color == "red") {
        xBox.style.background = "red";
    } else if (color == "blue") {
        xBox.style.background = "blue";
    }

}

function makeO(event) {
    let oBox = event.target;
    let color = oBox.style.backgroundColor;
    console.log(oBox.style)
    if (color == "white" || color == "blue") {
        oBox.style.background = "blue";
    } else if (color == "red") {
        oBox.style.background = "red";
    }
}
