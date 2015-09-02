var Tm = {};

jQuery(document).ready(function(){
	Tm.typed();
});

Tm.typed = function(){
	jQuery("header h1").typed({
		strings: ["Salut !","c'est cool"],
		typeSpeed: 0,
		callback: function(){
			jQuery("header strong").typed({
				strings: ["T'as vu !"],
				typeSpeed: 0,
				callback: function(){
					
				}
			});
		}
	});
};

Tm.fadeGrid = function(){
	var items = jQuery('.projects li');
	
	items.each(function(index,value){
		var $this = jQuery(this);
		
	});
}