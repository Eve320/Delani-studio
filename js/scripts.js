$(document).ready(function(){

  $(".items").click(function(){
    $(this).children(".describe").slideToggle(1000);
    $(this).children(".picture").toggle(1200);
  });
});
