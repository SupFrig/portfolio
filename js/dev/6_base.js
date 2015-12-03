var Tm = {};

jQuery(document).ready(function(){
	Tm.grid();
});


Tm.grid = function(){
	var grid = jQuery('.projects ul');
	
	grid.isotope({
		itemSelector: '.item',
		layoutMode: 'packery',
        packery: {
          columnWidth: '.grid-sizer'
        }
	});
	
	grid.imagesLoaded( function() {
		grid.isotope('layout');
	});
}