const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
const img = document.getElementById("img");

/* const div = document.createElement("div");
const parentdiv = document.createElement("div");

parentdiv.style.justifyContent = "center";
parentdiv.style.display = "flex";
div.style.backgroundColor = `${base.value}`;
div.style.width = "800px";
div.style.height = "500px";
img.style.position = "relative";*/


window.addEventListener("input", changecss);


img.style.padding = "20px";
img.style.filter = "blur(10px)";
img.style.backgroundColor = `${base.value}`;

function changecss(e){

    if(e.target.id === "spacing"){
        img.style.padding = `${spacing.value}px`;
    }else if(e.target.id === "blur"){
        img.style.filter = `blur(${blur.value}px)`;
    }else{
        img.style.backgroundColor = `${base.value}`;
    }
}



/*document.body.appendChild(parentdiv);
document.body.appendChild(div);
div.appendChild(img);
parentdiv.appendChild(div);*/