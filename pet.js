function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("menu").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menu").style.marginLeft = "0";
}
let foodDropCount = 0;function incHeight(id) {
  var dog = document.getElementById(id);
  var height = dog.offsetHeight;
  var width = dog.offsetWidth;
  var newHeight = height + 50;
  var newWidth = width + 50;
  dog.style.height = newHeight + 'px';
  dog.style.width = newWidth + 'px';
  dog.src = 'https://i.pinimg.com/originals/cd/18/00/cd1800edc2c6c1ae930e7fa7fee1dca2.gif'
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  foodDropCount += 1
  if(foodDropCount > 4 && foodDropCount < 6) {
    incHeight('Pett');
  }
}