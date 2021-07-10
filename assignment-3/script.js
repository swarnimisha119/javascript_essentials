var btnH=document.querySelector("#btn-hello");
var pEle=document.querySelector("#intext");
//var tcont=document.querySelector("#firstlast");->this didn't work
//const val=tcontent.getAttribute("name")
 btnH.addEventListener("click",function clickEventHandler(){
     pEle.innerHTML="Hey "+document.getElementById("firstlast").value+"! welcome!";
     //return false;
});