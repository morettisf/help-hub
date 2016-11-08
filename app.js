// *** FUNCTION GROUP #1 ***

var lat
var lng
var policeChecked
var fireChecked
var hospitalChecked
var mentalChecked
var vetChecked

// event listener for capturing address and what's checked
document.getElementById('go').addEventListener('click', function() {

    var address = document.getElementById('address').value
    getLatitudeLongitude(address)

	policeChecked = document.getElementById('police').checked
	fireChecked = document.getElementById('fire').checked
	hospitalChecked = document.getElementById('hospital').checked
	mentalChecked = document.getElementById('mental').checked
	vetChecked = document.getElementById('veterinary').checked
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
var service4 // MENTAL CRISIS
var service5 // VETERINARY
var infowindow

function initMap() {
	// set map position
	var city = new google.maps.LatLng(lat, lng)

	map = new google.maps.Map(document.getElementById('map'), {
		center: city,
		zoom: 12
	})

	// add traffic layer
	var trafficLayer = new google.maps.TrafficLayer()
	trafficLayer.setMap(map)

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
		service2.nearbySearch(request2, callback2)
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
		service3.nearbySearch(request3, callback3)
	}

	// MENTAL CRISIS - set request parameters for markers
	if (mentalChecked === true) {
		var request4 = {
			location: city,
	    	radius: 7500,
			keyword: "'mental crisis'"
		} 

		// MENTAL CRISIS - run nearby search for request
		service4 = new google.maps.places.PlacesService(map)
		service4.nearbySearch(request4, callback4)
	}

	// VETERINARY - set request parameters for markers
	if (vetChecked === true) {
		var request5 = {
			location: city,
	    	radius: 7500,
			keyword: "'veterinary'"
		} 

		// VETERINARY - run nearby search for request
		service5 = new google.maps.places.PlacesService(map)
		service5.nearbySearch(request5, callback5)
	}

	// create infowindows for markers
	infowindow = new google.maps.InfoWindow()
}



// *** FUNCTION GROUP #3 ***

// POLICE - retrieve results
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker(results[i])
    }
  }
}

// POLICE - create markers from results
function createMarker(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/police.png"
    })

    // create event listener for displaying place details
    marker.addListener('click', function() {

    	var info = {
    		reference: place.reference
    	}

    	// get place details
    	service.getDetails(info, function(details, status) {
    		// if no website in object, change undefined to text below
    		if (details.website === undefined) {
    			details.website = 'No website available'
    			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			details.website + '</div>')
    			infowindow.open(map, marker)
    		}

    		else {
    			// populate place detail in pop up window			
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			"<a href='" + details.website + "'>" + details.website + "</a>" + '</div>')
    			infowindow.open(map, marker)
    		}
    	})
    	
    })
}

// FIRE - retrieve results
function callback2(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker2(results[i])
    }
  }
}

// FIRE - create markers from results
function createMarker2(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/fire.png"
    })

    // create event listener for displaying place details
    marker.addListener('click', function() {

    	var info = {
    		reference: place.reference
    	}

    	// get place details
    	service2.getDetails(info, function(details, status) {
    		// if no website in object, change undefined to text below
    		if (details.website === undefined) {
    			details.website = 'No website available'
    			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			details.website + '</div>')
    			infowindow.open(map, marker)
    		}

    		else {
    			// populate place detail in pop up window			
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			"<a href='" + details.website + "'>" + details.website + "</a>" + '</div>')
    			infowindow.open(map, marker)
    		}
    	})
    	
    })
}

// HOSPITAL - retrieve results
function callback3(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker3(results[i])
    }
  }
}

// HOSPITAL - create markers from results
function createMarker3(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/hospital.png"
    })

    // create event listener for displaying place details
    marker.addListener('click', function() {

    	var info = {
    		reference: place.reference
    	}

    	// get place details
    	service3.getDetails(info, function(details, status) {
    		// if no website in object, change undefined to text below
    		if (details.website === undefined) {
    			details.website = 'No website available'
    			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			details.website + '</div>')
    			infowindow.open(map, marker)
    		}

    		else {
    			// populate place detail in pop up window			
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			"<a href='" + details.website + "'>" + details.website + "</a>" + '</div>')
    			infowindow.open(map, marker)
    		}
    	})
    	
    })
}

// MENTAL CRISIS - retrieve results
function callback4(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker4(results[i])
    }
  }
}

// MENTAL CRISIS - create markers from results
function createMarker4(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/mental.png"
    })

    // create event listener for displaying place details
    marker.addListener('click', function() {

    	var info = {
    		reference: place.reference
    	}

    	// get place details
    	service4.getDetails(info, function(details, status) {
    		// if no website in object, change undefined to text below
    		if (details.website === undefined) {
    			details.website = 'No website available'
    			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			details.website + '</div>')
    			infowindow.open(map, marker)
    		}

    		else {
    			// populate place detail in pop up window			
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			"<a href='" + details.website + "'>" + details.website + "</a>" + '</div>')
    			infowindow.open(map, marker)
    		}
    	})
    	
    })
}

// VETERINARY - retrieve results
function callback5(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i]
      createMarker5(results[i])
    }
  }
}

// VETERINARY - create markers from results
function createMarker5(place) {
    var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        icon: "images/vet.png"
    })

    // create event listener for displaying place details
    marker.addListener('click', function() {

    	var info = {
    		reference: place.reference
    	}

    	// get place details
    	service5.getDetails(info, function(details, status) {
    		// if no website in object, change undefined to text below
    		if (details.website === undefined) {
    			details.website = 'No website available'
    			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			details.website + '</div>')
    			infowindow.open(map, marker)
    		}

    		else {
    			// populate place detail in pop up window			
				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    			place.vicinity + '<br>' +
    			details.formatted_phone_number + '<br>' +
    			"<a href='" + details.website + "'>" + details.website + "</a>" + '</div>')
    			infowindow.open(map, marker)
    		}
    	})
    	
    })
}