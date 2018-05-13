
window.onload = function(){
//from JQuery library to initialize dropdown effect
$('.dropdown-button').dropdown({
	inDuration: 300,
	outDuration: 225,
	    constrainWidth: false, // Does not change width of dropdown to that of the activator
	    hover: true, // Activate on hover
	    gutter: 0, // Spacing from edge
	    belowOrigin: true, // Displays dropdown below the button
	    alignment: 'left', // Displays dropdown with edge aligned to the left of button
	    stopPropagation: false // Stops event propagation
	});
//from JQuery library to initialize fadeIn effect in Product pages
var options = [
	{selector: '#rowEffect2', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#rowEffect3', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#rowEffect4', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} },
	{selector: '#rowEffect5', offset: 0, callback: function(el) {
		Materialize.fadeInImage($(el));
	} }
	];
	Materialize.scrollFire(options);
}