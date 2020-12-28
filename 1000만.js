function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function wait(msecs) {
    let start = new Date().getTime();
    let cur = start;
    while(cur - start < msecs) {
		cur = new Date().getTime();
	}
}
get = function(url){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(d){resolve(d);}
		});
	});
};


wa = 9998350
ppap = 1
flast = 0
$(document).ready(() => {
	const odometer = document.querySelector(".odometer");
	comucnt = function(){
		console.log("umm")
		sans = random(-20,40*ppap)
		odometer.innerHTML = wa+sans;
		wa = wa+sans;
		if(flast==1&&ppap==1.5){
			ppap = 1.2
		}
		if(flast==1&&ppap==2){
			ppap = 1.5
			flast = 1
		}
		if(flast==1&&ppap==2.5){
			ppap = 2
			flast = 1
		}
		if(flast==1&&ppap==4){
			ppap = 2.5
			flast = 1
		}
		if(flast==1&&ppap==7){
			ppap = 4
			flast = 1
		}
		if(flast==1&&ppap==10){
			ppap = 7
			flast = 1
		}
		if(wa>10000000&&ppap==1&&flast==0){
			ppap = 10
			flast = 1
		}
	};
	setInterval(comucnt, 2000)
})