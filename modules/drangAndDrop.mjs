export function DragAndDrop() {
  let newCardBtn = document.getElementById("newCardBtn");
  let cards = document.getElementById("cards");
  let boxcounter = 0;
  let boxInput = document.getElementById("input");

  boxInput.setAttribute("type", "text");
  boxInput.setAttribute("placeholder", "Enter a title");

  newCardBtn.addEventListener("click", (e) => {
    if (boxInput.value) {
      let addBox = document.createElement("div");
      let boxName = document.createElement("h3");
      boxName.innerText = boxInput.value;

      addBox.appendChild(boxName);
      boxInput.value = "";
      addBox.className = "kort";
      addBox.draggable = "true";
      addBox.ondragstart = drag;

      const randomcolor = Math.floor(Math.random() * 16777215).toString(16);
      addBox.style.backgroundColor = "#" + randomcolor;

      addBox.id = "addedBox" + boxcounter;
      boxcounter++;

      cards.appendChild(addBox);
    } else {
      alert("write a kort title");
    }
  });
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
