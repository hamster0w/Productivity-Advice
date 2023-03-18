function makeVisible(id){
  document.getElementById(id).style.visibility = "visible";
}
function disappear(id){
  document.getElementById(id).style.visibility = "hidden";
}

//Planner
function finalplan() {
  var checkboxes = document.getElementsByName('days');
  var result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + ", ";
      }
  }
  document.write("<p> You have selected : " + result + "</p>");
}

function createTable(){
// for (var i = 0; i < checkboxes.length; i++) {
//   if (checkboxes[i].checked) {
//     colNum ++;
//     }
// }
  
var wake = parseInt(document.getElementById('wake').value);
var commute1 = parseInt(document.getElementById('commute1').value); //to get to work
  console.log("commute1", commute1)
var work = parseInt(document.getElementById('work').value);
var commute2 = parseInt(document.getElementById('commute2').value); //to get back home
var rWork = parseInt(document.getElementById('rWork').value);
var free = parseInt(document.getElementById('hours').value);
var sleep = parseInt(document.getElementById('sleep').value);
var leave = 7;
  
//work
  let table = Array(24).fill(Array(5));
  var t = wake;
  console.log(wake)
  for(var r = wake; r<leave; r++){
    for (var c = 0; c < 5; c++ ){
      table[r][c] = "Wake Up and Get Ready";
    }
    t++;
  }
  var f = t;
  console.log(f, leave+commute1)
  for(var r = f; r<leave+commute1; r++){
    for (var c = 0; c < 5; c++ ){
      // console.log(r, c, table[r])
      table[r][c] = "Commute";
    }
    t++;
  }
  var x = t;
  for(var r = x; r<x+work; r++){
    for (var c = 0; c < 5; c++ ){
      table[r][c] = "Job/School";
    }
    t++;
  }
  var b = t; 
  for(var r = b; r<b+commute2; r++){
    for (var c = 0; c < 5; c++ ){
      table[r][c] = "Commute";
    }
    t++;
  }
  var l = t;
  for (var r = l; r<l+rWork; r++){
   for (var c = 0; c < 5; c++ ){
     table[r][c] = "Extra Work";
  }
   t++;
  }
  console.log(table)
  // var i= 
  //if (sleep){
   // for (var r = wake-1; r>=0; r--){
      
    // }
  // }
  

  // for(var r = ; r<comute

  for (var r = 0; r < table.length; r++) {
    for (var c = 0; c < table[0].length; c++) {
      const row = document.getElementsByTagName("tr")[r+1];
      const cell = row.getElementsByTagName("td")[c+1];
      cell.innerText = table[r][c];
    }
  }
}
