const form = document.getElementById('form');
const firstname = document.getElementById('first_name');
const lastname = document.getElementById('last_name');
const email = document.getElementById('email');
const mobileNo = document.getElementById('moble_no');
const address = document.getElementById('address');
const birthday = document.getElementById('birthday');
const emergencyName = document.getElementById('emergency_name');
const relationship = document.getElementById('relationship');
const emergencyMobleNo = document.getElementById('emergency_moble_no');

function checkInputs() {
	const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const mobileNoValue = mobileNo.value;
    const addressValue = address.value;
    const birthdayValue = birthday.value;
    const emergencyNameValue = emergencyName.value;
    const relationshipValue = relationship.value;
    const emergencyMobleNoValue = emergencyMobleNo.value;

	let isValid = true;

    //validate firstname
    if (firstnameValue === '' || firstnameValue == null) {
		setErrorFor(firstname, 'First name cannot be empty');
		isValid = false;
    } else if (firstnameValue.length > 45){
        setErrorFor(firstname, 'First name cannot exceed 45 characters');
		isValid = false;
    }else {
		setSuccessFor(firstname);
	}

    //validate lastname
    if (lastnameValue === '' || lastnameValue == null) {
		setErrorFor(lastname, 'Last name cannot be empty');
		isValid = false;
    } else if (lastnameValue.length > 45){
        setErrorFor(lastname, 'Last name cannot exceed 45 characters');
		isValid = false;
    } else {
		setSuccessFor(lastname);
	}

    //validate email
    if (emailValue === '' || emailValue == null) {
		setErrorFor(email, 'Email cannot be empty');
		isValid = false;
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
		isValid = false;
    } else {
		setSuccessFor(email);
	}

    //validate mobile no
    if (mobileNoValue === '' || mobileNoValue == null) {
		setErrorFor(mobileNo, 'Mobile number cannot be empty');
		isValid = false;
    } else if (!isNum(mobileNoValue)) {
        setErrorFor(mobileNo, 'Not a valid mobile number');
		isValid = false;
    } else if (mobileNoValue.length < 10) {
        setErrorFor(mobileNo, 'Mobile number cannot less than 10 digits');
		isValid = false;
    } else if (mobileNoValue.length > 10) {
        setErrorFor(mobileNo, 'Mobile number cannot exceed 10 digits');
		isValid = false;
    } else if (!isMobileNo(mobileNoValue)){
        setErrorFor(mobileNo, 'Not a valid mobile number');
		isValid = false;
    } else {
		setSuccessFor(mobileNo);
	}

    //validate address
    if (addressValue === '' || addressValue == null) {
        setErrorFor(address, 'Address cannot be empty');
		isValid = false;
    } else {
        setSuccessFor(address);
    }

    //validate birthday
    if (birthdayValue === '' || birthdayValue == null) {
        setErrorFor(birthday, 'Birthday cannot be empty');
		isValid = false;
    } else { //check for future dates
        setSuccessFor(birthday);
    }

    //validate contact person's name
    if (emergencyNameValue === '' || emergencyNameValue == null) {
        setErrorFor(emergencyName, "Contact person's cannot be empty");
		isValid = false;
    } else if (emergencyNameValue.length > 100) {
        setErrorFor(emergencyName, "Contact person's cannot exceed 100 characters");
		isValid = false;
    } else {
        setSuccessFor(emergencyName);
    }

    //validate relation
    if (relationshipValue === '' || relationshipValue == null) {
        setErrorFor(relationship, 'Relation cannot be empty');
		isValid = false;
    } else if (relationshipValue.length > 45) {
        setErrorFor(relationship, 'Relation cannot exceed 45 characters');
		isValid = false;
    } else {
        setSuccessFor(relationship);
    }

    //validate contact person's mobile number
    if (emergencyMobleNoValue === '' || emergencyMobleNoValue == null) {
		setErrorFor(emergencyMobleNo, 'Mobile number cannot be empty');
		isValid = false;
    } else if (!isNum(emergencyMobleNoValue)) {
        setErrorFor(emergencyMobleNo, 'Not a valid mobile number');
		isValid = false;
    } else if (emergencyMobleNoValue.length < 10) {
        setErrorFor(emergencyMobleNo, 'Mobile number cannot less than 10 digits');
		isValid = false;
    } else if (emergencyMobleNoValue.length > 10) {
        setErrorFor(emergencyMobleNo, 'Mobile number cannot exceed 10 digits');
		isValid = false;
    } else if (!isMobileNo(emergencyMobleNoValue)){
        setErrorFor(emergencyMobleNo, 'Not a valid mobile number');
		isValid = false;
    } else if (emergencyMobleNoValue == mobileNoValue) {
        setErrorFor(emergencyMobleNo, 'Cannot be same personal number');
        isValid = false;
    } else {
		setSuccessFor(emergencyMobleNo);
	}

    return isValid;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control form-outline form-input error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control form-outline form-input success';
}

function isNum(number) {
	return /^\d+$/.test(number);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isMobileNo(mobileNo) {
    return /^\d{10}$/.test(mobileNo);
}