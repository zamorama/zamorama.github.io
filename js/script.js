function fonttf(){
  var searchBtn = document.getElementById("searchBtn");
  var searchBox = document.getElementById("searchBox");
  var extensionBox = document.getElementById("extensionBox");
  var userTxt = searchBox.value;
  var userExt = extensionBox.value;
  var tx1 = userTxt.split(" ").join("_");
  var tx2 = userTxt.split(" ").join("-");
  var tx3 = userTxt.split(" ").join("+");
  var tx4 = userTxt.split(" ").join("");
  var tx5 = ""+userTxt+"";
  var string = '"parent+directory"'+" "+userExt+" "+tx1+'+OR+'+tx2+'+OR+'+tx3+'+OR+'+tx4+'+OR+'+tx5+'+-html+-htm+-download+-links&num=100';
  window.open("https://www.google.com/search?q="+string);
}
