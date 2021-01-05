get = function(url){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(d){resolve(d);}
		});
	});
};

$(document).ready(() => {
	const odometer = document.querySelector(".odometer");
	comucnt = function(){
		get("https://playentry.org/api/comment/discuss/count/5f41a7175115dd042426c457")
		.then(function(d){
			odometer.innerHTML = d;
			console.log(d)
		});
	};
	setInterval(comucnt, 2000)
})
