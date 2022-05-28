function toggleOpen(e){ 
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){

        this.classList.toggle('clickdiv');
    }

}
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
