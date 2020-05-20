jQuery(document).ready(function(){
    $('#parrafo').css("font-size" , "10px");
});

  
  $('.parrafo13').mouseover(function(){
      $(this).css("background-color" , "black").css("color" , "slateblue");
  });

 $('.parrafo13').mouseout(function(){
     $(this).css("background-color" , "slateblue").css("color" , "black");
  });