'use strict';

$(document).ready(function () {
	new WOW().init();
	$('.lang').on('click', 'li', function () {
		$('.lang li.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.navbar-toggler').click(function () {
		$('.overlay').toggleClass('d-none');
	});
	$('.single-item').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		autoplay: true,
		arrows: false,
		dots: true,
	});
	$('.single-item-profile').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		autoplay: true,
		arrows: false,
		dots: true,
	});
	$('.multiple-items').slick({
		prevArrow:
			'<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:
			'<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					arrows: false,
					slidesToScroll: 1,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	$('.instagram-slider').slick({
		prevArrow:
			'<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow:
			'<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					autoplay: true,
					arrows: false,
					slidesToScroll: 1,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});
	$('.portfolio-slide').slick({
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			}, // You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		arrows: true,
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	});
});
//# sourceMappingURL=main.js.map

// custom select

function inputProduk() {
	var produk = document.getElementById('input-produk-name').value;
	if (produk.length > 0) {
		document.getElementById('input-produk-name').classList.add('border-blue');
	} else if (produk.length <= 0) {
		document
			.getElementById('input-produk-name')
			.classList.remove('border-blue');
	}

	return produk;
}

function inputEmail() {
	var input = document.getElementById('email').value;
	console.log(1);
	if (input.length > 0) {
		document.getElementById('email').classList.add('border-blue');
	} else if (input.length <= 0) {
		document.getElementById('email').classList.remove('border-blue');
	}
	return input;
}

function inputNama() {
	var input = document.getElementById('nama').value;
	console.log(1);
	if (input.length > 0) {
		document.getElementById('nama').classList.add('border-blue');
	} else if (input.length <= 0) {
		document.getElementById('nama').classList.remove('border-blue');
	}
	return input;
}
function inputPassword() {
	var input = document.getElementById('password').value;
	var password_wrapper = document.getElementById('input-pass');
	console.log(1);
	if (input.length > 0) {
		password_wrapper.classList.add('border-blue');
		document.getElementById('password').classList.add('bg-grey');
	} else if (input.length <= 0) {
		password_wrapper.classList.remove('border-blue');
		document.getElementById('password').classList.remove('bg-grey');
	}
	return input;
}

for (const dropdown of document.querySelectorAll('.custom-select-wrapper')) {
	dropdown.addEventListener('click', function () {
		this.querySelector('.custom-select').classList.toggle('open');
		for (const trigger of document.querySelectorAll('#trigger')) {
			trigger.classList.add('border-blue');
			console.log('add');
			return trigger;
		}
	});
}

for (const selectMenu of document.querySelectorAll('.custom-select__trigger')) {
	selectMenu.addEventListener('click', function () {
		selectMenu.classList.add('border-blue');
	});
}

for (const option of document.querySelectorAll('.custom-option')) {
	option.addEventListener('click', function () {
		if (!this.classList.contains('selected')) {
			this.parentNode
				.querySelector('.custom-option.selected')
				.classList.remove('selected');
			this.classList.add('selected');
			this.closest('.custom-select').querySelector(
				'.custom-select__trigger span'
			).textContent = this.textContent;
			for (const trigger of document.querySelectorAll('#trigger')) {
				trigger.classList.add('border-blue');
				console.log('add');
				return trigger;
			}
		}
	});
}

window.addEventListener('click', function (e) {
	for (const select of document.querySelectorAll('.custom-select')) {
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	}
});

// password hide eye
function myFunc() {
	var togglePassword = document.getElementById('togglePassword');
	var password = document.getElementById('password');

	togglePassword.addEventListener('click', function (e) {
		// toggle the type attribute
		if (password.type === 'password') {
			password.type = 'text';
			togglePassword.classList.toggle('fa-eye');
		} else {
			password.type = 'password';
			togglePassword.classList.toggle('fa-eye-slash');
		}

		return password;
		// toggle the eye slash icon
		// this.classList.toggle('fa-eye-slash');
	});
}

function myFunc2() {
	var togglePassword = document.getElementById('togglePassword');
	var password = document.getElementById('password-1');

	togglePassword.addEventListener('click', function (e) {
		// toggle the type attribute
		if (password.type === 'password') {
			password.type = 'text';
			togglePassword.classList.toggle('fa-eye');
		} else {
			password.type = 'password';
			togglePassword.classList.toggle('fa-eye-slash');
		}

		return password;
		// toggle the eye slash icon
		// this.classList.toggle('fa-eye-slash');
	});
}

function passVis() {
	var x = document.getElementById('password');
	if (x.type === 'password') {
		x.type = 'text';
		const togglePassword = document.querySelector('#togglePassword');
		togglePassword.classList.toggle('fa-eye-slash');
	} else {
		x.type = 'password';
		const togglePassword = document.querySelector('#togglePassword');
		togglePassword.classList.toggle('fa-eye');
		return togglePassword;
	}
}

// user menu

let user_panel = document.getElementById('user__panel');
let bag_user = document.getElementById('bag__user');
let notif_user = document.getElementById('notif__user');
// user bag dropdown
let user_panel_action = document.getElementById('user-action-panel');
let user_bag = document.getElementById('user-bag');
let user_notif = document.getElementById('user_notif');
let overlay = document.getElementById('overlay');

user_panel.addEventListener('click', function () {
	user_panel_action.classList.toggle('show-overlay');
	user_bag.classList.remove('show-overlay');
	user_notif.classList.remove('show-overlay');
	overlay.classList.remove('show-overlay');

	if (user_panel_action.classList.contains('show-overlay')) {
		overlay.classList.add('show-overlay');
	} else {
		overlay.classList.remove('show-overlay');
	}

	return;
});

bag_user.addEventListener('click', function () {
	user_bag.classList.toggle('show-overlay');
	user_panel_action.classList.remove('show-overlay');
	user_notif.classList.remove('show-overlay');
	// overlay.classList.toggle('show-overlay');

	if (user_bag.classList.contains('show-overlay')) {
		overlay.classList.add('show-overlay');
	} else {
		overlay.classList.remove('show-overlay');
	}

	return;
});

notif_user.addEventListener('click', function () {
	user_notif.classList.toggle('show-overlay');
	user_bag.classList.remove('show-overlay');
	user_panel_action.classList.remove('show-overlay');
	// overlay.classList.toggle('show-overlay');

	if (user_notif.classList.contains('show-overlay')) {
		overlay.classList.add('show-overlay');
	} else {
		overlay.classList.remove('show-overlay');
	}

	return;
});

overlay.addEventListener('click', function () {
	user_bag.classList.remove('show-overlay');
	user_panel_action.classList.remove('show-overlay');
	user_notif.classList.remove('show-overlay');
	overlay.classList.remove('show-overlay');
});
