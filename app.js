let friendList = [];
let friendValue = "";

const inputFriendTxt = document.getElementById("amigo");
const ulFriendList = document.getElementById("listaAmigos");

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
