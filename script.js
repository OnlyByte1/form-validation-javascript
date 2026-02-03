document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const errors = [];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const age = parseInt(document.getElementById('age').value);
    const agreement = document.getElementById('agreement').checked;

    if (!name || name.length < 2 || name.length > 20 || /\d/.test(name)) {
        errors.push('Имя должно содержать от 2 до 20 символов и не должно содержать цифры.');
    }

    if (!email.includes('@') || !email.includes('.') || email.startsWith('@')) {
        errors.push('Email должен содержать символ @ и точку после него, и не должен начинаться с @.');
    }

    if (password.length < 6 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
        errors.push('Пароль должен содержать минимум 6 символов, одну цифру и одну заглавную букву.');
    }

    if (password !== passwordConfirm) {
        errors.push('Пароль и подтверждение пароля должны совпадать.');
    }

    if (isNaN(age) || age < 18 || age > 100) {
        errors.push('Возраст должен быть числом от 18 до 100.');
    }

    if (!agreement) {
        errors.push('Необходимо согласие с правилами.');
    }

    const errorList = document.getElementById('errorList');
    const successMessage = document.getElementById('successMessage');
    errorList.innerHTML = '';
    successMessage.classList.add('hidden');

    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorList.appendChild(li);
        });
    } else {
        successMessage.textContent = 'Форма заполнена правильно!';
        successMessage.classList.remove('hidden');
    }
});
