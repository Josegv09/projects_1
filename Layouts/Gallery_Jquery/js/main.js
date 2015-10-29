var itemsList = $(".itemsList");
var previousBtn = $('.prevBtn');
var nextBtn = $('.nextBtn');
console.log(itemsList);

var i = 0;

var Slider = function (itemsList) {
	this.itemsList = itemsList;
	this.elementsList = this.itemsList.children().length;
}

Slider.prototype = {
	constructor: Slider,
	goPrev:function(){
		i--;
		if (i===-1){
			i=3;
		}
		itemsList.css({'left':(i*-800)+'px'});
		console.log(i);
	},

	goNext:function(){
		i++;
		if (i===mySlider.elementsList) {
			i=0;
		}
		itemsList.css({'left':(-i*800)+'px'});
		console.log(i);
	}
}

var mySlider = new Slider($('.itemsList'));

previousBtn.click(function(){
	mySlider.goPrev();
})

nextBtn.click(function(){
	mySlider.goNext();
})