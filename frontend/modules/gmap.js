function initMap() {
	var map,
			map2,
			map3,
			marker,
			marker2,
			marker3,
			markerCoord = {
				lat: 55.726434,
				lng: 37.399429
			},
			markerCoord2 = {
				lat: 55.682598,
				lng: 37.136025
			},
			markerCoord3 = {
				lat: 56.832169,
				lng: 60.613464
			},
			center = {
				lat: 55.726434,
				lng: 37.399429
			},
			center2 = {
				lat: 55.683687, 
				lng: 37.141590
			},
			center3 = {
				lat: 56.832507, 
				lng: 60.612514
			},
			zoom = 15,
			zoom2 = 15,
			zoom3 = 16;

	map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		scrollwheel: false,
		zoom: zoom
	});

	marker = new google.maps.Marker({
		position: markerCoord,
		map: map
	});

	map2 = new google.maps.Map(document.getElementById('map2'), {
		center: center2,
		scrollwheel: false,
		zoom: zoom
	});

	marker2 = new google.maps.Marker({
		position: markerCoord2,
		map: map2
	});

	map3 = new google.maps.Map(document.getElementById('map3'), {
		center: center3,
		scrollwheel: false,
		zoom: zoom3
	});

	marker3 = new google.maps.Marker({
		position: markerCoord3,
		map: map3
	});
}

//export default initMap;

document.getElementById('map') ? google.maps.event.addDomListener(window, 'load', initMap) : console.log('Map undefined');