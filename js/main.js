/* PRELODER function called from Jquery library*/
$(document).ready(function() {
  
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);
  
});

//called from materialize.js  for side navigation when screen width is less then 932px
$(".button-collapse").sideNav();


//called from materialize.js  for modal feature (it works when when 'shopping_cart' or 'add_shopping_cart' buttons are clicked)
$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    // alert("Ready");
    console.log(modal, trigger);
  },
  // complete: function() { alert('Closed'); } // Callback for Modal close
}
);

//called from JQUERY library. It is used for PARALLAX effect
$(document).ready(function(){
  $('.parallax').parallax();
});
      
//JQuery library. This function is needed to navigate among tabs
$(document).ready(function(){
    if (location.hash) {
        $('a[href=' + location.hash + ']').tab('show');
    }
});


//from JQuery library. It is used to maximize product image when clicked 
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//from JQuery library. It is used to initialize material icons
$(document).ready(function() {
  $('select').material_select();
});

  
