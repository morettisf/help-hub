'use strict'

var servicesSelected = {

	policeChecked: false,
	fireChecked: false,
	hospitalChecked: false,
	mentalChecked: false,
	vetChecked: false

}

require('./app')(servicesSelected)
require('./nav')(servicesSelected)
require('./location')()