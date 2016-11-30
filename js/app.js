var appExport = function() {

    // *** FUNCTION GROUP #1 ***

    var lat
    var lng

    // event listener for capturing address and what's checked
    document.getElementById('go').addEventListener('click', function() {

        policeChecked = document.getElementById('police').checked
        fireChecked = document.getElementById('fire').checked
        hospitalChecked = document.getElementById('hospital').checked
        mentalChecked = document.getElementById('mental').checked
        vetChecked = document.getElementById('veterinary').checked

        var address = document.getElementById('address').value

        if (policeChecked === true || fireChecked === true || hospitalChecked === true || mentalChecked === true || vetChecked === true) {
            getLatitudeLongitude(address)
        }
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

    var map
    var service
    var infowindow
    var image

    // create object values for each option
    var SERVICES = {
        police: {
            keyword: "'police station'",
            image: "images/police.png"
        },
        fire: {
            keyword: "'fire station'",
            image: "images/fire.png"
        },
        hospital: {
            keyword: "hospital",
            image: "images/hospital.png"
        },
        mental: {
            keyword: "'mental crisis'",
            image: "images/mental.png"
        },
        veterinary: {
            keyword: "veterinary",
            image: "images/vet.png"
        }
    }

    function initMap() {
        
        var city = new google.maps.LatLng(lat, lng)

        map = new google.maps.Map(document.getElementById('map'), {
            center: city,
            zoom: 13,
            disableDefaultUI: true,
            zoomControl: true,
        })

        // default search options
        var searchOptions = {
            location: city,
            radius: 10000,
        }

        var checkedItems = []

        if (policeChecked === true) {
            checkedItems.push('police')
        }

        if (fireChecked === true) {
            checkedItems.push('fire')
        }

        if (hospitalChecked === true) {
            checkedItems.push('hospital')
        }

        if (mentalChecked === true) {
            checkedItems.push('mental')
        }

        if (vetChecked === true) {
            checkedItems.push('veterinary')
        }

        // append default search data object with what's checked
        checkedItems.forEach(function(checked) {
            var data = Object.assign({ keyword: SERVICES[checked].keyword }, searchOptions)
            service = new google.maps.places.PlacesService(map)
            service.nearbySearch(data, callback)

            // retrieve results
            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i]
                        image = SERVICES[checked].image
                        createMarker(place, i * 50, image)
                    }
                }
            }

        })

        // create infowindows for markers
        infowindow = new google.maps.InfoWindow()
    }




    // *** FUNCTION GROUP #3 ***

    // create markers from results
    function createMarker(place, timeout, image) {
        setTimeout(function() {
            var marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: image
            })

            // create event listener for displaying place details
            marker.addListener('click', function() {
                var info = {
                    reference: place.reference
                }

                // get place details
                service.getDetails(info, function(details, status) {

                    var website
                    var phone

                    if (details.website === undefined) {
                        website = 'No website listed'
                    }

                    else {
                        website = '<a href="' + details.website + '">' + details.website + '</a>'
                    }

                    if (details.formatted_phone_number === undefined) {
                        phone = 'No phone listed'
                    }

                    else {
                        phone = '<a href="tel:' + details.formatted_phone_number + '">' + details.formatted_phone_number + '</a>'
                    }

                    var content = '<div id="infoPlace">' + place.name + '</div><br>' +
                        '<div id="infoDetail">' + '<a href="http://maps.google.com/maps?q=' + place.vicinity + '">' + place.vicinity + '</a>'+ '<br>' +
                        phone + '<br>' + 
                        website + '</div>'
                       
                    infowindow.setContent( content )
                    infowindow.open(map, marker)

                })

            })

        }, timeout)
    }

} 

module.exports = appExport