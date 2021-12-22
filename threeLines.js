document.getElementById('mo').onclick = function() {
  document.getElementById('hidden_mo').style.display = "block";
}
document.getElementById('gak').onclick = function() {
  document.getElementById('hidden_gak').style.display = "block";
}
document.getElementById('ko').onclick = function() {
  document.getElementById('hidden_ko').style.display = "block";
}
document.querySelector('#send').onclick = function() {
  var mo = document.getElementById('user_mo').value;
  let gak = document.querySelector('#user_gak').value;
  let ko = document.querySelector('#user_ko').value;
  if(mo != "") {
    document.getElementById('hidden_mo').innerHTML = mo;
  }
  if(gak != "") {
    document.getElementById('hidden_gak').innerHTML = gak;
  }
  if(ko != "") {
    document.getElementById('hidden_ko').innerHTML = ko;
  }
  document.getElementById('hidden_mo').style.display = "none";
  document.getElementById('hidden_gak').style.display = "none";
  document.getElementById('hidden_ko').style.display = "none";
  document.getElementById('user_mo').value = "";
  document.getElementById('user_gak').value = "";
  document.getElementById('user_ko').value = "";
}
