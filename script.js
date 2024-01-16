const btnEl = document.querySelector(".btn");
const inpEl = document.getElementById("inp");
const contentEl = document.querySelector(".content");


btnEl.addEventListener("click", ()=> {
    console.log(contentEl.innerText);
    console.log(inpEl.value);

    let pattren = new RegExp(`${inpEl.value}`, "gi");

    contentEl.innerHTML = contentEl.textContent.replace(pattren, () => `<mark>${inpEl.value}</mark>`);
});