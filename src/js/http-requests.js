async function getUsers() { 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        document.getElementById('usersList').innerHTML = users.map(user => `
            <div>
                <p><strong>${user.name}</strong> (${user.email})</p>
                <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Компанія:</strong> ${user.company.name} - "${user.company.catchPhrase}"</p>
                <p><strong>Телефон:</strong> ${user.phone}</p>
                <p><strong>Сайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            </div>
            <hr>
        `).join('');
    } catch (error) {
        console.error(error);
        document.getElementById('usersList').innerHTML = '<p style="color:red;">Помилка завантаження користувачів!</p>';
    }
}

function hideUsers() {
    document.getElementById('usersList').innerHTML = '';
}

async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error(`Помилка: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

 async function fetchUser() {
    const id = document.getElementById('userId').value;
    const messageBox = document.getElementById('messageBox');
    const resultBox = document.getElementById('userResult');

    messageBox.innerHTML = '';
    resultBox.innerHTML = '';

    if (!id) {
        messageBox.innerHTML = '<p style="color:red;">Будь ласка, введіть ID</p>';
        return;
    }

    const user = await fetchUserById(id);
    if (user) {
        messageBox.innerHTML = '<p style="color:green;">Користувача знайдено!</p>';
        resultBox.innerHTML = `
            <p><strong>${user.name}</strong> (${user.email})</p>
            <p><strong>Адреса:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Компанія:</strong> ${user.company.name} - "${user.company.catchPhrase}"</p>
            <p><strong>Телефон:</strong> ${user.phone}</p>
            <p><strong>Сайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
    } else {
        messageBox.innerHTML = '<p style="color:red;">Користувача не знайдено!</p>';
    }
}