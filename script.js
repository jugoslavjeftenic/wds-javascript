const link = document.querySelector("a");
let brojac = 0;

link.addEventListener("click", e => {
    e.preventDefault();
    console.log(`kliknuo ${++brojac}`);
});