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
	/** Set the padding on project div depending on header's height */
	setProjectPadding: function(){
		var hw = jQuery('header .wrapper').outerHeight();
		var hf = jQuery('header .filters').outerHeight();
		var h = parseInt(hw) + parseInt(hf);

		jQuery('.projects').css('padding-top',h);
		jQuery('.popin-instance').css('top',h);
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
	},
	/** Animate logo text */
	animateLogo: function(){
		var index = 0;
		var logoTitle = jQuery('.logo h1');
		var logoBaseline = jQuery('.logo strong');
		var baselines = [
			[
				'____-',
				'&#175;-_-&#175;-_-&#175;-_-&#175;-_-'
			],
			[
				'___--',
				'-_-&#175;-_-&#175;-_-&#175;-_-&#175;'
			],
			[
				'__---',
				'_-&#175;-_-&#175;-_-&#175;-_-&#175;-'
			],
			[
				'_----',
				'-&#175;-_-&#175;-_-&#175;-_-&#175;-_'
			],
			[
				'-----',
				'&#175;-_-&#175;-_-&#175;-_-&#175;-_-'
			],
			[
				'----&#175;',
				'-_-&#175;-_-&#175;-_-&#175;-_-&#175;'
			],
			[
				'---&#175;&#175;',
				'_-&#175;-_-&#175;-_-&#175;-_-&#175;-'
			],
			[
				'--&#175;&#175;&#175;',
				'-&#175;-_-&#175;-_-&#175;-_-&#175;-_'
			],
			[
				'-&#175;&#175;&#175;&#175;',
				'&#175;-_-&#175;-_-&#175;-_-&#175;-_-'
			],
			[
				'&#175;&#175;&#175;&#175;&#175;',
				'-_-&#175;-_-&#175;-_-&#175;-_-&#175;'
			],
			[
				'&#175;&#175;&#175;&#175;-',
				'_-&#175;-_-&#175;-_-&#175;-_-&#175;-'
			],
			[
				'&#175;&#175;&#175;--',
				'-&#175;-_-&#175;-_-&#175;-_-&#175;-_'
			],
			[
				'&#175;&#175;---',
				'&#175;-_-&#175;-_-&#175;-_-&#175;-_-'
			],
			[
				'&#175;----',
				'-_-&#175;-_-&#175;-_-&#175;-_-&#175;'
			],
			[
				'-----',
				'_-&#175;-_-&#175;-_-&#175;-_-&#175;-'
			],
			[
				'----_',
				'-&#175;-_-&#175;-_-&#175;-_-&#175;-_'
			],
			[
				'---__',
				'&#175;-_-&#175;-_-&#175;-_-&#175;-_-'
			],
			[
				'--___',
				'-_-&#175;-_-&#175;-_-&#175;-_-&#175;'
			],
			[
				'-____',
				'_-&#175;-_-&#175;-_-&#175;-_-&#175;-'
			],

		];

		//baselines = Tm.Utils.Array.Shuffle(baselines);
		var logoInterval = window.setInterval(function(){
			logoTitle.html(baselines[index][0]);
			logoBaseline.html(baselines[index][1]);

			if(index == baselines.length - 1){
				index = 0;
			}else{
				index++;
			}
		},90);
	}
}

Tm.Popin = {
	/** global popin configuration */
	config: {
		fadeInTimer: 300,
		fadeOutTimer: 300
	},
	/**
	* append & open popin object
	* @param {object} content - jQuery object of the content.
	*/
	open: function(content,imgUrl){
		if(content.is('img')){
			jQuery('body').append(Tm.Popin.template(content));
		}
		var popin = jQuery('.popin-instance');
		Tm.Layout.setProjectPadding();
		popin.fadeIn(Tm.Popin.config.fadeInTimer);
		Tm.Popin.initEvents(popin,imgUrl);
	},
	/**
	* close & remove popin object
	* @param {int} timer - Fade out timer after close trigger.
	*/
	close: function(timer){
		var popin = jQuery('.popin-instance');
		popin.fadeOut(timer,function(){
			popin.remove();
		});
	},
	/**
	* event handler initialized after popin appending
	* @param {object} popin - jQuery object of the popin
	*/
	initEvents: function(popin,imgUrl){
		popin.on('click',function(e){
			if(jQuery(e.target).is('.popin-inner')){
				window.open(imgUrl,'_blank');
			}else{
				Tm.Popin.close(Tm.Popin.config.fadeOutTimer);
			}
			
		});
		popin.find('.popin-close').on('click',function(){
			Tm.Popin.close(Tm.Popin.config.fadeOutTimer);
		});
	},
	/**
	* serve popin template
	* @param {object} content - jquery object of the content to display in popin
  	* @returns {string} popin template with img url
	*/
	template: function(content){
		var html =
		'<div class="popin-instance" style="display:none">'+
	    '<span class="popin-close-icon popin-close">✕</span>'+
	    content.addClass('popin-inner').get(0).outerHTML +
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
					Tm.Popin.open(img,$this.attr('href'));
				}
				return false;
			});

		});
	}
}

Tm.Utils = {
	Array: {
		Shuffle: function(array) {
		    let counter = array.length;

		    // While there are elements in the array
		    while (counter > 0) {
		        // Pick a random index
		        let index = Math.floor(Math.random() * counter);

		        // Decrease counter by 1
		        counter--;

		        // And swap the last element with it
		        let temp = array[counter];
		        array[counter] = array[index];
		        array[index] = temp;
		    }

		    return array;
		}
	}
}

/**
 * global init
 */
jQuery(document).ready(function(){
	Tm.Layout.setBodyScrollbar();
	Tm.Layout.setProjectPadding();
	Tm.Layout.isotope();
	Tm.Layout.animateLogo();
	Tm.Popin.init();
});

jQuery(window).resize(function(){
	Tm.Layout.setBodyScrollbar();
	Tm.Layout.setProjectPadding();
	Tm.Layout.sizeGridItems(jQuery('.projects ul'));
});
