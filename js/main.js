$(document).ready(function(){

    $('.wrapper-menu').on("click",function(){
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
      $('header').toggleClass('posi');
    });

  });

  var wrapperMenu = document.querySelector('.wrapper-menu');
    wrapperMenu.addEventListener('click', function(){
    wrapperMenu.classList.toggle('open');  
});