export function DragAndDrop() {
    let newCardBtn = document.getElementById("newCardBtn");
    let cards = document.getElementById("cards");
    let boxcounter = 0; 

    newCardBtn.addEventListener("click", () => {
        let addBox = document.createElement("div");
        addBox.style.width = "10rem";
        addBox.style.height = "10rem"; 
        addBox.style.border = "1px solid black";
        addBox.style.marginTop = "2rem";
        addBox.draggable = "true";
        addBox.ondragstart = drag;
      
        const randomcolor = Math.floor(Math.random()*16777215).toString(16);
        addBox.style.backgroundColor = "#" + randomcolor;

        addBox.id = "addedBox" + boxcounter;
        boxcounter++;

        cards.appendChild(addBox);
    })

}


 export function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

 export function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}