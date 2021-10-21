/*$(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});


        

    });*/

    $(document).foundation();


var loaderDiv = document.getElementById('loader');

$(document.body).on("open.fndtn.clearing", function(event) {
  spinDiv.style.display = 'block';
  alert('Pause so you can see the spinner');
});

$(document.body).on("opened.fndtn.clearing", function(event) {
  spinDiv.style.display = 'none';
});