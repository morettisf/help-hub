'use strict'

module.exports = function() {

  var $ = require('jquery')
  var axios = require('axios')

  $(document).ready(function() {

    navigator.geolocation.getCurrentPosition(function(position) {
    convertAddress(position.coords.latitude, position.coords.longitude)
    })

  })

  function convertAddress(lat, lon) {
    // geocoding user's lat & lon to a location that's searchable
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + 
      '&key=AIzaSyCrj6qlelZdeWQMNSuuwEEa2nE3V1sVma4')
      .then((res) => {
        $('#address').val(res.data.results[1].formatted_address)
      })
  }

  $('#address').on('click', function() {
    initAutocomplete()
  })

  function initAutocomplete() {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), 
      {types: ['(cities)'], componentRestrictions: {country: 'us'}})
  }

}