const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
const img = document.getElementById("img");

const div = document.createElement("div");
const parentdiv = document.createElement("div");

/*parentdiv.style.justifyContent = "center";
parentdiv.style.display = "flex";
div.style.backgroundColor = `${base.value}`;
div.style.width = "800px";
div.style.height = "500px";
img.style.position = "relative";*/


window.addEventListener("input", changecss);

function changecss(e){
    console.log(e.target.value, e.target.id);
    console.log()
    img.style.backgroundColor = `${base.value}`;
    img.style.padding = "10px";
}
console.log(`${spacing.value} : ${blur.value} : ${base.value}`);


/*document.body.appendChild(parentdiv);
document.body.appendChild(div);
div.appendChild(img);
parentdiv.appendChild(div);*/