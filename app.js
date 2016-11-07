var lat
var lng

// event listener for capturing address
document.getElementById('go').addEventListener('click', function() {
    var address = document.getElementById('address').value
    getLatitudeLongitude(address)
})

// initialize the Geocoder
function getLatitudeLongitude(address) {   
    var geocoder = new google.maps.Geocoder()
	geocoder.geocode({'address': address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                showResult(results[0])
            }
        })
}

// capture the lattitude & logitude from res object
function showResult(res) {
	console.log(res)
    lat = (res.geometry.location.lat())
    lng = (res.geometry.location.lng())
    initMap()
}

// pass lat & lng into creating a map and displaying places
var map
var service
var infowindow

function initMap() {
	// set map position
	var city = new google.maps.LatLng(lat, lng)

	map = new google.maps.Map(document.getElementById('map'), {
		center: city,
		zoom: 12
	})
	// set query for markers
	var request = {
		location: city,
    	radius: '500',
    	query: 'fire department'
	} 

	service = new google.maps.places.PlacesService(map)
	service.textSearch(request, callback)
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker(results[i])
    }
  }
}

function createMarker(place) {
    new google.maps.Marker({
        position: place.geometry.location,
        map: map
    });
}