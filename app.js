// *** FUNCTION GROUP #1 ***
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

// *** FUNCTION GROUP #2 ***

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
	// set request parameters for markers
	var request = {
		location: city,
    	radius: 7500,
		keyword: "'fire station'"
	} 

	// create map and run nearby search for request
	service = new google.maps.places.PlacesService(map)
	service.nearbySearch(request, callback)

	// create infowindows for markers
	infowindow = new google.maps.InfoWindow()
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
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: 'images/fire.jpg'
    });

    // create event listener for displayig place details
    google.maps.event.addListener(marker, 'click', function() {
    	infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    	place.formatted_address + '</div>')
    	infowindow.open(map, this)
    })
}