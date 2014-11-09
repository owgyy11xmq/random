window.onload = function(){

	var
	color1 = 'rgb(0, 82, 158)',
	color2 = 'rgb(206, 206, 206)';

	for(var i=0, len = document.getElementsByClassName('answer').length; i<len; i++){
		var
		answer = document.getElementsByClassName('answer')[i];
		answer.style.color = color1;
		answer.style.backgroundColor = color1;

		answer.onclick = function(){
			this.style.color = (this.style.color == color1) ? color2 : color1;
		}
	}

	var
	parent = document.querySelector('body'),
	len = parent.children.length;
	for(var i = len; i >= 0; i--){
	    parent.appendChild(parent.children[Math.random() * i | 0]);
	}

}