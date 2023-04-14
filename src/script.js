// Mobile menu
const drawer = document.querySelector('header')
const burger = document.querySelector('.burger')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	drawer.classList.toggle('active')
	overlayToggle()
})

function overlayToggle() {
	overlay.classList.toggle('active')
	document.documentElement.classList.toggle('no-touch')
	if (overlay.classList.contains('active')) {
		overlay.style.zIndex = '1'
	} else {
		drawer.classList.remove('active')
		burger.classList.remove('active')
		setTimeout(() => {
			overlay.style.zIndex = '-1'
		}, 300)
	}
}

overlay.addEventListener('click', overlayToggle)

// Device button click
const devicesList = document.querySelector('.devices__list')
const deviceButtons = devicesList.querySelectorAll('.device__button')
const modal = document.querySelector('.modal')
const modalClose = modal.querySelector('.modal__close')

deviceButtons.forEach((button) => {
	button.addEventListener('click', toggleModalVisibility)
})
modalClose.addEventListener('click', toggleModalVisibility)

function toggleModalVisibility() {
	modal.classList.toggle('active')
}

// Repair price
const phoneInputs = document.querySelectorAll('input[name="phone"]')
const submitPhoneButton = document.querySelectorAll(
	'button.repair-price__button'
)

phoneInputs.forEach((input) => {
	const mask = IMask(input, {
		mask: '+7 (000) 000-00-00',
	})
})

submitPhoneButton.forEach((button) => {
	button.addEventListener('click', () => {
		const input = button.closest('div').querySelector('.repair-price__input')
		const inputParent = input.parentElement
		if (input.value.length < 18) {
			inputParent.classList.add('error')
		} else {
			inputParent.classList.remove('error')
			input.value = ''
		}
	})
})
