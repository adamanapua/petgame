function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("menu").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menu").style.marginLeft = "0";
}
function allowDrop(ev) {ev.preventDefault();}  
function drag(ev) {ev.dataTransfer.setData("image/html", ev.target.id);}  
function drop(ev) {  
ev.preventDefault();  
var data = ev.dataTransfer.getData("image/html");  
ev.target.appendChild(document.getElementById(data));  
}  