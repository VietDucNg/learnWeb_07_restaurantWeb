const mainDiv = document.querySelector('.main-div');

function createAddressDiv() {
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address-div', 'flex-row');
    
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa-solid','fa-location-dot');

    const address = document.createElement('p');
    address.textContent = 'Friedrich-Ludwig-Jahn-Str. 16, 17487 Greifswald';

    addressDiv.append(locationIcon, address);
    return addressDiv;
}

function createOpenTimeDiv() {
    const openTimeDiv = document.createElement('div');
    openTimeDiv.classList.add('openTime-div', 'flex-row');

    const calendarIcon = document.createElement('i');
    calendarIcon.classList.add('fa-solid','fa-calendar-days');

    const openTime = document.createElement('p');
    openTime.textContent = 'Monday - Friday: 11:00 - 22:00\n' +
    'Saturday: 11:00 - 14:00\n' + 'Sunday: closed'

    openTimeDiv.append(calendarIcon, openTime);
    return openTimeDiv;
}

function createPhoneDiv() {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('phone-div', 'flex-row');

    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fa-solid','fa-phone');

    const phone = document.createElement('p');
    phone.textContent ='(049) 8386 8869';

    phoneDiv.append(phoneIcon, phone);
    return phoneDiv;
}

function createEmailDiv(){
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email-div', 'flex-row');

    const emailIcon = document.createElement('i');
    emailIcon.classList.add('fa-solid','fa-envelope');

    const email = document.createElement('p');
    email.textContent = 'info.hanoiDelights@gmail.com';

    emailDiv.append(emailIcon, email)
    return emailDiv;
}

function createInfoDiv() {
    const inforDiv = document.createElement('div');
    inforDiv.classList.add('address-div');
    inforDiv.append(
        createAddressDiv(), 
        createOpenTimeDiv(), 
        createPhoneDiv(), 
        createEmailDiv(),
    );
    return inforDiv
}

function createNameInputDiv() {
    const nameInputDiv = document.createElement('div');
    nameInputDiv.classList.add('field-div','nameInput-div');

    const label = document.createElement('label');
    label.textContent = 'Full Name';
    label.htmlFor = 'name';

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input-div')

    const nameInputIcon = document.createElement('i');
    nameInputIcon.classList.add('fa-solid','fa-user');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Viet Nguyen';
    nameInput.id = 'name';
    nameInput.required;

    inputDiv.append(nameInputIcon, nameInput);
    nameInputDiv.append(label, inputDiv);
    return nameInputDiv;
}

function createEmailInputDiv() {
    const emailInputDiv = document.createElement('div');
    emailInputDiv.classList.add('field-div', 'emailInput-div');

    const label = document.createElement('label');
    label.textContent = 'Email';
    label.htmlFor = 'email';

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input-div');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid','fa-envelope');

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.id = 'email';
    emailInput.placeholder = 'viet.nguyen@example.com';
    emailInput.required;

    inputDiv.append(icon, emailInput);
    emailInputDiv.append(label, inputDiv);
    return emailInputDiv;
}

function createMsgInputDiv() {
    const msgInputDiv = document.createElement('div');
    msgInputDiv.classList.add('field-div', 'msgInput-div', 'flex-column');

    const label = document.createElement('label');
    label.textContent = 'Message';
    label.htmlFor = 'message';

    const msgInput = document.createElement('textarea');
    msgInput.placeholder = 'Leave us a message ...';
    msgInput.cols = 10;
    msgInput.id = 'message'
    msgInput.required;

    msgInputDiv.append(label, msgInput);
    return msgInputDiv;
}

function createContactForm() {
    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.append(
        createNameInputDiv(),
        createEmailInputDiv(),
        createMsgInputDiv(),
    );
    return form;
}

function createMapDiv() {

}

function loadContact(){
    mainDiv.append(createInfoDiv(), createContactForm());
}

export default loadContact;