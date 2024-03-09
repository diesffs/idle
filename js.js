let id = setInterval(() => {}, 99999999);
let playerAttack = 1;
let playerAttackSpeed = 3;
let playerHealthPoints = 10;

function changeContent(panelId) {
  // Hide all panel contents
  var panelContents = document.getElementsByClassName("panel-content");
  for (var i = 0; i < panelContents.length; i++) {
    panelContents[i].style.display = "none";
  }

  // Show the selected panel content
  document.getElementById(panelId).style.display = "block";

  var width = 0;
  let battleScreen = document.getElementById("battle").style.display;
  if (battleScreen == "block") {
    clearInterval(id);
    id = setInterval(interval, playerAttackSpeed);

    function interval() {
      var elem = document.getElementById("playerAtckSpdBarProgress");

      if (width >= 854) {
        clearInterval(id);
        width = 0;
        elem.style.width = 0;
        id = setInterval(interval, playerAttackSpeed);
      } else {
        width += 1;
        elem.style.width = width + "px";
      }
    }
  } else {
    clearInterval(id);
  }

  // Update the active button
  var buttons = document.getElementsByClassName("menu-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.querySelector(`.fight-button`).classList.add("active");
}

// setInterval(() => {

document.getElementById("attack").innerHTML = playerAttack;
document.getElementById("attackSpeed").innerHTML = playerAttackSpeed;
document.getElementById("healthPoints").innerHTML = playerHealthPoints;

let mouseAttack = 1;
let mouseAttackSpeed = 3000;
let mouseHealthPoints = 3;
let mouseKills = 0;
let mouseGiveAtck = 0.01;

document.getElementById("mouseAttack").innerHTML = mouseAttack;
document.getElementById("mouseAttackSpeed").innerHTML = mouseAttackSpeed;
document.getElementById("mouseHealthPoints").innerHTML = mouseHealthPoints;
document.getElementById("mouseKills").innerHTML = mouseKills;
document.getElementById("mouseGive").innerHTML = mouseGiveAtck;

// console.log(battleScreen)

// }, 1000)
