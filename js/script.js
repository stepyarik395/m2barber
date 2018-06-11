function initMap()
{
	var element = document.getElementById('map');
	var options = {
		zoom: 17,
		center: {lat:47.843315, lng:35.122781}

	};


var myMap = new google.maps.Map(element,options);

var marker = new google.maps.Marker({
	position:{lat:47.843315, lng:35.122781},
	map:myMap
})

var InfoWindow = new google.maps.InfoWindow({
	content:'<h1> Сталеваров 17<br> M2Barbershop</h1>'

});

marker.addListener('click',function(){
	InfoWindow.open(map,marker);
});

}




