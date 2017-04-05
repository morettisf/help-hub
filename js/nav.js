'use strict'

module.exports = function(opts) {

	// importing the opts object variables from index.js
  var policeChecked = opts.policeChecked
  var fireChecked = opts.fireChecked
  var hospitalChecked = opts.hospitalChecked
  var mentalChecked = opts.mentalChecked
  var vetChecked = opts.vetChecked

	var $ = require('jquery')

	$(document).ready(function() {
		setTimeout(function() {
			$('nav, #hamburger').addClass('animateStart')
			$('nav').toggleClass('nav-open')
			$('#hamburger').toggleClass('hamburger-open')
			setTimeout(function() {
				$('nav, #hamburger').removeClass('animateStart')
			}, 1500)
		}, 1500)
	})

	$('#hamburger').click(function() {
		$('nav, #hamburger').addClass('animateNav')
		$('nav').toggleClass('nav-open')
		$('#hamburger').toggleClass('hamburger-open')
		setTimeout(function() {
			$('nav, #hamburger').removeClass('animateNav')
		}, 1500)
	})

	$('#go').click(function() {

    	policeChecked = $('#police').prop('checked')
    	fireChecked = $('#fire').prop('checked')
    	hospitalChecked = $('#hospital').prop('checked')
    	mentalChecked = $('#mental').prop('checked')
    	vetChecked = $('#veterinary').prop('checked')

		if ((policeChecked === true || fireChecked === true || hospitalChecked === true || mentalChecked === true || vetChecked === true) && address.value) {
			$('nav, #hamburger').addClass('animateNav')
			$('nav').toggleClass('nav-open')
			$('#hamburger').toggleClass('hamburger-open')
			setTimeout(function() {
				$('nav, #hamburger').removeClass('animateNav')
			}, 1500)
			$('header').fadeOut('500')
		}
		else {
	        $('ul, #go').addClass('shake')
	        setTimeout(function() {
	        	$('ul, #go').removeClass('shake')
	        }, 300)
	    }
	})

} 