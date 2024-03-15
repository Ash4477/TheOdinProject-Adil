const container = document.querySelector("#container");
const p = document.createElement("p");
p.style.cssText = "color:red;";
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.cssText = "color:blue;";
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.classList.toggle("box");
div.setAttribute("style", "border: 1px solid black; background-color: light-pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const childP = document.createElement("p");
childP.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(childP);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);