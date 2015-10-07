function message()
{
alert("该提示框是通过 onload 事件调用的。")
}




  var foodList=document.getElementById('foodList');
  var foodButton=document.getElementById('foodButton');
  var drinkList=document.getElementById('drinkList');
  var drinkButton=document.getElementById('drinkButton');
  var specialsList=document.getElementById('specialsList');
  var specialsButton=document.getElementById('specialsButton');

   foodButton.addEventListener("click", function(){

    if (foodList.hasAttribute("expanded")){
      foodList.removeAttribute("expanded");
    } else {
      drinkList.removeAttribute("expanded");
      specialsList.removeAttribute("expanded");
      foodList.setAttribute("expanded", "true");

    }
  },false);

   drinkButton.addEventListener("click", function(){

     if (drinkList.hasAttribute("expanded")){
       drinkList.removeAttribute("expanded");
     } else {
       foodList.removeAttribute("expanded");
       specialsList.removeAttribute("expanded");
       drinkList.setAttribute("expanded", "true");

     }
   },false);

   specialsButton.addEventListener("click", function(){

     if (specialsList.hasAttribute("expanded")){
       specialsList.removeAttribute("expanded");
     } else {
       drinkList.removeAttribute("expanded");
       foodList.removeAttribute("expanded");
       specialsList.setAttribute("expanded", "true");

     }
   },false);
