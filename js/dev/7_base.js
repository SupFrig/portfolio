var Tm = {};
Tm.imgSizesArray = [];

Tm.Layout = {
	/** Force overflow scroll before isotope init */
	setBodyScrollbar: function(){
		//force overflow scroll if needed to avoid the scrollbar compute bug
		if ( document.querySelector('body').offsetHeight > window.innerHeight ) {
		  document.documentElement.style.overflowY = 'scroll';
		}
	},

	/** Initialize isotope grid */
	isotope: function(){
		var grid = jQuery('.projects ul');

		grid.isotope({
			itemSelector: '.item',
			layoutMode: 'packery',
			isInitLayout: false,
	        packery: {
	          columnWidth: '.grid-sizer'
	        }
		});

		grid.on('layoutComplete',function(){
		  jQuery('.projects').css('opacity',1);
		});

		Tm.Layout.sizeGridItems(grid);

		//filters function
		jQuery('.filters').on('click','a',function(){
			var $this = jQuery(this);
			var generalFilter = '';

			Tm.Layout.setBodyScrollbar();

			$this.toggleClass('active');
			jQuery('.filters a.active').each(function(){
				generalFilter += jQuery(this).attr('data-filter')+',';
			});
			generalFilter = generalFilter.slice(0, -1);

			grid.isotope({filter: generalFilter});
			return false;
		});
	},
	/**
	* Normalize grid items format
	* @param {object} grid - jQuery object of isotope grid container.
	*/
	sizeGridItems: function(grid){
		grid.imagesLoaded( function() {
			//size grid items
			grid.find('li').each(function(){
				var $this = jQuery(this);
				var img = $this.find('img');

				if(img.length){
					var ratio = img.width() / img.height();

					if(ratio < 1){
						var newRatio = 29.7 / 21;
						var height = img.width() * (newRatio);
						$this.css('height',height);
					}else{
						var newRatio = 21 / 29.7;
						var height = img.width() * (newRatio);
						$this.css('height',height);
					}
				}
			});
			grid.isotope('layout');
		});
	}
}

Tm.Popin = {
	open: function(img){
		jQuery('body').append(Tm.Popin.template(img.attr('src')));

		var popin = jQuery('.popin-instance');
		popin.fadeIn(300);
		Tm.Popin.initEvents(popin);
	},
	close: function(timer){
		var popin = jQuery('.popin-instance');
		popin.fadeOut(timer,function(){
			popin.remove();
		});
	},
	initEvents: function(popin){
		popin.on('click',function(){
			Tm.Popin.close(300);
		});
		popin.find('.popin-close').on('click',function(){
			Tm.Popin.close(300);
		});
	},
	template: function(imgUrl){
		var html =
		'<div class="popin-instance" style="display:none">'+
	    '<span class="popin-close-icon popin-close">✕</span>'+
	    '<img src="'+imgUrl+'" class="popin-inner"/>'+
		'</div>';
		return html;
	},
	init: function(){
		jQuery('.popin').each(function(){
			jQuery(this).on('click',function(){
				var $this = jQuery(this);
				var img = $this.find('img');
				if($this.hasClass('content')){
					//todo page popins
				}else{
					Tm.Popin.open(img);
				}
				return false;
			});

		});
	}
}

/**
 * global init
 */
jQuery(document).ready(function(){
	Tm.Layout.setBodyScrollbar();
	Tm.Layout.isotope();
	Tm.Popin.init();
});

jQuery(window).resize(function(){
	Tm.Layout.setBodyScrollbar();
	Tm.Layout.sizeGridItems(jQuery('.projects ul'));
});
