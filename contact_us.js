const TOKEN = '6426632919:AAEEs_KJocv494hjcnbeuFPVEc9MvrbACIw';
const CHAT_ID = -4058558596;

const messageEl = document.getElementById('message');
const formEl = document.getElementById('form');
formEl.addEventListener('submit', evt => {
    evt.preventDefault(); // Предотвращаем поведение элемента form по умолчанию (отправка запроса и перезагрузка страницы)
    const message = messageEl.value;
    const body = JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
    });
    const headers = new Headers();
    headers.set('content-type', 'application/json'); // JSON
    window
        .fetch(`/send`, {
            method: 'POST',
            headers,
            body,
        })
        .then(() => {});
});
