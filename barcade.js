  var foodList=document.getElementById('foodList');
  var foodButton=document.getElementById('foodButton');
  var drinkList=document.getElementById('drinkList');
  var drinkButton=document.getElementById('drinkButton');
  var specialsList=document.getElementById('specialsList');
  var specialsButton=document.getElementById('specialsButton');

   foodButton.addEventListener("click", function(){

    if (foodList.hasAttribute("expanded")){
      foodList.removeAttribute("expanded");
      drinkList.setAttribute("expanded", "true");
      specialsList.removeAttribute("expanded");
    } else {
      foodList.setAttribute("expanded", "true");
      drinkList.removeAttribute("expanded");
      specialsList.removeAttribute("expanded");
    }
  },false);

   drinkButton.addEventListener("click", function(){

     if (drinkList.hasAttribute("expanded")){
       drinkList.removeAttribute("expanded");
       foodList.setAttribute("expanded", "true");
       specialsList.removeAttribute("expanded");
     } else {
       drinkList.setAttribute("expanded", "true");
       foodList.removeAttribute("expanded");
       specialsList.removeAttribute("expanded");
     }
   },false);

   specialsButton.addEventListener("click", function(){

     if (specialsList.hasAttribute("expanded")){
       specialsList.removeAttribute("expanded");
       drinkList.setAttribute("expanded", "true");
       foodList.removeAttribute("expanded");
     } else {
       specialsList.setAttribute("expanded", "true");
       drinkList.removeAttribute("expanded");
       foodList.removeAttribute("expanded");
     }
   },false);
