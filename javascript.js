// pristinejs config file
const validatorConfig = {
	// class of the parent element where the error/success class is added
	classTo: 'form-control',
	errorClass: 'is-invalid',
	successClass: 'is-valid',
	// class of the parent element where error text element is appended
	errorTextParent: 'form-floating',
	// type of element to create for the error text
	errorTextTag: 'div',
	// class of the error text element
	errorTextClass: 'invalid-feedback'
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
	e.preventDefault();

	const pristineValidator = new Pristine(e.target, validatorConfig);
	if (pristineValidator.validate()) {
		const formData = new FormData(e.target);
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
		console.log('done');
		return false;
	}
	console.log('pristine done');
});
