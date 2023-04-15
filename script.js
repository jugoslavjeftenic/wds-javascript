const grandParent = document.querySelector(".grand-parent");
const children = grandParent.querySelectorAll(".child");
const parentOne = children[0].parentElement;

children.forEach(child => child.style.color = "red");
parentOne.style.color = "green";