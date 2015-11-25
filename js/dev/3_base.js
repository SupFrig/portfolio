var Tm = {};

jQuery(document).ready(function(){
	//Tm.typed();
	Tm.fadeGrid();
});

Tm.typed = function(){
	jQuery("header h1").typed({
		strings: ["↑ ↑ ↓ ↓ ← → ← → A B","Configaming.fr"],
		typeSpeed: 0,
		callback: function(){
			jQuery("header strong").typed({
				strings: ["Retrogaming &amp; confitures"],
				typeSpeed: 0
			});
		}
	});
};

Tm.fadeGrid = function(){
	var items = jQuery('.projects li');
	var globalTimer = 0;
	var timerInterval = 50;
	items.each(function(index,value){
		globalTimer += timerInterval;
		var $this = jQuery(this);
		
		var t = window.setTimeout(function(){
			$this.animate({
				'opacity':'1'
			},300);
			window.clearTimeout(t);
		},globalTimer);
	});
}