let friendList = [];
let friendValue = "";

const inputFriendTxt = document.getElementById("amigo");
const ulFriendList = document.getElementById("listaAmigos");
const ulFriendResult = document.getElementById("resultado");

function agregarAmigo() {
  friendValue = inputFriendTxt.value;
  if (friendValue == "") {
    alert("Por favor, inserte un nombre");
  } else {
    friendList.push(friendValue);
  }
  inputFriendTxt.value = "";
  addList();
}

function addList() {
  ulFriendList.innerHTML = "";

  for (let i = 0; i < friendList.length; i++) {
    const li = document.createElement("li");
    li.textContent = friendList[i];
    ulFriendList.appendChild(li);
  }
}

function sortearAmigo() {
  const randomIndex = Math.floor(Math.random() * friendList.length);

  if (friendList.length == 0) {
    alert("Por favor, la lista de amigos no puede estar vacía");
    return;
  }

  ulFriendList.innerHTML = "";
  ulFriendResult.innerHTML = `El amigo sorteado es: ${friendList[randomIndex]}`;
}
