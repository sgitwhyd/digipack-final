'use strict';

$(document).ready(function () {
	new WOW().init();
	$('.lang').on('click', 'li', function () {
		$('.lang li.active').removeClass('active');
		$(this).addClass('active');
	});
	$('.navbar-toggler').click(function () {
		$('.overlay').toggleClass('d-none');
		$('.show-overlay').removeClass('show-overlay');
		$('.open').removeClass('open');
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
function inputPassword2() {
	var input2 = document.getElementById('password2').value;
	var password_wrapper2 = document.getElementById('input-pass2');
	console.log(1);
	if (input2.length > 0) {
		password_wrapper2.classList.add('border-blue');
		document.getElementById('password2').classList.add('bg-grey');
	} else if (input2.length <= 0) {
		password_wrapper2.classList.remove('border-blue');
		document.getElementById('password2').classList.remove('bg-grey');
	}
	return input2;
}
function inputPassword3() {
	var input3 = document.getElementById('password3').value;
	var password_wrapper3 = document.getElementById('input-pass3');
	console.log(1);
	if (input3.length > 0) {
		password_wrapper3.classList.add('border-blue');
		document.getElementById('password3').classList.add('bg-grey');
	} else if (input3.length <= 0) {
		password_wrapper3.classList.remove('border-blue');
		document.getElementById('password3').classList.remove('bg-grey');
	}
	return input3;
}

// }

// page checkout ganti warna ketika input diisi
function fillInput() {
	const inputAlamat = document.querySelectorAll('.inputAlamat');
	for (let ia = 0; ia < inputAlamat.length; ia++) {
		if (inputAlamat[ia].value.length > 0) {
			inputAlamat[ia].classList.add('bg-grey');
			inputAlamat[ia].classList.add('border-blue');
		} else if (inputAlamat[ia].value.length <= 0) {
			inputAlamat[ia].classList.remove('bg-grey');
			inputAlamat[ia].classList.remove('border-blue');
		}
	}
}

// page checkout modal tambah alamat
function getAlamat() {
	var alamat__sebagai = document.getElementById('alamatSebagai').value;
	var nama__penerima = document.getElementById('namaPenerima').value;
	var no__handphone = document.getElementById('noHP').value;
	var kecamatan = document.getElementById('kecamatan').value;
	var kode_pos = document.getElementById('kodepos').value;
	var alamat_lengkap = document.getElementById('alamatLengkap').value;

	const newAlamat = document.getElementById('newAlamat');
	const noAlamat = document.getElementById('no-alamat');
	noAlamat.classList.add('ds-none');

	newAlamat.innerHTML += `<div class="alamat-user-wrapper mt-3">
								<div class="alamat-tipe heading-14-600">${alamat__sebagai}</div>
								<hr />
								<div class="d-flex justify-content-between">
									<div class="user-info-modal heading-16-500 heading-10-400">
										<div class="user-name">${nama__penerima}</div>
										<div class="no-user grey">${no__handphone}</div>
									</div>
									<div class="user-alamat heading-16-400 grey heading-10-400">
										${alamat_lengkap}
									</div>
								</div>
							</div>`;

	document.getElementById('alamatSebagai').value = '';
	document.getElementById('namaPenerima').value = '';
	document.getElementById('noHP').value = '';
	document.getElementById('kecamatan').value = '';
	document.getElementById('kodepos').value = '';
	document.getElementById('alamatLengkap').value = '';

	const inputAlamat = document.querySelectorAll('.inputAlamat');
	for (let ia = 0; ia < inputAlamat.length; ia++) {
		inputAlamat[ia].classList.remove('bg-grey');
		inputAlamat[ia].classList.remove('border-blue');
	}
}
// end page checkout modal tambah alamat

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

// daftar password hide eye
function hidePass() {
	var togglePassword = document.getElementById('togglePassword');
	var password = document.getElementById('password');
	var password_trigger = document.getElementById('password-trigger');

	password_trigger.addEventListener('click', function (e) {
		if (password.type === 'password') {
			password.type = 'text';
			password_trigger.innerHTML = `<i class="fa fa-eye" id="icon-eye"></i>`;
		} else {
			password.type = 'password';
			password_trigger.innerHTML = `<i class="fa fa-eye-slash" id="icon-eye"></i>`;
		}
		return password_trigger;
	});
}
function hidePass2() {
	var password2 = document.getElementById('password2');
	var password_trigger2 = document.getElementById('password-trigger2');

	password_trigger2.addEventListener('click', function (e) {
		if (password2.type === 'password') {
			password2.type = 'text';
			password_trigger2.innerHTML = `<i class="fa fa-eye" id="icon-eye"></i>`;
		} else {
			password2.type = 'password';
			password_trigger2.innerHTML = `<i class="fa fa-eye-slash" id="icon-eye"></i>`;
		}
		return password_trigger2;
	});
}

function hidePass3() {
	var password3 = document.getElementById('password3');
	var password_trigger3 = document.getElementById('password-trigger3');

	password_trigger3.addEventListener('click', function (e) {
		if (password3.type === 'password') {
			password3.type = 'text';
			password_trigger3.innerHTML = `<i class="fa fa-eye" id="icon-eye"></i>`;
		} else {
			password3.type = 'password';
			password_trigger3.innerHTML = `<i class="fa fa-eye-slash" id="icon-eye"></i>`;
		}
		return password_trigger3;
	});
}

// modal hide/show password
let check_password = document.getElementById('password');
let password__eye = document.getElementById('password-eye');
let password_icon = document.getElementById('icon-eye');

password__eye.addEventListener('click', function () {
	if (check_password.type === 'password') {
		check_password.type = 'text';
		password__eye.innerHTML = `<i class="fa fa-eye" id="icon-eye"></i>`;
	} else {
		check_password.type = 'password';
		password__eye.innerHTML = `<i class="fa fa-eye-slash" id="icon-eye"></i>`;
	}
	return password__eye;
});

// swiper banner index
var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
