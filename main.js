var ul = document.querySelector('nav ul');
var menubtn = document.querySelector('.menu-btn i');

function menushow(){
	if (ul.classList.contains('open')){
		ul.classList.remove('open');
	}else{
		ul.classList.add('open');
	}
}