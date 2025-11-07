// Aktywacja tooltipów, popoverów i toastów
document.addEventListener('DOMContentLoaded', () => {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	;[...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	;[...popoverTriggerList].map(el => new bootstrap.Popover(el))

	const toast = new bootstrap.Toast(document.getElementById('liveToast'))
	toast.show()
})
