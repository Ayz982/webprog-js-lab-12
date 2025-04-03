function fetchNumber(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error('Не вдалося отримати число'));
            } else {
                resolve(9);
            }
        }, 2000);
    });
}

async function getNumber(shouldFail = false) {
    const outputElement = document.querySelector('#output');
    outputElement.innerHTML = 'Зачекайте...'; 
    try {
        const number = await fetchNumber(shouldFail);
        outputElement.innerHTML = `Отримане число: <strong>${number}</strong>`;
    } catch (error) {
        outputElement.innerHTML = `<span class="error">Помилка: ${error.message}</span>`;
    }
}

const fetchButton = document.querySelector('#fetch-button');
fetchButton.addEventListener('click', () => {
    const resultType = document.querySelector('#result-type').value;
    const shouldFail = resultType === 'error'; 
    getNumber(shouldFail);
});