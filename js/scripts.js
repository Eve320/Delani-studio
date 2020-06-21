$(document).ready(function(){

  $(".items").click(function(){
    $(this).children(".describe").slideToggle(1000);
    $(this).children(".picture").toggle(1200);
  });


  $(".col-md-3").mouseover(function(){
    $(this).children(".projectName"). show()
  });

  $(".col-md-3").mouseout(function(){
    $(this).children(".projectName"). hide()
  });
});
