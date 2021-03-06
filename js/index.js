$(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({ target: ".navbar" });
  // Add smooth scrolling on all links inside the navbar
  $("#navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Isotope gallery
  $('.gallery-container').imagesLoaded(function() {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
    });
  });

  // FAQ section
  $('.question').on('click', function(){
  var alreadyActive = $(this).hasClass('is-active');
  
  $('.answer').slideUp();
  $('.question.is-active').removeClass('is-active')
  
  if (!alreadyActive) {
     $(this).next('.answer').slideDown();
     $(this).addClass('is-active'); 
  }

});

  $('.is-hidden').waypoint(function(){
    $(this.element).removeClass('is-hidden').addClass('is-active');
  }, {
    offset: '75%'
  });

});