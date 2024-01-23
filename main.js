const add = document.querySelector(".add");
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach(noteText => addNode(noteText));
}
add.addEventListener("click", () => addNode());
function addNode(text = "") {
  const allNote = document.createElement("div");
  const note = document.createElement("div");
  note.classList.add("note-wrapper");
  note.innerHTML = `<div class="operations">
  <button class="edit bx bxs-edit"></button>
  <button class="delete bx bxs-trash"></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class ="${text ? "hidden" : ""}"></textarea>`;
  const textarea = note.querySelector("textarea");
  const main = note.querySelector(".main");
  const edit = note.querySelector(".edit");
  const deleteButton = note.querySelector(".delete");
  textarea.value = text;
  main.innerHTML = text;
  deleteButton.addEventListener("click", () => {
    note.remove();
    update();
  });
  edit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });
  textarea.addEventListener("input", e => {
    const { value } = e.target;
    main.innerHTML = value;
    update();
  });
  document.body.appendChild(note);
}
function update() {
  const nodeText = document.querySelectorAll("textarea");
  const notes = [];
  nodeText.forEach(note => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
