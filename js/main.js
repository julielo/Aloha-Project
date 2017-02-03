$(function () {

  /* Smooth Scrolling */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      return false;
      }
    }
  });

  /* Flickity plugin */
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  /* Email validation for Update Section */
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $('form').on('click', '.subscribe', function(){
   console.log(this)
   event.preventDefault();
   var textBoxVal = $('.userInput').val();

   if(isEmail(textBoxVal)){
    alert('Thanks for Subscribing!');
   }else{
    alert('Please enter a valid email address!');
   }
  });
}
