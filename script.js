
    var text = document.querySelector(".scentery");
    var overlay = document.querySelector(".overlay");
      var overlay2 = document.querySelector(".overlay2");
    var text2 = document.querySelector(".cometskirt");
    var overlay3 = document.querySelector(".overlay3");
  var text3 = document.querySelector(".mooder");

overlay.addEventListener("mouseover", function(){
  text.style.display="block";
  text.style.color = "white";
  text.style.opacity = "1.0";

})
overlay.addEventListener("mouseout", function(){
  text.style.display="none";
})

overlay2.addEventListener("mouseover", function(){
  text2.style.display="block";
  text2.style.color = "white";
  text2.style.opacity = "1.0";

})
overlay2.addEventListener("mouseout", function(){
  text2.style.display="none";
})
overlay3.addEventListener("mouseover", function(){
  text3.style.display="block";
  text3.style.color = "white";
  text3.style.opacity = "1.0";

})
overlay3.addEventListener("mouseout", function(){
  text3.style.display="none";
})
