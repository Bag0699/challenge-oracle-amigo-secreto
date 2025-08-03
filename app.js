let friendList = [];
let friendValue = "";

const inputFriendTxt = document.getElementById("amigo");

function agregarAmigo() {
  friendValue = inputFriendTxt.value;
  if (friendValue == "") {
    alert("Por favor, inserte un nombre");
  } else {
    friendList.push(friendValue);
  }
  inputFriendTxt.value = "";
}
