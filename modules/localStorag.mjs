let data = [];
export function Save(cardContent) {
  if (localStorage.getItem("cards") == null) {
    localStorage.setItem("cards", data);
  }
  let oldData = JSON.parse(localStorage.getItem("cards"));
  oldData.push(cardContent);
  localStorage.setItem("cards", JSON.stringify(oldData));
}
