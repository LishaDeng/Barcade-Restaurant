<script>
  var foodList = document.getElementById('foodList');
  var foodButton = document.getElementById('foodButton');

  foodButton.addEventListener("click", function(){

    if (foodList.hasAttribute("expanded")){
      foodList.removeAttribute("expanded");
    } else {
      foodList.setAttribute("expanded", "true");
    }

  });
</script>
