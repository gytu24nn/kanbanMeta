export function DragAndDrop() {
  let newCardBtn = document.getElementById("newCardBtn");
  let cards = document.getElementById("cards");
  let boxcounter = 0;
  let boxInput = document.getElementById("input");

  boxInput.setAttribute("type", "text");
  boxInput.setAttribute("placeholder", "Enter a card title");

  newCardBtn.addEventListener("click", () => {
    if (boxInput.value) {
      let addBox = document.createElement("div");
      let boxName = document.createElement("h3");
      let editBtn = document.createElement("button");
      let delBtn = document.createElement("button");

      boxName.innerText = boxInput.value;
      editBtn.innerText = "save";
      delBtn.innerText = "Delete";
      let editInput = document.createElement("input");
      editInput.setAttribute("type", "text");
      editInput.setAttribute("placeholder", "Edit card text");
      addBox.append(boxName, editInput, editBtn, delBtn);
      boxInput.value = "";
      addBox.className = "kort";
      addBox.draggable = "true";
      addBox.ondragstart = drag;

      editBtn.addEventListener("click", () => {
        boxName.innerText = editInput.value;
        editInput.value = "";
      });

      delBtn.addEventListener("click", () => {
        addBox.remove();
      })

      const randomcolor = Math.floor(Math.random() * 16777215).toString(16);
      addBox.style.backgroundColor = "#" + randomcolor;

      addBox.id = "addedBox" + boxcounter;

      boxcounter++;
      cards.appendChild(addBox);
    } else {
      alert("write a card title");
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
