// *** FUNCTION GROUP #1 ***
var lat
var lng
var policeChecked
var fireChecked
var hospitalChecked
var urgentChecked
var mentalChecked
var vetChecked


// event listener for capturing address and what's checked
document.getElementById('go').addEventListener('click', function() {
    var address = document.getElementById('address').value
    getLatitudeLongitude(address)
	policeChecked = document.getElementById('police').checked
	fireChecked = document.getElementById('fire').checked
	hospitalChecked = document.getElementById('hospital').checked
	urgentChecked = document.getElementById('urgent-care').checked
	mentalChecked = document.getElementById('mental').checked
	vetChecked = document.getElementById('veterinary').checked
	console.log(vetChecked)
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
var service // POLICE
var service2 // FIRE
var service3 // HOSPITAL
var service4 // URGENT CARE
var service5 // MENTAL HEALTH
var service6 // VETERINARY
var infowindow

function initMap() {
	// set map position
	var city = new google.maps.LatLng(lat, lng)

	map = new google.maps.Map(document.getElementById('map'), {
		center: city,
		zoom: 12
	})
	// POLICE - set request parameters for markers
	if (policeChecked === true) {
		var request = {
			location: city,
    		radius: 7500,
			keyword: "'police station'"
		} 

		// POLICE - run nearby search for request
		service = new google.maps.places.PlacesService(map)
		service.nearbySearch(request, callback)
	}

	// FIRE - set request parameters for markers
	if (fireChecked === true) {
		var request2 = {
			location: city,
	    	radius: 7500,
			keyword: "'fire station'"
		} 

		// FIRE - run nearby search for request
		service2 = new google.maps.places.PlacesService(map)
		service2.nearbySearch(request2, callback)
	}

	// HOSPITAL - set request parameters for markers
	if (hospitalChecked === true) {
		var request3 = {
			location: city,
	    	radius: 7500,
			keyword: "'hospital'"
		}

		// HOSPITAL - run nearby search for request
		service3 = new google.maps.places.PlacesService(map)
		service3.nearbySearch(request3, callback)
	}

	// URGENT CARE - set request parameters for markers
	if (urgentChecked === true) {
		var request4 = {
			location: city,
	    	radius: 7500,
			keyword: "'urgent care'"
		} 

		// URGENT CARE - run nearby search for request
		service4 = new google.maps.places.PlacesService(map)
		service4.nearbySearch(request4, callback)
	}

	// MENTAL HEALTH - set request parameters for markers
	if (mentalChecked === true) {
		var request5 = {
			location: city,
	    	radius: 7500,
			keyword: "'mental health'"
		} 

		// MENTAL HEALTH - run nearby search for request
		service5 = new google.maps.places.PlacesService(map)
		service5.nearbySearch(request5, callback)
	}

	// VETERINARY - set request parameters for markers
	if (vetChecked === true) {
		var request6 = {
			location: city,
	    	radius: 7500,
			keyword: "'veterinary'"
		} 

		// VETERINARY - run nearby search for request
		service6 = new google.maps.places.PlacesService(map)
		service6.nearbySearch(request6, callback)
	}

	// create infowindows for markers
	infowindow = new google.maps.InfoWindow()
}

// retrieve results
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker(results[i])
    }
  }
}

// create markers from results
function createMarker(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/police.png"
    })

console.log(place)
    // create event listener for displaying place details
    google.maps.event.addListener(marker, 'click', function() {
    	infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    	place.vicinity + '</div>')
    	infowindow.open(map, this)
    })
}