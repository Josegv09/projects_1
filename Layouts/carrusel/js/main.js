var itemsList = document.getElementsByClassName('itemsList')[0];

var cant = itemsList.children.length;
var i=0;

var previousBtn = document.getElementsByClassName('previousBtn')[0];
previousBtn.addEventListener('click', goPrev);

function goPrev (){
	i--;
	if (i===-1) {
		i=3;
	}
	itemsList.style.left =(i*-800)+'px';
	console.log(i);
}

var nextBtn = document.getElementsByClassName('nextBtn')[0];
nextBtn.addEventListener('click', goNext);

function goNext(){
	i++;
	if (i===cant) {
		i=0;
	}
	itemsList.style.left = (-i*800)+'px';
	console.log(i);
}