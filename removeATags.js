//Click listener//////////////////////////////////////////////////
var click_count = 0; //click counter
var active = false; //which function to run
var timer;
document.onkeypress = function (e) {
	if (e.keyCode==97) { //lowercase a
		if(click_count==2){ //this would be our 3rd if true
			if(active){
				turnOn();
				resetTimer();
			}else{
				turnOff();
				resetTimer();
			}
			active = !active;
		}else{
			click_count+=1; //add a click
			timer = setTimeout(resetTimer,1000); //reset clicks to 0 if 1s has passed an no 'a' clicks
		}
	}
}
function resetTimer(){
	click_count = 0;
}

//worker functions//////////////////////////////////////////////////
function turnOff(){
	var everyA = document.getElementsByTagName("a");
	for (var i=0;i<everyA.length;i++) {
		var hold_href = everyA[i].getAttribute("href");
		var hold_onclick = everyA[i].getAttribute("onclick");
		everyA[i].removeAttribute("href");
		everyA[i].removeAttribute("onclick");
		everyA[i].setAttribute("hold_href",hold_href);
		everyA[i].setAttribute("hold_onclick",hold_onclick);
	}
}
function turnOn(){
	var everyA = document.getElementsByTagName("a");
	for (var i=0;i<everyA.length;i++) {
		var href = everyA[i].getAttribute("hold_href");
		var onclick = everyA[i].getAttribute("hold_onclick");		
		everyA[i].setAttribute("href",href);
		everyA[i].setAttribute("onclick",onclick);
		everyA[i].removeAttribute("hold_href");
		everyA[i].removeAttribute("hold_onclick");
	}
}