$(document).ready(function(){

  $(".items").click(function(){
    $(this).children(".hidetext").slideUp();
    $(this).children(".shown").toggle(1200);
  });
});
