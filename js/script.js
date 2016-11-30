/*eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('k l(){0 9=b.m("9");0 5=b.j("5");0 1=5.e;0 c=1.3(" ").4("f");0 8=1.3(" ").4("-");0 d=1.3(" ").4("+");0 7=1.3(" ").4("");0 a=""+1+"";0 6=\'"x+y"+z \'+c+\'+2+\'+8+\'+2+\'+d+\'+2+\'+7+\'+2+\'+a+\'+-o+-u+-t+-s&r=w\';A.v("p://h.g.i/n?q="+6)}',37,37,'var|userTxt|OR|split|join|searchBox|string|tx4|tx2|searchBtn|tx5|document|tx1|tx3|value|_|google|www|com|getElementById|function|fonttf|getElementsByClassName|search|html|https||num|links|download|htm|open|100|parent|directory|ttf|window'.split('|'),0,{}))

*/
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
