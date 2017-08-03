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