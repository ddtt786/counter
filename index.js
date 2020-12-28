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
		get("https://playentry.org/api/discuss/find?category=free")
		.then(function(d){
			odometer.innerHTML = d.count;
			console.log("update")
		});
	};
	setInterval(comucnt, 2000)
})
