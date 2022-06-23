var firstP="I really am afraid of JS";
var scondP="loving JS.";
var thirP="";
var saveAM=firstP.substring(8,11);
console.log(saveAM);
var saveI=firstP.substring(0,1);
console.log(saveI);
var word3=firstP.substring(2,8);
thirP=saveI+saveAM+" "+word3+" "+scondP;
console.log(thirP);
document.getElementById("positive").innerHTML=thirP;

