var Tm = {};

jQuery(document).ready(function(){
	Tm.isotope();
});


Tm.isotope = function(){
	var grid = jQuery('.projects ul');
	
	grid.isotope({
		itemSelector: '.item',
		layoutMode: 'packery',
        packery: {
          columnWidth: '.grid-sizer'
        }
	});
	
	grid.imagesLoaded( function() {
		
		//size grid items
		grid.find('li').each(function(){
			var $this = jQuery(this);
			var img = $this.find('img');
			if(img.length){
				var ratio = img.width() / img.height();

				if(ratio < 1){
					console.log('vertical');
					var height = img.width() * (ratio);
					console.log(height);
				}else{
					
				}
			}
		});
		
		grid.isotope('layout');
	});
	
	
	
	//filters function
	jQuery('.filters').on('click','a',function(){
		var $this = jQuery(this);
		var generalFilter = '';
		$this.toggleClass('active');
		jQuery('.filters a.active').each(function(){
			generalFilter += jQuery(this).attr('data-filter')+',';
		});
		generalFilter = generalFilter.slice(0, -1);
		
		grid.isotope({filter: generalFilter});
		return false;
	});
}

Tm.popin = function(){
	
}