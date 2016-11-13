$(document).ready(function() {
	$('nav').toggleClass('nav-open')
	$('#hamburger').toggleClass('hamburger-open')
})

$('#hamburger').click(function() {
	$('nav').toggleClass('nav-open')
	$('#hamburger').toggleClass('hamburger-open')
})

$('#go').click(function() {
	if ((policeChecked === true || fireChecked === true || hospitalChecked === true || mentalChecked === true || vetChecked === true) && address.value) {
		$('nav').toggleClass('nav-open')
		$('#hamburger').toggleClass('hamburger-open')
		$('header').fadeOut('500')
	}
	else {
        $('ul, #go').addClass('shake')
        setTimeout(function() {
        	$('ul, #go').removeClass('shake')
        }, 300)
    }
})